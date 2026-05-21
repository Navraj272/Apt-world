import db from '@src/db/models';
import { BaseHandler } from '@src/libs/baseHandler';
import { dayjs } from '@src/libs/dayjs';
import { CACHE_KEYS  } from '@src/utils/constants/public.constants';
import { getCache, setInternalCache } from '@src/libs/redis';

const PST = 'America/Los_Angeles';

export class GetApplicationStatsHandler extends BaseHandler {
  async run() {
    let startDate;
    let endDate;

    if (this.args.startDate && this.args.endDate) {
      startDate = this.args.startDate.split('T')[0];
      endDate = this.args.endDate.split('T')[0];
    } else {
      const today = dayjs().tz(PST).startOf('day');
      const startOfWeek = today.startOf('isoWeek');
      startDate = startOfWeek.format('YYYY-MM-DD');
      endDate = today.format('YYYY-MM-DD');
    }

    // strict mode detection
    const rawMode = typeof this.args.internalUser === 'string'
      ? this.args.internalUser.trim().toLowerCase()
      : 'all';
    const allowed = new Set(['real', 'internal', 'all']);
    const mode = allowed.has(rawMode) ? rawMode : 'all';

    // Which sets to apply when merging (still needed internally)
    const applyToReal = mode === 'real' || mode === 'all';
    const applyToInternal = mode === 'internal' || mode === 'all';

    // Explicit field lists
    const REAL_FIELDS = [
      'wagered', 'won', 'purchased', 'purchased_offline',
      'redeemed', 'redeemed_offline', 'sc_coin_purchased',
      'signups', 'bonus'
    ];

    const INTERNAL_FIELDS = [
      'internal_wagered', 'internal_kwon', 'internal_purchased',
      'internal_purchased_offline', 'internal_redeemed',
      'internal_redeemed_offline', 'internal_sc_coin_purchased',
      'internal_bonus'
    ];

    const monetaryToNum = v => Number(v ?? 0);
    const toStr = v => (v == null ? '0' : String(v));

    // Fetch persisted aggregates
    const txData = await db.sequelize.query(
      `SELECT * FROM daily_aggregates WHERE date BETWEEN :startDate AND :endDate ORDER BY date ASC;`,
      {
        replacements: { startDate, endDate },
        type: db.Sequelize.QueryTypes.SELECT
      }
    );

    // Helper: zero base for building new rows
    const zeroBaseForDate = date => {
      const base = { date, created_at: null, updated_at: null, signups: 0 };
      for (const f of REAL_FIELDS) base[f] = f === 'signups' ? 0 : '0';
      for (const f of INTERNAL_FIELDS) base[f] = '0';
      return base;
    };

    // Merge persisted + live obeying applyToReal/applyToInternal flags
    const mergeRows = (existing = {}, live = {}) => {
      const result = { date: existing.date || live.date };
      const e = { ...zeroBaseForDate(result.date), ...existing };
      const l = { ...zeroBaseForDate(result.date), ...live };

      // REAL fields
      for (const f of REAL_FIELDS) {
        if (f === 'signups') {
          result[f] = Number(e[f] || 0) + (applyToReal ? Number(l[f] || 0) : 0);
        } else {
          result[f] = toStr(monetaryToNum(e[f]) + (applyToReal ? monetaryToNum(l[f]) : 0));
        }
      }

      // INTERNAL fields
      for (const f of INTERNAL_FIELDS) {
        result[f] = toStr(monetaryToNum(e[f]) + (applyToInternal ? monetaryToNum(l[f]) : 0));
      }

      // timestamps
      result.created_at = e.created_at ?? l.created_at ?? null;
      result.updated_at = e.updated_at ?? l.updated_at ?? null;

      return result;
    };

    // Fetch live (only when end date includes today)
    const todayStr = dayjs().tz(PST).format('YYYY-MM-DD');
    if (endDate >= todayStr) {
         const cached = await getCache(CACHE_KEYS.INTERNAL_USERS);
         let internalUserIds;

         if (cached) {
           internalUserIds = JSON.parse(cached);
         } else {
           const getInternal = await db.User.findAll({
           where: { isInternalUser: true },
           attributes: ['userId']
           });
           internalUserIds = getInternal.map(item => item.userId);
           await setInternalCache(CACHE_KEYS.INTERNAL_USERS, JSON.stringify(internalUserIds));
          }
          
      // const [liveDataArray] = await db.sequelize.query(`SELECT * FROM get_incremental_aggregate_data_v2();`);

      const [liveDataArray] = await db.sequelize.query(
        'SELECT * FROM get_incremental_aggregate_data_v2(ARRAY[:internalUserIds]::INT[]);',
        { replacements: { internalUserIds } }
        );
      
      for (const live of liveDataArray) {
        const idx = txData.findIndex(r => r.date === live.date);

        if (idx !== -1) {
          txData[idx] = mergeRows(txData[idx], live);
        } else if (live.date === todayStr) {
          const base = zeroBaseForDate(live.date);
          txData.push(mergeRows(base, live));
        }
      }
    }

    // ----- FILTER final output SHAPE based on mode -----
    // If "real" => only include REAL_FIELDS + date + timestamps
    // If "internal" => only include INTERNAL_FIELDS + date + timestamps
    // If "all" => include both sets (full row)

    const shapeMapped = txData.map(row => {
      const out = { date: row.date };

      // always include timestamps if present
      if (row.created_at != null) out.created_at = row.created_at;
      if (row.updated_at != null) out.updated_at = row.updated_at;

      if (mode === 'real') {
        // include only public metrics (signups numeric)
        for (const f of REAL_FIELDS) out[f] = f === 'signups' ? Number(row[f] || 0) : String(row[f] ?? '0');
      } else if (mode === 'internal') {
        for (const f of INTERNAL_FIELDS) out[f] = String(row[f] ?? '0');
      } else { // 'all'
        for (const f of REAL_FIELDS) out[f] = f === 'signups' ? Number(row[f] || 0) : String(row[f] ?? '0');
        for (const f of INTERNAL_FIELDS) out[f] = String(row[f] ?? '0');
      }

      return out;
    });

    // include modeWas only for debugging to confirm backend interpretation
    return { data: shapeMapped, modeWas: mode };
  }
}

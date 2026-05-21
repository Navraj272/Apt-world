import db from "@src/db/models";
import { BaseHandler } from "@src/libs/baseHandler";
import { getCache } from "@src/libs/redis";
import { CACHE_KEYS } from "@src/utils/constants/public.constants";

export class DemographicUserHandler extends BaseHandler {
  async run() {
    const { search } = this.args;

    // normalize internalUser to: 'all' | 'internal' | 'real'
    let mode = this.args.internalUser;
    mode = typeof mode === "string" ? mode.toLowerCase() : undefined;

    const replacements = {};
    let filters = "";

    if (search) {
      filters += " AND s.state_code ILIKE :search";
      replacements.search = `%${search}%`;
    }

    // segmentation filter
    let userFilter = "";
    if (mode === "internal" || mode === "real") {
      const cached = await getCache(CACHE_KEYS.INTERNAL_USERS);
      const ids = cached ? JSON.parse(cached).map(Number).filter(Number.isFinite) : [];

      if (ids.length) {
        userFilter = ` AND u.user_id ${mode === "internal" ? "IN" : "NOT IN"} (${ids.join(",")})`;
      } else {
        userFilter = ` AND u.is_internal_user = ${mode === "internal" ? "true" : "false"}`;
      }
    }

    const query = `
      SELECT
        COALESCE(SUM(
          CASE WHEN t.purpose='purchase'
            AND t.status='successful'
            AND t.payment_provider!='Offline'
            AND (t.more_details->>'amount') IS NOT NULL
          THEN (t.more_details->>'amount')::decimal ELSE 0 END
        ),0) AS total_amount,
        COUNT(DISTINCT u.user_id) AS user_count,
        s.state_code AS stateCode
      FROM users u
      LEFT JOIN user_details ud ON ud.user_id = u.user_id
      LEFT JOIN states s ON s.state_code = ud.state_code
      LEFT JOIN transactions t ON t.user_id = u.user_id
      WHERE 1=1
        ${filters}
        ${userFilter}
      GROUP BY s.state_code;
    `;

    const data = await db.sequelize.query(query, {
      replacements,
      type: db.Sequelize.QueryTypes.SELECT,
    });

    return { success: true, data };
  }
}

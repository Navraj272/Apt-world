import db from "@src/db/models";
import { BaseHandler } from "@src/libs/baseHandler";
import { AppError } from "@src/errors/app.error";
import { Errors } from "@src/errors/errorCodes";

export class fetchDuplicateReportHandler extends BaseHandler {
  async run() {
    const { criteria } = this.args;

    const allowed = [
      'email',
      'dateOfBirth',
      'ipAddress',
      'loginIpAddress',
    ];

    if (!allowed.includes(criteria)) {
      throw new AppError(
        Errors.INVALID_DUPLICATE_CRITERIA,
        'Invalid duplicate criteria'
      );
    }

    let sql = '';

    switch (criteria) {
      case 'email':
        sql = `
          WITH normalized_emails AS (
            SELECT
              user_id,
              split_part(split_part(email, '@', 1), '+', 1) AS email_base
            FROM users
            WHERE email IS NOT NULL
          )
          SELECT COUNT(*) AS duplicate_user_count
          FROM normalized_emails
          WHERE email_base IN (
            SELECT email_base
            FROM normalized_emails
            GROUP BY email_base
            HAVING COUNT(*) > 1
          );
        `;
        break;

      case 'dateOfBirth':
        sql = `
          SELECT COUNT(*) AS duplicate_user_count
          FROM users
          WHERE date_of_birth IN (
            SELECT date_of_birth
            FROM users
            WHERE date_of_birth IS NOT NULL
            GROUP BY date_of_birth
            HAVING COUNT(*) > 1
          );
        `;
        break;

      case 'ipAddress':
        sql = `
          SELECT COUNT(*) AS duplicate_user_count
          FROM user_details
          WHERE ip_address IN (
            SELECT ip_address
            FROM user_details
            WHERE ip_address IS NOT NULL
            GROUP BY ip_address
            HAVING COUNT(*) > 1
          );
        `;
        break;

      case 'loginIpAddress':
        sql = `
          SELECT COUNT(*) AS duplicate_user_count
          FROM user_details
          WHERE login_ip_address IN (
            SELECT login_ip_address
            FROM user_details
            WHERE login_ip_address IS NOT NULL
            GROUP BY login_ip_address
            HAVING COUNT(*) > 1
          );
        `;
        break;
    }

    const [result] = await db.sequelize.query(sql, {
      type: db.Sequelize.QueryTypes.SELECT,
    });

    return {
      criteria,
      duplicateUserCount: Number(result.duplicate_user_count),
    };
  }
}

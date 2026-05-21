import { BaseHandler } from "@src/libs/baseHandler";
import { Errors } from "@src/errors/errorCodes";
import { Logger } from "@src/libs/logger";
import db from "@src/db/models";
import { AppError } from "@src/errors/app.error";
import { parseUserIdsCsv } from "@src/helpers/uploadCsv.helpers";
import { JobBackendAxios } from "@src/libs/axios/jobBackend.axios";

export class GrantFreeSpinsAleaCasinoHandler extends BaseHandler {
  async run() {
    const transaction = this.context.transaction;

    try {
      const payload = this.args;

      const {
        vipTierId,
        gameName,
        providerName,
        level,
        expiresAt,
        numSpinsGranted,
        source = "admin backoffice"
      } = payload;

      const resolvedUserIds = await this.resolveUserIds();

      if (resolvedUserIds.length > 50_000) {
        throw new AppError(
          Errors.INVALID_REQUEST_BODY,
          "Maximum 50,000 userIds allowed"
        );
      }

      const record = await db.FreeSpinRecords.create(
        {
          userIds: resolvedUserIds,
          gameName,
          providerName,
          numSpins: numSpinsGranted,
          level,
          expiresAt,
        },
        { transaction }
      );

      // USING JobBackendAxios HERE
      const response = await JobBackendAxios.grantFreeSpin({
        ...payload,
        source,
        userIds: resolvedUserIds,
        recordId: record.id
      });

      return {
        success: true,
        forwarded: true,
        schedulerResponse: response
      };

    } catch (err) {
      Logger.error(err, "Grant free spins bulk handler error");

      if (err instanceof AppError) {
        throw err;
      }

      throw new AppError(Errors.INTERNAL_ERROR);
    }
  }

  async resolveUserIds() {
    let { userIds } = this.args;
    const { file } = this.args;

    // CSV flow
    if (file) {
      return await parseUserIdsCsv(file.buffer);
    }

    // Stringified JSON array flow
    if (typeof userIds === "string") {
      try {
        userIds = JSON.parse(userIds);
      } catch {
        userIds = [];
      }
    }

    // Array flow
    if (Array.isArray(userIds) && userIds.length) {
      const parsed = userIds
        .map(Number)
        .filter(Number.isFinite);

      if (!parsed.length) {
        throw new AppError(
          Errors.INVALID_REQUEST_BODY,
          "userIds array is invalid"
        );
      }

      return [...new Set(parsed)];
    }

    throw new AppError(
      Errors.INVALID_REQUEST_BODY,
      "Either CSV file or userIds array must be provided"
    );
  }
}
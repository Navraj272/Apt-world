import { BaseHandler } from "@src/libs/baseHandler";
import { Errors } from "@src/errors/errorCodes";
import { Logger } from "@src/libs/logger";
import { AppError } from "@src/errors/app.error";
import { JobBackendAxios } from "@src/libs/axios/jobBackend.axios";

export class CancelFreeSpinsAleaCasinoHandler extends BaseHandler {
  async run() {
    try {
      const {
        recordId,
        userIds,
        casinoBonusIds,
        status,
        gameName,
        numSpinsGranted,
        providerName,
        segmentId
      } = this.args;

      // Use JobBackendAxios instead of raw axios
      const response = await JobBackendAxios.cancelFreeSpin({
        gameName,
        numSpinsGranted,
        providerName,
        segmentId,
        recordId,
        userIds,
        casinoBonusIds,
        status,
      });

      return {
        success: true,
        forwarded: true,
        schedulerResponse: response,
      };

    } catch (err) {
      Logger.error(err, "Cancel free spin admin handler error");

      if (err instanceof AppError) {
        throw err;
      }

      throw new AppError(Errors.INTERNAL_ERROR);
    }
  }
}
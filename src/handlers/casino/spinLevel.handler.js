import axios from "axios";
import { BaseHandler } from "@src/libs/baseHandler";
import { Errors } from "@src/errors/errorCodes";
import { Logger } from "@src/libs/logger";
import config from "@src/configs/app.config";
import { AppError } from "@src/errors/app.error";

export class GetFreeSpinsCurrenciesHandler extends BaseHandler {
  async run() {
    try {
      const { gameId } = this.args;

      if (!gameId) {
        throw new AppError(Errors.MISSING_REQUIRED_PARAMETER, "gameId is required");
      }

      const query = `
        {
          freeSpinsCurrencies(
            jurisdictionCode: "SC",
            gameId: ${gameId} 
          ) {
            results
          }
        }
      `;

      const response = await axios.post(
        "https://customer-api.aleaplay.com/api/graphql",
        { query },
        {
          headers: {
            Authorization: `Bearer ${config.get("alea.secret_token")}`,
            "Alea-CasinoId": config.get("alea.casino_id"),
            "Content-Type": "application/json",
          },
        }
      );

      const results =
        response.data?.data?.freeSpinsCurrencies?.results || [];

      return {
        success: true,
        gameId,
        currencies: results,
      };

    } catch (err) {
      Logger.error("Alea FreeSpinsCurrencies Error:", err.response?.data || err);
      console.log(err);
      throw new AppError(
      
        Errors.INTERNAL_ERROR,
        "Failed to fetch free spin currencies from Alea"
      );
    }
  }
}

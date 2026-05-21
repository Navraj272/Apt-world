import config from "@src/configs/app.config";
import { Axios } from "axios";
import { Logger } from "../logger";

export class JobBackendAxios extends Axios {
  constructor() {
    super({
      baseURL: `${config.get("app.jobBackendUrl")}/api/v1`,
      auth: {
        username: config.get("basic.username"),
        password: config.get("basic.password"),
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  /**
   * Adds a send email job to the CRM Activity Queue.
   * @param {object} content - The jobData to send while adding the Job.
   * @returns {boolean} Success status.
   */
  static async addSendEmailJob(content) {
    try {
      const jobBackendAxios = new JobBackendAxios();
      const response = await jobBackendAxios.post(
        "/job/add-send-promo-email-job",
        JSON.stringify(content),
      );
      const data = JSON.parse(response.data);
      if (response.status !== 200) throw data.errors;
      return data?.data?.success || true;
    } catch (error) {
      console.log(error);
      throw Error("ServiceUnavailableErrorType");
    }
  }

  static async grantFreeSpin(content) {
    try {
      console.log("reached_here")
      const jobBackendAxios = new JobBackendAxios();
      const response = await jobBackendAxios.post(
        "/job/grant-free-spin",
        JSON.stringify(content),
      );

      if (response.status !== 200) {
        Logger.error(
          `[JobBackendAxios] grantFreeSpin non-200 response - status: ${response.status}, body: ${response.data}`,
        );
        throw new Error(`Job scheduler returned status ${response.status}`);
      }

      const data =
        typeof response.data === "string"
          ? JSON.parse(response.data)
          : response.data;
      return data?.data || true;
    } catch (error) {
      Logger.error(
        error,
        `[JobBackendAxios] grantFreeSpin failed - status: ${error?.response?.status}, message: ${error?.message}, body: ${JSON.stringify(error?.response?.data)}`,
      );
      throw Error("ServiceUnavailableErrorType");
    }
  }

  static async cancelFreeSpin(content) {
    try {
      console.log("reached_here2")
      const jobBackendAxios = new JobBackendAxios();

      const response = await jobBackendAxios.post(
        "/job/cancel-free-spin",
        JSON.stringify(content),
      );

      if (response.status !== 200) {
        Logger.error(
          `[JobBackendAxios] cancelFreeSpin non-200 response - status: ${response.status}, body: ${response.data}`,
        );

        throw new Error(`Job scheduler returned status ${response.status}`);
      }

      const data =
        typeof response.data === "string"
          ? JSON.parse(response.data)
          : response.data;

      return data?.data || true;
    } catch (error) {
      Logger.error(
        error,
        `[JobBackendAxios] cancelFreeSpin failed - status: ${error?.response?.status}, message: ${error?.message}, body: ${JSON.stringify(error?.response?.data)}`,
      );

      throw Error("ServiceUnavailableErrorType");
    }
  }
}

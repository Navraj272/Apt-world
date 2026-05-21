
import axios from "axios";
import crypto from "crypto";
import config from "@src/configs/app.config";

export class SeventySevenAxios {
  constructor() {
    this.client = axios.create({
      baseURL: config.get("seventySevenConfig.baseUrl"),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
  }

  /**
   * Generate hash as per 77Gaming spec
   * hash = MD5(brand_id=79&shared_key=xxxx)
   * IMPORTANT: ts MUST NOT be included
   */
  generateHash() {
    const brandId = Number(config.get("seventySevenConfig.brandId"));
    const sharedKey = config.get("seventySevenConfig.sharedKey");

    const raw = `brand_id=${brandId}&shared_key=${sharedKey}`;

    return crypto
      .createHash("md5")
      .update(raw)
      .digest("hex");
  }

  generate77GamingHash (payload) {
  const data = {};

  Object.keys(payload).forEach(key => {
    if (payload[key] !== undefined && payload[key] !== null) {
      data[key] = payload[key];
    }
  });

  const sortedString = Object.keys(data)
    .sort()
    .map(key => `${key}=${data[key]}`)
    .join("&");

  const finalString = `${sortedString}&shared_key=${config.get(
    "seventySevenConfig.sharedKey"
  )}`;

  console.log("77 HASH STRING =>", finalString);

  return crypto.createHash("md5").update(finalString).digest("hex");
};
  /**
   * Fetch game list from 77Gaming
   * ADMIN / CRON only
   */
  async getGameList() {
    const ts = Math.floor(Date.now() / 1000);
    const brandId = Number(config.get("seventySevenConfig.brandId"));

    const payload = {
      brand_id: brandId,
      is_thumbnail_required: true,
      is_mobile: false
    };

    const hash = this.generate77GamingHash(payload);

    const { data } = await this.client.post(
      "/api/slot/game/list",
      {
        ...payload,
        ts,
        hash
      },
      {
        headers: {
          brand: String(brandId)
        }
      }
    );


    //     const main = await this.client.post(
    //   "/api/slot/game/list",
    //   {
    //     ...payload,
    //     hash,
    //             is_thumbnail_required:true,
    //     is_mobile:false   
    //   },
    //   {
    //     headers: {
    //       Brand: String(brandId)
    //     }
    //   }
    // );


    /**
     * 77Gaming always returns 200
     * Real status is inside error_code
     */
    if (String(data?.error_code) !== "0") {
      throw new Error(data?.error_text || "77Gaming game list failed");
    }

    /**
     * Defensive check
     */
    if (!Array.isArray(data?.data)) {
      throw new Error("77Gaming returned invalid game list");
    }

    return data.data;
  }
}

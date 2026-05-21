export const updatePackageSchema = {
  body: {
    type: "object",
    properties: {
      label: { type: "string" },
      packageId: { type: ["string", "number"] },
      amount:{ type: "string",pattern: "^(\\d+)(\\.\\d+)?$",default: "0" },
      gcCoin: { type: "string",pattern: "^(\\d+)(\\.\\d+)?$",default: "0" },
      scCoin: { type: "string",pattern: "^(\\d+)(\\.\\d+)?$",default: "0" },
      isActive: { type: ["string", "boolean"] },
      isVisibleInStore: { type: ["string", "boolean"] },
      desktop: { type: ["object", "string"] },
      mobile: { type: ["object", "string"] },
      orderId: { type: "string" },
      maxPurchasePerUser: {type: "string",pattern: "^(\\d+)(\\.\\d+)?$",default: 0},
      welcomePackage: { type: "string" },
      discountAmount: { type: "string",pattern: "^(\\d+)(\\.\\d+)?$",default: "0" },
      promoCode: { type: "string" },
      vipTierIds: { type: ["array","string"], items: { type: "number" }, default: [] },
      vipPoints: { type: ["number","string"], default: 0 },
      extraFreePercentage: { type: ["number", "string"] , default:0},
      maxPurchaseTotal: { type: ["string","null"], pattern: "^\\d+$",},
      availableFrom: { type: ["string","null"], format: "date-time",},
      availableUntil: { type: ["string","null"], format: "date-time",},
      promoTag: {
        type: 'string',
        enum: ['BEST_VALUE', 'NONE', 'EXTRA_FREE','LIMITED_TIME_OFFER'],
        default : "NONE"
      },
      segmentId: {type:["number","string"]}
    },
    required: ["packageId"],
  },
};

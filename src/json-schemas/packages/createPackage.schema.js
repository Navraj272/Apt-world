export const createPackageSchema = {
  body: {
    type: "object",
    properties: {
      label: { type: "string" },
      amount:{ type: "string",pattern: "^(\\d+)(\\.\\d+)?$",default: "0" },
      gcCoin: { type: "string",pattern: "^(\\d+)(\\.\\d+)?$",default: "0" },
      scCoin: { type: "string",pattern: "^(\\d+)(\\.\\d+)?$",default: "0" },
      isActive: { type: ["string", "boolean"], default: true },
      isVisibleInStore: { type: ["string", "boolean"], default: true },
      file: { type: "object" },
      orderId: { type: ["string","number"] },
      maxPurchasePerUser: {type: "string",pattern: "^(\\d+)(\\.\\d+)?$",default: "100"},
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
        enum: ['BEST_VALUE', 'NONE', 'EXTRA_FREE', 'LIMITED_TIME_OFFER'],
        default : "NONE"
      },
      segmentId: {type:["number","string"]}
    },
    required: ["label", "amount", "gcCoin", "scCoin"],
  },
};


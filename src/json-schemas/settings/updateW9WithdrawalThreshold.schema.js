export const UpdateW9WithdrawalThresholdSchema = {
  body: {
    type: "object",
    properties: {
      amount: { type: "number", minimum: 0 },
      currency: { type: "string" },
      enabled: { type: "boolean" }
    },
    required: ["amount"],
    additionalProperties: false
  }
}

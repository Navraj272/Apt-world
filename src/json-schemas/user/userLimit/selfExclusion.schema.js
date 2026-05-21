import { SELF_EXCLUSION_TYPES } from "@src/utils/constants/responsibleGambling.constants";

export const selfExclusionSchema = {
    body: {
      type: "object",
      properties: {
        userId: { type: "integer", minimum: 1 }, // Ensure userId is a positive integer
        exclusionType: {
          type: "string",
          enum: [
            SELF_EXCLUSION_TYPES.TEMPORARY,
            SELF_EXCLUSION_TYPES.PERMANENT,
          ],
        },
        duration: { 
          type: "string",
          format: "date"
        },
        reset: { type: 'boolean', default: false },
      },
      required: ["userId", "exclusionType"], // Required fields for all cases
      additionalProperties: false, // Disallow extra fields
    },
  };
  
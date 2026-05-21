export const updateUserVipTiersSchema = {
  body: {
    type: "object",
    properties: {
      vipTierId: { type: ['string', 'number'] },
      userId: { type: ['string', 'number'] },
      authenticatedAdminId: { type: ['string', 'number'] }, 

    },
    required: ['vipTierId', 'userId'],
  },
};

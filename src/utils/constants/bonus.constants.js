// export const BONUS_TYPE = {
//   WELCOME: 'welcome',
//   DAILY_BONUS: 'daily'
// }

// export const BONUS_STATUS = {
//   ACTIVE: 'active',
//   INACTIVE: 'inactive',
//   CANCELLED: 'cancelled'
// }

// export const USER_BONUS_STATUS_VALUES = {
//   PENDING: 'pending',
//   ACTIVE: 'active',
//   FORFEITED: 'forfeited',
//   EXPIRED: 'expired',
//   CLAIMED: 'claimed',
//   COMPLETED: 'completed'
// }
const BONUS_TYPE = {
  WELCOME: "welcome",
  DAILY_BONUS: "daily",
  BOOST_BONUS: "boost",
  REFERRAL_BONUS : "referral",
  EARLY_USER : "early_user"

};

const BONUS_STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  CANCELLED: "cancelled",
};

const USER_BONUS_STATUS_VALUES = {
  PENDING: "pending",
  ACTIVE: "active",
  FORFEITED: "forfeited",
  EXPIRED: "expired",
  CLAIMED: "claimed",
  COMPLETED: "completed",
};
module.exports = { BONUS_TYPE, USER_BONUS_STATUS_VALUES, BONUS_STATUS };

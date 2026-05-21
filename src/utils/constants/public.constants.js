export const COINS = {
  GOLD_COIN: 'GC',
  SWEEP_COIN: {
    BONUS_SWEEP_COIN: 'BSC',
    PURCHASE_SWEEP_COIN: 'PSC',
    REDEEMABLE_SWEEP_COIN: 'RSC'
  },
  SWEEP_COINS: 'SC'
}

export const PST_TIMEZONE = 'America/Los_Angeles'

export const CACHE_KEYS = {
  STATE_CODES: 'inactiveStateCode',
  STATES: 'inactiveStates',
  PACKAGES_NORMAL: 'cache:packages:normal', // done
  PACKAGES_WELCOME: 'cache:packages:welcome', // done
  BANNERS: 'cache:banners', // done
  PAGES: 'cache:pages', // done
  SETTINGS: 'cache:settings', // done
  VIP: 'cache:vip', // done
  PROMOTIONS: 'cache:promotions', // done
  WHEEL_CONFIG: 'cache:wheel-configs' , // done,
  INTERNAL_USERS: 'internal_users',
  FYNTEK_REDEEM_COOLDOWN: 'cache:fyntek_redeem_cooldown',
  IP_ADDRESSES: 'cache:ip-addresses'
}

export const PROMOTIONS_TYPE = {
  CASINO_PROMOTIONS: 'casino_promotions',
  SPONSORSHIPS: 'sponsorships'
}

export const SIGNUP_TYPES = {
  GOOGLE: 'google',
  FACEBOOK: 'facebook',
  NORMAL: 'normal'
}

export const USER_ACCOUNT_STATUS = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED',
  UNDER_REVIEW: 'UNDER_REVIEW',
  CLOSED: 'CLOSED'
};

export const ALEA_SESSION_PREFIX = 'alea-'

export const GLOBAL_SETTINGS = {
  SITE_INFORMATION: 'SITE_INFORMATION',
  FAUCET: 'FAUCET',
  WITHDRAWAL_LIMITS: 'WITHDRAWAL_LIMITS',
  SOCIAL_MEDIA_LINKS: 'SOCIAL_MEDIA_LINKS',
  KILL_SWITCH: 'KILL_SWITCH',
  DEPOSIT_LIMITS: 'DEPOSIT_LIMITS',
  SITE_SETTINGS: 'SITE_SETTINGS',
  GLOBAL_DAILY_WITHDRAWAL_ALLOWED: 'GLOBAL_DAILY_WITHDRAWAL_ALLOWED',
  POSTAL_CODE: 'POSTAL_CODE',
  PAYMENT_METHOD_WITHDRAWAL_LIMITS_AND_FIAT_FEE: 'PAYMENT_METHOD_WITHDRAWAL_LIMITS_AND_FIAT_FEE',
  W9_WITHDRAWAL_THRESHOLD: 'W9_WITHDRAWAL_THRESHOLD'
}

export const CUSTOMER_IO_CONSTANTS = {
  // Entity Type
  PERSON: 'person',

  // Actions
  IDENTIFY: 'identify',
  EVENT: 'event',
  USER_ACTIVATED: 'user_activated',
  USER_BLOCKED: 'user_blocked',
  // Event Names
  SELF_EXCLUSION :"self_exclusion",
  SIGNIN: "signin",
  SIGNUP: "signup",
  PURCHASE: "purchase",
  GAME_PLAYED: "game_played",
  EMAIL_VERIFIED: "email_verified",
  KYC_VERIFIED: "kyc_verified",
  REDEMPTION_REQUESTED: "redemption_requested",
  REDEMPTION_SUCCESS: "redemption_success",
  REDEMPTION_FAILED: "redemption_failed",
  REDEMPTION_STATUS_UPDATED : "redemption_status_updated",
  PROMOCODE_USED: "promocode_used",
  WELCOME_BONUS_CLAIMED: "welcome_bonus_claimed",
  PROMOCODE_USED: "promocode_used",
  PROFILE_UPDATED: "profile_updated",
  GAME_BET: "game_bet",
  GAME_WIN: "game_win",
  TIER_UNLOCKED: "tier_unlocked",         // Add this
  BONUS_CLAIMED: "bonus_claimed",
  POSTALCODE_REQUEST_UPDATED: "postalcode_request_updated",
  COMPLIANCE_LIMIT_RESET: "compliance_limit_reset",
  COMPLIANCE_SELF_EXCLUSION_REVOKED: "compliance_self_exclusion_revoked",
  WALLET_BALANCE_UPDATED_FROM_BO: "wallet_balance_update_from_bo",
  GC_WALLET_BALANCE_UPDATED_FROM_BO: "gc_wallet_balance_update_from_bo",
  USER_DEATTACHED_FROM_AFFILIATE: "user_deattached_from_affiliate",
  MANUAL_BONUS_CLAIMED: "manual_bonus_claimed",
  GC_MANUAL_BONUS_CLAIMED: "gc_manual_bonus_claimed",
  // Common Data Values
  FREE: 'free',
  WEBSITE: 'website'
}

export const PROMO_TAG_TYPES = {
  BEST_VALUE: 'BEST_VALUE',
  NONE: 'NONE',
  EXTRA_FREE: 'EXTRA_FREE',
  LIMITED_TIME_OFFER: 'LIMITED_TIME_OFFER'
}

export const CMS_CATEGORIES = {
  SUPPORT: 'support', // FAQ, Fairness, Gaming Helpline, Live Support, VIP Rules
  LEGAL_COMPLIANCE: 'legal_compliance', // Terms & Conditions, Privacy Policy, Responsible Gaming
  HOW_TO_GUIDES: 'how_to_guides',
  RESPONSIBLE_GAMING: 'responsible_gaming' // Social Casino Guide, Slot Game Guide, Live Dealer Guide
}

export const JWT_TOKEN_TYPES = {
  LOGIN: 'login',
  FORGOT_PASSWORD: 'forgot_password'
}

export const BANNER_TYPE = {
  HOME: 'home',
  CASINO: 'casino',
  PROMOTION: 'promotion',
  REGISTRATION: 'registration',
  REFFERFRIEND: 'reffer_friend',
  OTHER: 'other',
  VIP: 'vip',
  STORE: 'store'
}

export const DEVICE_TYPE = {
  MOBILE: 'mobile',
  DESKTOP: 'desktop',
  BOTH: 'both'
}

export const SOCKET_NAMESPACES = {
  WALLET: '/wallet',
  LEADER_BOARD: '/leader-board',
  ACCOUNT_CAPTURE: '/accountCapture',
  CASINO_BETS: '/casino-bets'
}

export const SOCKET_EMITTERS = {
  USER_WALLET_BALANCE: 'USER_WALLET_BALANCE',
  LEADER_BOARD: 'LEADER_BOARD',
  ACCOUNT_CAPTURE: 'ACCOUNT_CAPTURE',
  USER_TRANSACTION: 'USER_USER_TRANSACTION'
}

export const SOCKET_LISTENERS = {
  USER_WALLET_BALANCE: SOCKET_NAMESPACES.WALLET + '/balance'
}

export const SOCKET_ROOMS = {
  LEADER_BOARD: 'LEADER_BOARD',
  USER_WALLET: 'USER_WALLET',
  CASINO_BETS: 'CASINO_BETS',
  ACCOUNT_CAPTURE: 'ACCOUNT_CAPTURE'
}

const ASSETS = 'sweeps/assets';

export const S3_FILE_PREFIX = {
  bonus: ASSETS + '/bnonus',
  packages: ASSETS + '/sweeps/packages',
  casino_game: ASSETS + '/casino/games',
  casino_provider: ASSETS + '/casino/providers',
  casino_category: ASSETS + '/casino/categories',
  promotions: ASSETS + '/promotions',
  siteLogo: ASSETS + '/site_information/logo',
  banner: ASSETS + '/site_information/banner',
  site_information: ASSETS + '/site_information',
  imageGallery: ASSETS + '/gallery',
  vipTier: ASSETS + '/vip_tier/icon'
}

export const TRANSACTION_PURPOSE = {
  // General transactions
  PURCHASE: 'purchase',
  REDEEM: 'redeem',
  REDEEM_REFUND: 'redeem_refund',

  // Bonus transactions
  BONUS_CASH: 'bonus_cash',
  BONUS_DEPOSIT: 'bonus_deposit',
  BONUS_REFERRAL: 'bonus_referral',
  BONUS_TO_CASH: 'bonus_to_cash',
  BONUS_FORFEIT: 'bonus_forfeit',
  BONUS_WIN: 'bonus_win',
  BONUS_DROP: 'bonus_drop',
  POSTAL_CODE: 'postal_code',
  BONUS_RACKBACK: 'bonus_rackback',
  EARLY_USER_BONUS: 'early_user_bonus',
  WELCOME_BONUS: 'welcome_bonus',
  FREE_SPIN_BONUS: 'free_spin_bonus',
  // Faucet transactions
  FAUCET_AWAIL: 'faucet_awail',

  // Spin Wheel transaction
  WHEEL_REWARD: 'wheel_reward',

  // Chatrain transaction
  EMIT: 'emit_chatrain',
  CHATRAIN: 'chatrain',
  CLAIM: 'claim_chatrain',

  // Tip transaction
  SEND_TIP: 'send_tip',
  RECEIVE_TIP: 'receive_tip',
  TIP: 'tip',
  // VIP
  VIP_REWARDED: 'vip_rewarded',

  WEEKLY_COMMISION: 'weekly_commission',
  WEEKLY_CASHBACK: 'weekly_cashback',

  // 🔹 Client requested additions
  MANUAL_CREDIT: 'manual_credit',
  MANUAL_DEBIT: 'manual_debit',
  BONUS: 'manual_bonus',
  SC_EXPIRY: 'sc_expiry',
  ACCOUNT_CLOSURE: 'account_closure',
  CONFISCATION: 'confiscation',
  REFUND: 'manual_refund'
}


export const DEBIT_TRANSACTION_PURPOSE_CIO = {
  MANUAL_DEBIT: "manual_debit",   
  SC_EXPIRY: "sc_expiry",
  ACCOUNT_CLOSURE: "account_closure",
  CONFISCATION: "confiscation"
}

// Casino transactions
export const CASINO_TRANSACTION_PURPOSE = {
  CASINO_BET: 'casino_bet',
  CASINO_REFUND: 'casino_refund',
  CASINO_WIN: 'casino_win',
  JACKPOT_WIN: 'jackpot_win',
  PROMO_WIN: 'promo_win',
  BONUS_DROP: 'bonus_drop',
  BONUS_RACKBACK: 'bonus_rackback',
  POSTAL_CODE: 'postal_code',
  GAME_ROLLBACK: 'game_rollback'
}

export const POSTAL_CODE_STATUS = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
}

export const LEDGER_TYPES = {
  DEBIT: 'Debit',
  CREDIT: 'Credit'
}

export const TRANSACTION_STATUS = {
  PENDING: 'pending',
  SUCCESS: 'successful',
  FAILED: 'failed',
  CANCELLED: 'cancelled',
  ROLLBACK: 'rollback',
  APPROVED: 'approved',
  REJECTED: 'rejected'
}

export const LEDGER_TRANSACTION_TYPES = {
  CASINO: 'casino',
  BANKING: 'banking',
  WITHDRAW: 'withdraw'
}

export const LEDGER_DIRECTIONS = {
  [TRANSACTION_PURPOSE.PURCHASE]: LEDGER_TYPES.CREDIT,
  [TRANSACTION_PURPOSE.REDEEM]: LEDGER_TYPES.DEBIT,
  [TRANSACTION_PURPOSE.REDEEM_REFUND]: LEDGER_TYPES.CREDIT,
  [CASINO_TRANSACTION_PURPOSE.CASINO_BET]: LEDGER_TYPES.DEBIT,
  [CASINO_TRANSACTION_PURPOSE.CASINO_WIN]: LEDGER_TYPES.CREDIT,
  [CASINO_TRANSACTION_PURPOSE.CASINO_REFUND]: LEDGER_TYPES.CREDIT,
  [CASINO_TRANSACTION_PURPOSE.BONUS_DROP]: LEDGER_TYPES.CREDIT,
  [CASINO_TRANSACTION_PURPOSE.BONUS_RACKBACK]: LEDGER_TYPES.CREDIT,
  [CASINO_TRANSACTION_PURPOSE.POSTAL_CODE]: LEDGER_TYPES.CREDIT,
  [TRANSACTION_PURPOSE.FAUCET_AWAIL]: LEDGER_TYPES.CREDIT,
  [TRANSACTION_PURPOSE.WHEEL_REWARD]: LEDGER_TYPES.CREDIT,
  [TRANSACTION_PURPOSE.EMIT]: LEDGER_TYPES.DEBIT,
  [TRANSACTION_PURPOSE.CLAIM]: LEDGER_TYPES.CREDIT,
  [TRANSACTION_PURPOSE.SEND_TIP]: LEDGER_TYPES.DEBIT,
  [TRANSACTION_PURPOSE.RECEIVE_TIP]: LEDGER_TYPES.CREDIT,
  [TRANSACTION_PURPOSE.WEEKLY_CASHBACK]: LEDGER_TYPES.CREDIT,
  [TRANSACTION_PURPOSE.WEEKLY_COMMISION]: LEDGER_TYPES.CREDIT,

  [TRANSACTION_PURPOSE.MANUAL_CREDIT]: LEDGER_TYPES.CREDIT,
  [TRANSACTION_PURPOSE.REFUND]: LEDGER_TYPES.CREDIT,
  [TRANSACTION_PURPOSE.BONUS]: LEDGER_TYPES.CREDIT,

  [TRANSACTION_PURPOSE.MANUAL_DEBIT]: LEDGER_TYPES.DEBIT,
  [TRANSACTION_PURPOSE.SC_EXPIRY]: LEDGER_TYPES.DEBIT,
  [TRANSACTION_PURPOSE.ACCOUNT_CLOSURE]: LEDGER_TYPES.DEBIT,
  [TRANSACTION_PURPOSE.CONFISCATION]: LEDGER_TYPES.DEBIT
}

export const WITHDRAWAL_STATUS = {
  PENDING: 'Pending',
  SUCCESS: 'Success',
  CANCELLED: 'Cancelled',
  USER_CANCELLED: 'User-Cancelled'
}

export const TICKET_STATUSES = {
  OPEN: 'open',
  ACTIVE: 'active',
  RESOLVED: 'resolved',
  CLOSED: 'closed'
}

export const PAYMENT_PROVIDER = {
  LIMINAL: 'Liminal',
  NOWPAYMENT: 'NowPayment',
  OFFLINE: 'Offline',
  CENTRY_OS: 'CentryOS',
  APT_PAY: 'apt_pay',
  FYNTEK: 'fyntek',
  LINK_MONEY: 'linkMoney'
}

export const GENDER = {
  MALE: 'Male',
  FEMALE: 'Female',
  TRANSGENDER: 'Transgender',
  NOT_AVAILABLE: 'N/A'
}

export const DIDIT_STATUS = {
  PENDING: 'pending',
  REVIEW: 'review',
  REQUESTED: 'requested',
  APPROVED: 'approved',
  EXPIRED: 'expired',
  ABANDONED: 'abandoned',
  DECLINED: 'declined',
  RESUBMISSION: 'resubmission_requested',
  ADMIN_BLOCK: 'admin_block',
  ADMIN_APPROVED: 'admin_approved'
}

export const DOCUMENT_TYPES = {
  VERIFF: 'veriff',
  OTHER: 'other'
}
export const DOCUMENT_STATUS_TYPES = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  REQUESTED: 'requested'
}

export const EMAIL_NAME = {
  FORGET_PASSWORD: 'forget_password',
  VERIFY_EMAIL: 'verify_email'
}

export const BONUS_PURPOSES = [
  TRANSACTION_PURPOSE.BONUS_CASH,
  TRANSACTION_PURPOSE.BONUS_DROP,
  TRANSACTION_PURPOSE.BONUS_RACKBACK,
  TRANSACTION_PURPOSE.WEEKLY_CASHBACK,
  TRANSACTION_PURPOSE.WEEKLY_COMMISION,
  TRANSACTION_PURPOSE.WHEEL_REWARD,
  TRANSACTION_PURPOSE.WELCOME_BONUS,
  TRANSACTION_PURPOSE.POSTAL_CODE
]

// TIN Match Status (Avalara)
export const TIN_MATCH_STATUS = {
  PENDING: 'Pending',
  MATCHED: 'Matched',
  FAILED: 'Failed',
  NOT_SUBMITTED: 'Not_submitted'
}

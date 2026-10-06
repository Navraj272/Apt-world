"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Errors = void 0;
var _httpStatusCodes = require("http-status-codes");
const Errors = exports.Errors = {
  DIVISIONS_NOT_FOUND: {
    name: "DIVISIONS_NOT_FOUND",
    message: "One or more divisions not found",
    explanation: "The provided wheelDivisionIds do not exist or could not be retrieved from the database.",
    code: 3001,
    httpStatusCode: _httpStatusCodes.StatusCodes.NOT_FOUND
  },
  INVALID_PRIORITY_SUM: {
    name: "INVALID_PRIORITY_SUM",
    message: "Invalid priority distribution",
    explanation: "The total sum of priorities across all divisions must be exactly 100 before updating.",
    code: 3002,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  PRIORITY_VALUE_INVALID: {
    name: "PRIORITY_VALUE_INVALID",
    message: "Invalid priority value detected",
    explanation: "Each priority value must be a positive number and cannot be less than 0 or greater than 100.",
    code: 3003,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  DIVISION_UPDATE_FAILED: {
    name: "DIVISION_UPDATE_FAILED",
    message: "Failed to update division priorities",
    explanation: "An unexpected error occurred while updating the priorities of the divisions in the database.",
    code: 3004,
    httpStatusCode: _httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR
  },
  NO_DIVISIONS_PROVIDED: {
    name: "NO_DIVISIONS_PROVIDED",
    message: "No divisions provided for update",
    explanation: "The request body must contain at least one division to update priorities for.",
    code: 3005,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  INVALID_REQUEST_BODY: {
    name: "INVALID_REQUEST_BODY",
    message: "Invalid request body",
    explanation: "The provided request body is malformed or missing required fields. Please ensure all required parameters are correctly provided and formatted.",
    code: 1003,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  TODO_NOT_FOUND: {
    name: "TODO_NOT_FOUND",
    message: "TODO item not found",
    explanation: "The requested TODO item could not be found in the database.",
    code: 1001,
    httpStatusCode: _httpStatusCodes.StatusCodes.NOT_FOUND
  },
  POSTAL_CODE_SETTING_NOT_FOUND: {
    name: "POSTAL_CODE_SETTING_NOT_FOUND",
    message: "Postal code settings no found",
    explanation: "The requested postal code could not be found in the database.",
    code: 1001,
    httpStatusCode: _httpStatusCodes.StatusCodes.NOT_FOUND
  },
  ADMIN_ROLE_EXISTS: {
    name: "AdminRoleExists",
    message: "Either level Role or name Role Already Exists",
    explanation: "The response data structure does not match the expected schema.",
    code: 1002,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  MISSING_REQUIRED_PARAMETER: {
    name: "MissingRequiredParameter",
    message: "Missing Required Parameter",
    explanation: "Please ensure all required parameters are provided and formatted correctly.",
    code: 1003,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  INVALID_GAMBLING_LIMIT: {
    name: "INVALID_GAMBLING_LIMIT",
    message: "Invalid gambling limit hierarchy",
    explanation: "Monthly limit must be greater than Weekly, and Weekly must be greater than Daily.",
    code: 2001,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  REQUEST_VALIDATION_ERROR: {
    name: "RequestValidationError",
    message: "Request Validation Error",
    explanation: "The response data structure does not match the expected schema.",
    code: 1002,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  INVALID_POSTAL_CODE_BODY: {
    name: "INVALID POSTAL CODE BODY",
    message: "Required fields gcCoin, scCoin, and postalCodeValidTill are missing or invalid.",
    explanation: "All of the following fields are required: gcCoin, scCoin, and postalCodeValidTill. Please ensure that all fields are provided and valid.",
    code: 3003,
    httpStatusCode: 400
  },
  // errorConstants.js
  INVALID_STATUS: {
    name: "INVALID_STATUS",
    message: "Invalid status value provided",
    explanation: "The status must be either APPROVED or REJECTED.",
    code: 1001,
    httpStatusCode: 400
  },
  EMAIL_SERVICE_FAILED: {
    name: "EMAIL_SERVICE_FAILED",
    message: "Email service unavailable",
    explanation: "Due to a service issue, the email could not be sent. Please try again later.",
    code: 1001,
    httpStatusCode: 500
  },
  POSTAL_CODE_NOT_FOUND: {
    name: "POSTAL_CODE_NOT_FOUND",
    message: "Postal code request not found",
    explanation: "No postal code request exists with the provided ID.",
    code: 1002,
    httpStatusCode: 404
  },
  SELF_EXCLUSION_NOT_FOUND: {
    name: "SELF_EXCLUSION_NOT_FOUND",
    message: "Self-exclusion record not found",
    explanation: "The requested self-exclusion record could not be found in the database.",
    code: 2001,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  SELF_EXCLUSION_EXISTS: {
    name: "SELF_EXCLUSION_EXISTS",
    message: "Active self-exclusion exists",
    explanation: "The user has an active self-exclusion",
    code: 2002,
    httpStatusCode: _httpStatusCodes.StatusCodes.FORBIDDEN
  },
  INVALID_STATUS_TRANSITION: {
    name: "INVALID_STATUS_TRANSITION",
    message: "Invalid status transition",
    explanation: "The postal code request can only be approved or rejected if it is in PENDING status.",
    code: 1003,
    httpStatusCode: 400
  },
  INVALID_EXPIRY_TIME: {
    name: "INVALID_EXPIRY_TIME",
    message: "Request Validation Error",
    explanation: "invalid expiry time date time must be greater than current time",
    code: 1002,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  NO_FIELDS_TO_UPDATE: {
    name: "NO_FIELDS_TO_UPDATE",
    message: "Request Validation Error",
    explanation: "invalid request body no field is found to update",
    code: 1002,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  DUPLICATE_CODE: {
    name: "DUPLICATE_CODE",
    message: "duplicate bonus drop code",
    explanation: "A DropBonus with this code already exists.",
    code: 1002,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  RESPONSE_VALIDATION_ERROR: {
    name: "ResponseValidationError",
    message: "Response Validation Error",
    explanation: "Please ensure all required parameters are provided and formatted correctly.",
    code: 1003,
    httpStatusCode: _httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR
  },
  BONUS_UPDATE_FAILED: {
    name: "BONUS_UPDATE_FAILED",
    message: "Response Validation Error",
    explanation: "Please ensure all required parameters are provided and formatted correctly.",
    code: 1003,
    httpStatusCode: _httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR
  },
  INTERNAL_ERROR: {
    name: "InternalServerError",
    message: "Internal Server Error",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 1004,
    httpStatusCode: _httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR
  },
  REQUEST_INPUT_VALIDATION_ERROR: {
    name: "RequestInputValidationError",
    message: "Please check the request data",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3001,
    httpStatusCode: 400
  },
  DIVISIONS_NOT_FOUND: {
    name: "DIVISIONS_NOT_FOUND",
    message: "One or more divisions not found",
    explanation: "The provided wheelDivisionIds do not exist or could not be retrieved from the database.",
    code: 3001,
    httpStatusCode: _httpStatusCodes.StatusCodes.NOT_FOUND
  },
  INVALID_PRIORITY_SUM: {
    name: "INVALID_PRIORITY_SUM",
    message: "Invalid priority distribution",
    explanation: "The total sum of priorities across all divisions must be exactly 100 before updating.",
    code: 3002,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  PRIORITY_VALUE_INVALID: {
    name: "PRIORITY_VALUE_INVALID",
    message: "Invalid priority value detected",
    explanation: "Each priority value must be a positive number and cannot be less than 0 or greater than 100.",
    code: 3003,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  DIVISION_UPDATE_FAILED: {
    name: "DIVISION_UPDATE_FAILED",
    message: "Failed to update division priorities",
    explanation: "An unexpected error occurred while updating the priorities of the divisions in the database.",
    code: 3004,
    httpStatusCode: _httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR
  },
  NO_DIVISIONS_PROVIDED: {
    name: "NO_DIVISIONS_PROVIDED",
    message: "No divisions provided for update",
    explanation: "The request body must contain at least one division to update priorities for.",
    code: 3005,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  INVALID_REQUEST_BODY: {
    name: "INVALID_REQUEST_BODY",
    message: "Invalid request body",
    explanation: "The provided request body is malformed or missing required fields. Please ensure all required parameters are correctly provided and formatted.",
    code: 1003,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  RESPONSE_INPUT_VALIDATION_ERROR: {
    name: "ResponseInputValidationError",
    message: "Response validation failed please refer json schema of response",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3002,
    httpStatusCode: 400
  },
  INSUFFICIENT_FUNDS: {
    name: "InsufficientFundError",
    message: "User does not have enough balance",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3002,
    httpStatusCode: 400
  },
  INVALID_DIRECTION: {
    name: "INVALID DIRECTIONS",
    message: "User does not have enough balance",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3002,
    httpStatusCode: 400
  },
  INVALID_BANNER_TYPE: {
    name: "INVALID BANNER TYPE",
    message: "banner type is invalid",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3002,
    httpStatusCode: 400
  },
  WALLET_NOT_FOUND: {
    name: "WalletNotFoudError",
    message: "Invalid wallet Id",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3002,
    httpStatusCode: 400
  },
  INTERNAL_SERVER_ERROR: {
    name: "InternalServerError",
    message: "Internal Server Error",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3003,
    httpStatusCode: 500
  },
  INVALID_TOKEN: {
    name: "InvalidToken",
    message: "Either reset password token not passed or it is expired",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3025,
    httpStatusCode: 401
  },
  RESET_PASSWORD_TOKEN: {
    name: "ResetPassword",
    message: "Either reset password token not passed or it is expired",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3025,
    httpStatusCode: 401
  },
  USER_NOT_EXISTS: {
    name: "UserNotExists",
    message: "User does not exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3005,
    httpStatusCode: 400
  },
  SOMETHING_WENT_WRONG: {
    name: "SomethingWentWrong",
    message: "Something Went Wrong",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3006,
    httpStatusCode: 403
  },
  ADMIN_ALREADY_EXISTS: {
    name: "AdminAlreadyExists",
    message: "Admin already exists with this email or username",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3007,
    httpStatusCode: 400
  },
  AFFILIATES_NOT_FOUND: {
    name: "AffiliatesNotFound",
    message: "Affiliates not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3008,
    httpStatusCode: 400
  },
  TRANSACTION_NOT_FOUND: {
    name: "TransactionNotFound",
    message: "Transaction not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3009,
    httpStatusCode: 400
  },
  ADDRESS_NOT_FOUND: {
    name: "AddressNotFound",
    message: "Billing address not found",
    explanation: "The requested billing address does not exist or does not belong to this user.",
    code: 3200,
    httpStatusCode: 404
  },
  COUNTRY_NOT_FOUND: {
    name: "CountryNotFound",
    message: "Country not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3010,
    httpStatusCode: 400
  },
  TENANT_GAME_CATEGORY_NOT_FOUND: {
    name: "TenantGameCategoryNotFound",
    message: "Tenant Game Category not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3011,
    httpStatusCode: 400
  },
  CATEGORY_GAME_NOT_FOUND: {
    name: "CategoryGameNotFound",
    message: "Category Games not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3013,
    httpStatusCode: 400
  },
  TENANT_NOT_FOUND: {
    name: "TenantNotFound",
    message: "Tenant not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 1,
    httpStatusCode: 400
  },
  TENANT_REGISTRATION_NOT_FOUND: {
    name: "TenantRegistrationNotFound",
    message: "Tenant Registration fields not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3015,
    httpStatusCode: 400
  },
  CMS_NOT_FOUND: {
    name: "CmsNotFound",
    message: "Cms not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 1,
    httpStatusCode: 400
  },
  BONUS_NOT_FOUND: {
    name: "BonusNotFound",
    message: "Bonus not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3017,
    httpStatusCode: 400
  },
  UN_AUTHORIZE: {
    name: "UnAuthorize",
    message: "Unauthorized ",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3018,
    httpStatusCode: 403
  },
  ADMIN_IN_ACTIVE: {
    name: "AdminInActive",
    message: "Admin Inactive",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3043,
    httpStatusCode: 403
  },
  USER_NAME_EXISTS: {
    name: "UserNameExists",
    message: "Username already exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3020,
    httpStatusCode: 400
  },
  USER_ALREADY_EXISTS: {
    name: "UserAlreadyExists",
    message: "User already exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3021,
    httpStatusCode: 400
  },
  CURRENCY_NOT_FOUND: {
    name: "CurrencyNotFound",
    message: "Currency not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3022,
    httpStatusCode: 400
  },
  INVALID_COIN_TYPE: {
    name: "INVALID_COIN_TYPE",
    message: "invalid coin type",
    explanation: "invalid coin type please check again coin type must be GC or BSC",
    code: 3022,
    httpStatusCode: 400
  },
  LANGUAGE_NOT_FOUND: {
    name: "LanguageNotFound",
    message: "Language not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 1,
    httpStatusCode: 400
  },
  GAME_NOT_FOUND: {
    name: "GameNotFound",
    message: "Game not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3024,
    httpStatusCode: 400
  },
  EMAIL_ALREADY_EXISTS: {
    name: "EmailAlreadyExists",
    message: "Email already exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3026,
    httpStatusCode: 400
  },
  LIMITS_ERROR: {
    name: "LimitsError",
    message: "Days for take a break can be in range 1 to 30",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3027,
    httpStatusCode: 400
  },
  SESSION_TIME_LIMIT: {
    name: "SessionTimeLimit",
    message: "Session Time can be set between 1 to 24",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3028,
    httpStatusCode: 400
  },
  DOCUMENT_LABELS_NOT_FOUND: {
    name: "DocumentLabelsNotFound",
    message: "Document Labels not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3029,
    httpStatusCode: 400
  },
  USER_DOCUMENTS_NOT_FOUND: {
    name: "UserDocumentsNotFound",
    message: "User document not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3030,
    httpStatusCode: 400
  },
  GAME_EXISTS: {
    name: "GameExists",
    message: "Game already exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3031,
    httpStatusCode: 400
  },
  CASINO_TRANSACTIONS_NOT_FOUND: {
    name: "CasinoTransactionsNotFound",
    message: "Casino transactions not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3032,
    httpStatusCode: 400
  },
  BONUS_AVAIL_ERROR: {
    name: "BonusAvailError",
    message: "Bonus cannot be activated, try again later",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3033,
    httpStatusCode: 400
  },
  TRANSACTION_HANDLER_ERROR: {
    name: "TransactionHandlerError",
    message: "Transaction handler error ",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3034,
    httpStatusCode: 400
  },
  CASHBACK_LAPSED_ERROR: {
    name: "CashbackLapsedError",
    message: "Player does not have enough losses to get cashback",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3035,
    httpStatusCode: 400
  },
  BONUS_ALREADY_ISSUE_ERROR: {
    name: "BonusAlreadyIssueError",
    message: "Same Bonus cannot be issued again.",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3036,
    httpStatusCode: 400
  },
  USER_BONUS_ERROR: {
    name: "UserBonusError",
    message: "Action cannot be performed, bonus is claimed by user itself.",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3037,
    httpStatusCode: 400
  },
  BONUS_DELETE_ERROR: {
    name: "BonusDeleteError",
    message: "Bonus is being used by user or issuer is different, Bonus cannot be deleted",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3038,
    httpStatusCode: 400
  },
  WITHDRAW_REQUEST_NOT_FOUND: {
    name: "WithdrawRequestNotFound",
    message: "Withdrawal request not found.",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3039,
    httpStatusCode: 400
  },
  TENANT_REGISTRATION_NOT_EXISTS: {
    name: "TenantRegistrationNotExists",
    message: "Tenant Registration not exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3030,
    httpStatusCode: 400
  },
  CREDENTIALS_NOT_FOUND: {
    name: "CredentialsNotFound",
    message: "Credentials Not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3041,
    httpStatusCode: 400
  },
  ADMIN_NOT_FOUND: {
    name: "AdminNotFound",
    message: "Admin not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3044,
    httpStatusCode: 400
  },
  ID_REQUIRED: {
    name: "IdRequired",
    message: "Id required",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3045,
    httpStatusCode: 400
  },
  CANNOT_CREATE_ADMIN: {
    name: "CannotCreateAdmin",
    message: "Cannot Create Admin User",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3046,
    httpStatusCode: 400
  },
  PERMISSION_DENIED: {
    name: "PermissionDenied",
    message: "Permission Denied",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3047,
    httpStatusCode: 406
  },
  ROLE_NOT_FOUND: {
    name: "RoleNotFound",
    message: "Role Not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3048,
    httpStatusCode: 400
  },
  GROUP_NOT_FOUND: {
    name: "GroupNotFound",
    message: "Group Not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3049,
    httpStatusCode: 400
  },
  ACTION_NOT_ALLOWED: {
    name: "ActionNotAllowed",
    message: "Action not allowed",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3050,
    httpStatusCode: 403
  },
  LABEL_ALREADY_EXISTS: {
    name: "LabelAlreadyExists",
    message: "Label already exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3051,
    httpStatusCode: 400
  },
  GLOBAL_REGISTRATION_NOT_FOUND: {
    name: "GlobalRegistrationNotFound",
    message: "Global Registration fields not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3052,
    httpStatusCode: 400
  },
  LOYALTY_LEVEL_NOT_FOUND: {
    name: "LoyaltyLevelNotFound",
    message: "Loyalty Level Settings Not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3053,
    httpStatusCode: 400
  },
  CASINO_PROVIDER_NOT_FOUND: {
    name: "CasinoProviderNotFound",
    message: "Casino provider Not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3054,
    httpStatusCode: 400
  },
  AGGREGATOR_NOT_FOUND: {
    name: "AggregatorNotFound",
    message: "Aggregator Not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3055,
    httpStatusCode: 400
  },
  STATUS_UPDATE_FAILED: {
    name: "StatusUpdateFailed",
    message: "Status update failed",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3056,
    httpStatusCode: 400
  },
  REASON_REQUIRED: {
    name: "ReasonRequired",
    message: "Reason is required to mark user in-active",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3057,
    httpStatusCode: 400
  },
  TOGGLE_CASE_INVALID: {
    name: "ToggleCaseInvalid",
    message: "Toggle case value is invalid",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3058,
    httpStatusCode: 400
  },
  DOMAIN_EXISTS: {
    name: "DomainExists",
    message: "Domain already exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3059,
    httpStatusCode: 400
  },
  TENANT_EXISTS: {
    name: "TenantExists",
    message: "Tenant already exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3060,
    httpStatusCode: 400
  },
  CREDENTIAL_KEY_NOT_FOUND: {
    name: "CredentialKeyNotFound",
    message: "Credential key not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3061,
    httpStatusCode: 400
  },
  TENANT_CREDENTIAL_EXISTS: {
    name: "TenantCredentialExists",
    message: "Tenant credential already exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3062,
    httpStatusCode: 400
  },
  TENANT_CREDENTIALS_NOT_FOUND: {
    name: "TenantCredentialsNotFound",
    message: "Tenant credentials not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3063,
    httpStatusCode: 400
  },
  TENANT_CONFIGURATION_NOT_FOUND: {
    name: "TenantConfigurationNotFound",
    message: "Tenant configuration not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3064,
    httpStatusCode: 400
  },
  ALLOWED_CONFIGURATION_ERROR: {
    name: "AllowedConfigurationError",
    message: "Currency and language should be as per allowed configuration",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3066,
    httpStatusCode: 400
  },
  INTERNAL_USER_ERROR: {
    name: "InternalUserError",
    message: "This user is already Internal User",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3067,
    httpStatusCode: 400
  },
  DAILY_LIMIT_ERROR: {
    name: "DailyLimitError",
    message: "Daily limit should be less than weekly and monthly limit",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3068,
    httpStatusCode: 400
  },
  WEEKLY_LIMIT_ERROR: {
    name: "WeeklyLimitError",
    message: "Weekly limit should be greater than daily limit and less than monthly limit",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3069,
    httpStatusCode: 400
  },
  MONTHLY_LIMIT_ERROR: {
    name: "MonthlyLimitError",
    message: "Monthly limit should be greater than daily limit and weekly limit",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3070,
    httpStatusCode: 400
  },
  REMOVE_MONEY_ERROR: {
    name: "RemoveMoneyError",
    message: "Remove money amount is more than wallet balance",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3071,
    httpStatusCode: 400
  },
  IMAGE_NOT_FOUND: {
    name: "ImageNotFound",
    message: "Image not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3072,
    httpStatusCode: 400
  },
  FILE_NOT_FOUND: {
    name: "FILE_NOT_FOUND",
    message: "file not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3072,
    httpStatusCode: 400
  },
  REWARDS_NOT_FOUND: {
    name: "RwardsNotFound",
    message: "Rewards not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3072,
    httpStatusCode: 400
  },
  MULTIPLE_REWARDS_NOT_ALLOWED: {
    name: "MULTIPLE_REWARDS_NOT_ALLOWED",
    message: "multiple rewards not allowed",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3072,
    httpStatusCode: 400
  },
  BANNER_NOT_FOUND: {
    name: "BannerNotFound",
    message: "Banner not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3072,
    httpStatusCode: 400
  },
  BANNER_KEY_NOT_FOUND: {
    name: "BannerKeyNotFound",
    message: "Banner key not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3073,
    httpStatusCode: 400
  },
  KEY_NOT_FOUND: {
    name: "KeyNotFound",
    message: "Key not found for currency",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3074,
    httpStatusCode: 400
  },
  DAYS_REQUIRED: {
    name: "DaysRequired",
    message: "Days to clear required and should be less than 30 for freespins",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3075,
    httpStatusCode: 400
  },
  WAGERING_TYPE_INVALID: {
    name: "WageringTypeInvalid",
    message: "Invalid wagering type selected",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3076,
    httpStatusCode: 400
  },
  WAGERING_TEMPLATE_NOT_FOUND: {
    name: "WageringTemplateNotFound",
    message: "Wagering template not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3077,
    httpStatusCode: 400
  },
  INVALID_QUANTITY: {
    name: "InvalidQuantity",
    message: "Spins quantity must be less than 100",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3078,
    httpStatusCode: 400
  },
  APPLIED_BONUS_NOT_FOUND: {
    name: "AppliedBonusNotFound",
    message: "Applied bonus not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3079,
    httpStatusCode: 400
  },
  SPINS_REQUIRED: {
    name: "SpinsRequired",
    message: "Free spins quantity required",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3080,
    httpStatusCode: 400
  },
  GAMES_REQUIRED: {
    name: "GamesRequired",
    message: "Games required",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3081,
    httpStatusCode: 400
  },
  TIME_PERIOD_REQUIRED: {
    name: "TimePeriodRequired",
    message: "Time period required",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3082,
    httpStatusCode: 400
  },
  USER_BONUS_NOT_FOUND: {
    name: "UserBonusNotFound",
    message: "User bonus not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3083,
    httpStatusCode: 400
  },
  AGGREGATOR_EXISTS: {
    name: "AggregatorExists",
    message: "Casino aggregator already exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3084,
    httpStatusCode: 400
  },
  GAME_SUB_CATEGORY_NOT_FOUND: {
    name: "GameSubCategoryNotFound",
    message: "Game Sub Category not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3085,
    httpStatusCode: 400
  },
  GAME_CATEGORY_NOT_FOUND: {
    name: "GameCategoryNotFound",
    message: "Game Category not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3086,
    httpStatusCode: 400
  },
  CASINO_PROVIDER_ALREADY_EXISTS: {
    name: "CasinoProviderAlreadyExists",
    message: "Casino provider already exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3087,
    httpStatusCode: 400
  },
  GAME_CATEGORY_ALREADY_EXISTS: {
    name: "GameCategoryAlreadyExists",
    message: "Game Category already exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3088,
    httpStatusCode: 400
  },
  GAME_SUB_CATEGORY_ALREADY_EXISTS: {
    name: "GameSubCategoryAlreadyExists",
    message: "Game Sub Category already exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3089,
    httpStatusCode: 400
  },
  NAME_ALREADY_EXISTS: {
    name: "NameAlreadyExists",
    message: "Name already exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3090,
    httpStatusCode: 400
  },
  CMS_ALREADY_EXISTS: {
    name: "CmsAlreadyExists",
    message: "Cms with this slug already exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3091,
    httpStatusCode: 400
  },
  ITEMS_NOT_FOUND: {
    name: "ItemsNotFound",
    message: "Restricted items not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3092,
    httpStatusCode: 400
  },
  CURRENCY_ALREADY_EXISTS: {
    name: "CurrencyAlreadyExists",
    message: "Currency already exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3093,
    httpStatusCode: 400
  },
  EMAIL_TEMPLATE_ALREADY_EXISTS: {
    name: "EmailTemplateAlreadyExists",
    message: "Email template for this label already exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3094,
    httpStatusCode: 400
  },
  EMAIL_TEMPLATE_NOT_FOUND: {
    name: "EmailTemplateNotFound",
    message: "Email template not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3095,
    httpStatusCode: 400
  },
  PRIMARY_EMAIL: {
    name: "PrimaryEmail",
    message: "Cannot delete primary email",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3096,
    httpStatusCode: 400
  },
  PRIMARY_TEMPLATE: {
    name: "PrimaryTemplate",
    message: "Select other primary template",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3097,
    httpStatusCode: 400
  },
  CUSTOM_DATE_REQUIRED: {
    name: "CustomDateRequired",
    message: "Custom date options required dates",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3098,
    httpStatusCode: 400
  },
  ORDER_REQUIRED: {
    name: "OrderRequired",
    message: "Send order for all sub categories",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3100,
    httpStatusCode: 400
  },
  USER_DATA_UPDATED: {
    name: "UserDataUpdated",
    message: "User data already updated at my affiliate",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3101,
    httpStatusCode: 400
  },
  TOKEN_DECODE: {
    name: "TokenDecode",
    message: "Unable to decode Affiliate Token",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3102,
    httpStatusCode: 400
  },
  AFFILIATES_ERROR: {
    name: "AffiliatesError",
    message: "Unable to send user details to my affiliates",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3103,
    httpStatusCode: 400
  },
  PAYMENT_PROVIDER_NOT_FOUND_ERROR: {
    name: "PaymentProviderNotFoundError",
    message: "Payment Provider not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3104,
    httpStatusCode: 400
  },
  INVALID_FILE: {
    name: "InvalidFile",
    message: "Invalid File .",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3105,
    httpStatusCode: 400
  },
  DEPOSIT_CASHBACK_BONUS: {
    name: "DepositCashbackBonus",
    message: "Cannot issue Deposit Cashback bonus",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3106,
    httpStatusCode: 400
  },
  INVALID_BONUS_ERROR: {
    name: "InvalidBonusError",
    message: "Amount can be issued only in Deposit Bonus.",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3107,
    httpStatusCode: 400
  },
  AMOUNT_REQUIRED: {
    name: "AmountRequired",
    message: "Bonus amount required",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3108,
    httpStatusCode: 400
  },
  MERCHANT_NOT_FOUND: {
    name: "MerchantNotFound",
    message: "Merchant not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3109,
    httpStatusCode: 400
  },
  SEGMENTS_NOT_FOUND: {
    name: "SegmentsNotFound",
    message: "Segments not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3110,
    httpStatusCode: 400
  },
  USER_COUNTRY_BLOCKED: {
    name: "UserCountryBlocked",
    message: "This bonus is blocked for players country",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3111,
    httpStatusCode: 400
  },
  BALANCE_BONUS_CLAIMED: {
    name: "BalanceBonusClaimed",
    message: "Balance Bonus applying this bonus is claimed by user.",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3112,
    httpStatusCode: 400
  },
  COMMENT_NOT_FOUND: {
    name: "CommentNotFound",
    message: "Comment not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3113,
    httpStatusCode: 400
  },
  EMAIL_ALREADY_VERIFIED: {
    name: "EmailAlreadyVerified",
    message: "Email already verified",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3114,
    httpStatusCode: 400
  },
  EXTERNAL_API_ERROR: {
    name: "ExternalApiError",
    message: "External api response error",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3115,
    httpStatusCode: 400
  },
  FIELD_NAME_REQUIRED: {
    name: "FieldNameRequired",
    message: "Field names required to delete",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3116,
    httpStatusCode: 400
  },
  AMOUNT_FIELD_DELETE_ERROR: {
    name: "AmountFieldDeleteError",
    message: "Amount field cannot be deleted",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3117,
    httpStatusCode: 400
  },
  PAYMENT_PROVIDER_ALREADY_EXISTS: {
    name: "PaymentProviderAlreadyExists",
    message: "Payment provider for this aggregator and group already exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3118,
    httpStatusCode: 400
  },
  SAME_PASSWORD_ERROR: {
    name: "SamePasswordError",
    message: "New Password cannot be same as previous password",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3119,
    httpStatusCode: 400
  },
  WRONG_PASSWORD_ERROR: {
    name: "WrongPasswordError",
    message: "Current password wrong",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3120,
    httpStatusCode: 400
  },
  EMAIL_NOT_VERIFIED: {
    name: "EmailNotVerified",
    message: "Email Not Verified",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3121,
    httpStatusCode: 400
  },
  REVIEW_NOT_FOUND: {
    name: "ReviewNotFound",
    message: "Review not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3122,
    httpStatusCode: 400
  },
  SPORTS_BETTING_TRANSACTIONS_NOT_FOUND: {
    name: "SportsBettingTransactionsNotFound",
    message: "Sports Betting transactions not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 33123,
    httpStatusCode: 400
  },
  JOINING_AMOUNT_NOT_FOUND: {
    name: "JoiningAmountNotFound",
    message: "Joining Amount not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3124,
    httpStatusCode: 400
  },
  ACTIVE_BONUS_EXISTS: {
    name: "ActiveBonusExists",
    message: "Active Bonus already exists.",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3125,
    httpStatusCode: 400
  },
  NOT_FOUND_CASINO_GAME: {
    name: "NotFoundCasinoGame",
    message: "Not Found CasinoGame.",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3126,
    httpStatusCode: 400
  },
  PROMOTION_SLUG_ALREADY_EXISTS: {
    name: "PromotionSlugAlreadyExists",
    message: "Promotion slug already exists.",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3126,
    httpStatusCode: 400
  },
  PROMOTION_NOT_EXISTS: {
    name: "PromotionNotExists",
    message: "Promotion not exists.",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3126,
    httpStatusCode: 400
  },
  PREVIOUS_LEVEL_NOT_UPDATED: {
    name: "PreviousLevelNotUpdated",
    message: "Please update previous level ",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3128,
    httpStatusCode: 400
  },
  GROUP_ALREADY_EXISTS: {
    name: "GroupAlreadyExistsErrorType",
    message: "Group Already Exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3129,
    httpStatusCode: 400
  },
  COMMISION_GROUP_ALREADY_EXISTS: {
    name: "CommisionGroupAlreadyExists",
    message: "Affiliates Commision Group Already Exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3132,
    httpStatusCode: 400
  },
  COMMISION_GROUP_NOT_EXISTS: {
    name: "CommisionGroupNotExists",
    message: "Affiliates Commision Group Not Exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3133,
    httpStatusCode: 400
  },
  UPLINE_USER_ALREADY_EXISTS: {
    name: "UplineUserAlreadyExists",
    message: "Upline User Already Exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3133,
    httpStatusCode: 400
  },
  PACKAGE_ALREADY_EXISTS: {
    name: "PackageAlreadyExists",
    message: "Package already exists with the same label",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3026,
    httpStatusCode: 400
  },
  PACKAGE_NOT_EXISTS: {
    name: "PackageNotExists",
    message: "Package does not exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3005,
    httpStatusCode: 400
  },
  PACKAGE_NOT_FOUND: {
    name: "PackageNotFound",
    message: "Package not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3095,
    httpStatusCode: 400
  },
  ADMIN_ROLE_NOT_FOUND: {
    name: "AdminRoleNotFound",
    message: "Admin role not found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3095,
    httpStatusCode: 400
  },
  ADMIN_ROLE_NOT_EXISTS: {
    name: "AdminRoleNotExists",
    message: "Admin role does not exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3005,
    httpStatusCode: 400
  },
  VIP_TIER_ALREADY_EXISTS: {
    name: "VipTierAlreadyExists",
    message: "Vip Tier already exists for the same level or same name",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3026,
    httpStatusCode: 400
  },
  VIP_TIER_NOT_EXISTS: {
    name: "VipTierNotExists",
    message: "Vip Tier does not exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3005,
    httpStatusCode: 400
  },
  VIP_TIERS_NOT_EXISTS: {
    name: "VipTiersNotExists",
    message: "Vip Tiers does not exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3005,
    httpStatusCode: 400
  },
  MAX_LIMIT_LESS_THAN_MIN_LIMIT: {
    name: "MaxDepositLimitLessThanMinDepositLimit",
    message: "Max deposit limit can not be less than Min deposit limit",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3005,
    httpStatusCode: 400
  },
  MIN_LIMIT_GREATER_THAN_MAX_LIMIT: {
    name: "MinDepositLimitGreaterThanMaxDepositLimit",
    message: "Min deposit limit can not be greater than Max deposit limit",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3005,
    httpStatusCode: 400
  },
  INVALID_WHEEL_DIVISION_ID: {
    name: "InvalidWheelDivisionId",
    message: "Invalid WheelDivisionId .",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3105,
    httpStatusCode: 400
  },
  USER_LIMITS_DOES_NOT_EXISTS: {
    name: "UserLimtsDoesNotExists",
    message: "User Limits does not exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3005,
    httpStatusCode: 400
  },
  FAUCET_SETTINGS_DOES_NOT_EXISTS: {
    name: "FaucetSettingsDoesNotExists",
    message: "Faucet settings does not exists",
    explanation: "Settings for Faucet does not exists in global settings",
    code: 3005,
    httpStatusCode: 400
  },
  WITHDRAWAL_LIMITS_SETTINGS_DOES_NOT_EXISTS: {
    name: "WithdrawalLimitsSettingsDoesNotExists",
    message: "Withdrawal limits settings does not exists",
    explanation: "Settings for Withdrawal Limits does not exists in global settings",
    code: 3005,
    httpStatusCode: 400
  },
  INVALID_TICKET_ID: {
    name: "InvalidTicketId",
    message: "TicketId is invlid",
    explanation: "There is no ticket present for the given ticketId.",
    code: 3131,
    httpStatusCode: 400
  },
  INVALID_TICKET_STATUS: {
    name: "InvalidTicketStatus",
    message: "Ticket status is invlid",
    explanation: "The given ticket status is invalid",
    code: 3132,
    httpStatusCode: 400
  },
  NO_TICKETS_FOUND: {
    name: "NoTicketsFound",
    message: "No Tickets Found",
    explanation: "No tickets present for the given search values",
    code: 3133,
    httpStatusCode: 400
  },
  GLOBAL_GROUP_EXIST: {
    name: "GlobalGroupExist",
    message: "Global Group Exist",
    explanation: "Global group already exist",
    code: 3134,
    httpStatusCode: 400
  },
  GROUP_NAME_ALREADY_EXIST: {
    name: "GroupNameExist",
    message: "Global Name Exist",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3135,
    httpStatusCode: 400
  },
  CHAT_GROUP_NOT_FOUND: {
    name: "ChatGroupNotFound",
    message: "Chat Group Not Found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3136,
    httpStatusCode: 400
  },
  CHAT_RAIN_ALREADY_ACTIVE: {
    name: "ChatRainAlreadyActive",
    message: "Chat Rain Already Active",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3137,
    httpStatusCode: 400
  },
  CHAT_RAIN_NOT_FOUND: {
    name: "ChatRainNotFound",
    message: "Chat Rain Not Found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3138,
    httpStatusCode: 400
  },
  CHAT_RULE_NOT_FOUND: {
    name: "ChatRuleNotFound",
    message: "Chat Rule Not Found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3139,
    httpStatusCode: 400
  },
  OFFENSIVE_WORD_EXIST: {
    name: "OffensiveWordExist",
    message: "Offensive word already exist",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3140,
    httpStatusCode: 400
  },
  OFFENSIVE_WORD_NOT_FOUND: {
    name: "OffensiveWordNotFound",
    message: "Offensive Word Not Found",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3141,
    httpStatusCode: 400
  },
  INVALID_ARRAY: {
    name: "Invalid array",
    message: "Invalid array",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3141,
    httpStatusCode: 400
  },
  SOCIAL_MEDIA_LINK_DOES_NOT_EXISTS: {
    name: "SocialMediaLinkSettingsDoesNotExists",
    message: "Social media link settings does not exists",
    explanation: "Settings for social media link does not exists in global settings",
    code: 3142,
    httpStatusCode: 400
  },
  KILL_SWITCH_DOES_NOT_EXISTS: {
    name: "KillSwitchSettingsDoesNotExists",
    message: "Kill switch settings does not exists",
    explanation: "Settings for kill switch does not exists in global settings",
    code: 3143,
    httpStatusCode: 400
  },
  DEPOSIT_LIMITS_DOES_NOT_EXISTS: {
    name: "DepositLimitsSettingsDoesNotExists",
    message: "Deposit Limits settings does not exists",
    explanation: "Settings for deposit limits does not exists in global settings",
    code: 3144,
    httpStatusCode: 400
  },
  NO_GLOBAL_SETTINGS_EXISTS: {
    name: "GlobalSettingsDoesNotExists",
    message: "settings does not exists",
    explanation: "Settings does not exists in global settings",
    code: 3145,
    httpStatusCode: 400
  },
  SITE_INFORMATION_DOES_NOT_EXISTS: {
    name: "SiteInformationSettingsDoesNotExists",
    message: "site information settings does not exists",
    explanation: "site information setting does not exists in global settings",
    code: 3146,
    httpStatusCode: 400
  },
  CMS_EXISTS: {
    name: "CMSExists",
    message: "CMS Already Exists",
    explanation: "CMS Already Exists",
    code: 3147,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  STATE_NOT_FOUND: {
    name: "StateDoesNotExists",
    message: "State does not exists",
    explanation: "State Does Not Exists",
    code: 3148,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  AGE_IS_BELOW18: {
    name: "AgeIsBelow18",
    message: "Age is Below 18",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3149,
    httpStatusCode: 400
  },
  BONUS_CODE_ALREADY_EXIST: {
    name: "BonusCodeAlreadyExist",
    message: "Bonus Code Already Exist",
    explanation: "Bonus Code Already Exist",
    code: 3150,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  GAME_CATEGORY_EXISTS: {
    name: "GameCategoryAlreadyExist",
    message: "Game Category Already Exist",
    explanation: "Game Category Already Exist",
    code: 3151,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  PERCENTAGE_IS_BELOW100: {
    name: "PercentageIsBelow100",
    message: "Sum of all percentage is below 100",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 3152,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  PAYMENT_FAILED: {
    name: 'PaymentFailed',
    message: 'Payment Failed',
    explanation: 'Payment Failed',
    code: 3153,
    httpStatusCode: 400
  },
  PROVIDER_INACTIVE: {
    name: "ProviderInactive",
    message: "Not get any response,since provider is inactive, try again",
    explanation: "Not get any response,since provider is inactive",
    code: 3154,
    httpStatusCode: 400
  },
  DEFAULT_GAME_CATEGORY_NOT_FOUND: {
    name: "DefaultGameCategoryNotFound",
    message: "Default game category not found",
    explanation: "Default game category not found.",
    code: 3155,
    httpStatusCode: 400
  },
  INVALID_SEGMENT_ID: {
    name: "InvalidSegmentId",
    message: "One or more provided segment IDs are invalid",
    explanation: "The segment IDs provided do not exist in the database or are not valid.",
    code: 4101,
    httpStatusCode: 400
  },
  CAMPAIGN_NOT_FOUND: {
    name: "CampaignNotFound",
    message: "Campaign not found.",
    explanation: "The campaign with the given ID does not exist.",
    code: 4102,
    httpStatusCode: 404
  },
  INVALID_CAMPAIGN_STATUS: {
    name: "InvalidStatusValue",
    message: "Status value is invalid.",
    explanation: "The provided status value is invalid.",
    code: 4103,
    httpStatusCode: 400
  },
  CAMPAIGN_NOT_ACTIVE: {
    name: "CampaignNotActive",
    message: "Campaign is Not Active.",
    explanation: "The provided campaign is Inactive.",
    code: 4104,
    httpStatusCode: 400
  },
  SEGMENTS_ALREADY_EXISTS: {
    name: "SegmentAlreadyExists",
    message: "This segment Already Exists",
    explanation: "An unexpected error occurred while processing your request. Please try again later.",
    code: 4105,
    httpStatusCode: 400
  },
  REPORT_NOT_FOUND: {
    name: "ReportNotFound",
    message: "Report not found",
    explanation: "Report not found.",
    code: 4106,
    httpStatusCode: 400
  },
  INVALID_INPUT: {
    name: "INVALID INPUT",
    message: "Using Invalid Input",
    explanation: "you are using invalid input",
    code: 4106,
    httpStatusCode: 400
  },
  REQUIRED_ADDRESS_DETAILS: {
    name: "RequiredAddressDetails",
    message: "Address details are required",
    explanation: "The user did not provide the necessary address information needed to proceed",
    code: 4107,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  REQUIRED_FIELD: {
    name: "RequiredField",
    message: "A required field is missing",
    explanation: "One or more required fields were not provided in the request",
    code: 4108,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  INVALID_CARD_DETAILS: {
    name: "InvalidCardDetails",
    message: "Card details provided are invalid",
    explanation: "The card number, expiry date, CVV, or other details are incorrect or improperly formatted",
    code: 4109,
    httpStatusCode: _httpStatusCodes.StatusCodes.BAD_REQUEST
  },
  USER_WITHDRAWAL_LIMIT_NOT_FOUND: {
    name: "FailToFetchUserWithdrawalLimit",
    message: "Fail to fetch user withdrawal limit",
    explanation: "fail to fetch user withdrawal limit",
    code: 4110,
    httpStatusCode: 400
  },
  MISSING_CUSTOMER_ID: {
    name: "MissingCustomerId",
    message: "Customer Id Missing.",
    explanation: "Missing customer ID",
    code: 4111,
    httpStatusCode: 400
  },
  UNSUPPORTED_PAYMENT_PROVIDER: {
    name: "UnsupportedPaymentProvider",
    message: "Unsupported payment provider.",
    explanation: "Payment provider is not supported",
    code: 4112,
    httpStatusCode: 400
  },
  GLOBAL_SETTING_NOT_FOUND: {
    name: "GlobalSettingNotFound",
    message: "Global setting not found",
    explanation: "Requested global setting key does not exist in database",
    code: 4113,
    httpStatusCode: 400
  },
  ACCOUNT_SUSPENDED: {
    name: "AccountSuspended",
    message: "Your account has been temporarily suspended. Please contact support for assistance.",
    explanation: "Your account is currently suspended and access has been restricted.",
    code: 4113,
    httpStatusCode: 403
  },
  ACCOUNT_UNDER_REVIEW: {
    name: "AccountUnderReview",
    message: "Your account is currently under review. Please try again later.",
    explanation: "Your account is under review and will be restored once the review is complete.",
    code: 4114,
    httpStatusCode: 403
  },
  ACCOUNT_CLOSED: {
    name: "AccountClosed",
    message: "Your account has been permanently closed. Please contact support if you believe this is an error.",
    explanation: "Your account has been permanently closed and cannot be restored.",
    code: 4115,
    httpStatusCode: 403
  },
  TAG_NOT_FOUND: {
    name: "TagNotFound",
    message: "Tag not found",
    explanation: "Tag not found.",
    code: 4113,
    httpStatusCode: 400
  },
  CATEGORY_NOT_FOUND: {
    name: "CategoryNotFound",
    message: "Category not found",
    explanation: "The requested category could not be found in the database.",
    code: 5001,
    httpStatusCode: 404
  },
  CATEGORY_EXISTS: {
    name: "CategoryExists",
    message: "Category already exists",
    explanation: "A category with the same slug already exists.",
    code: 5002,
    httpStatusCode: 400
  },
  SUBCATEGORY_NOT_FOUND: {
    name: "SubcategoryNotFound",
    message: "Subcategory not found",
    explanation: "The requested subcategory could not be found in the database or does not belong to the category.",
    code: 5003,
    httpStatusCode: 404
  },
  SUBCATEGORY_EXISTS: {
    name: "SubcategoryExists",
    message: "Subcategory already exists",
    explanation: "A subcategory with the same slug already exists.",
    code: 5004,
    httpStatusCode: 400
  },
  PRODUCT_NOT_FOUND: {
    name: "ProductNotFound",
    message: "Product not found",
    explanation: "The requested product could not be found in the database.",
    code: 5005,
    httpStatusCode: 404
  },
  PRODUCT_EXISTS: {
    name: "ProductExists",
    message: "Product already exists",
    explanation: "A product with the same slug or base code already exists.",
    code: 5006,
    httpStatusCode: 400
  },
  ENQUIRY_NOT_FOUND: {
    name: "EnquiryNotFound",
    message: "Enquiry not found",
    explanation: "The requested enquiry could not be found in the database.",
    code: 5007,
    httpStatusCode: 404
  },
  FRANCHISE_LOCATION_NOT_FOUND: {
    name: "FranchiseLocationNotFound",
    message: "Franchise location not found",
    explanation: "The requested franchise location could not be found in the database.",
    code: 5008,
    httpStatusCode: 404
  },
  INVALID_STATE: {
    name: "InvalidState",
    message: "Invalid state",
    explanation: "The provided state is not a recognized Indian state or union territory.",
    code: 5009,
    httpStatusCode: 400
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaHR0cFN0YXR1c0NvZGVzIiwicmVxdWlyZSIsIkVycm9ycyIsImV4cG9ydHMiLCJESVZJU0lPTlNfTk9UX0ZPVU5EIiwibmFtZSIsIm1lc3NhZ2UiLCJleHBsYW5hdGlvbiIsImNvZGUiLCJodHRwU3RhdHVzQ29kZSIsIlN0YXR1c0NvZGVzIiwiTk9UX0ZPVU5EIiwiSU5WQUxJRF9QUklPUklUWV9TVU0iLCJCQURfUkVRVUVTVCIsIlBSSU9SSVRZX1ZBTFVFX0lOVkFMSUQiLCJESVZJU0lPTl9VUERBVEVfRkFJTEVEIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwiTk9fRElWSVNJT05TX1BST1ZJREVEIiwiSU5WQUxJRF9SRVFVRVNUX0JPRFkiLCJUT0RPX05PVF9GT1VORCIsIlBPU1RBTF9DT0RFX1NFVFRJTkdfTk9UX0ZPVU5EIiwiQURNSU5fUk9MRV9FWElTVFMiLCJNSVNTSU5HX1JFUVVJUkVEX1BBUkFNRVRFUiIsIklOVkFMSURfR0FNQkxJTkdfTElNSVQiLCJSRVFVRVNUX1ZBTElEQVRJT05fRVJST1IiLCJJTlZBTElEX1BPU1RBTF9DT0RFX0JPRFkiLCJJTlZBTElEX1NUQVRVUyIsIkVNQUlMX1NFUlZJQ0VfRkFJTEVEIiwiUE9TVEFMX0NPREVfTk9UX0ZPVU5EIiwiU0VMRl9FWENMVVNJT05fTk9UX0ZPVU5EIiwiU0VMRl9FWENMVVNJT05fRVhJU1RTIiwiRk9SQklEREVOIiwiSU5WQUxJRF9TVEFUVVNfVFJBTlNJVElPTiIsIklOVkFMSURfRVhQSVJZX1RJTUUiLCJOT19GSUVMRFNfVE9fVVBEQVRFIiwiRFVQTElDQVRFX0NPREUiLCJSRVNQT05TRV9WQUxJREFUSU9OX0VSUk9SIiwiQk9OVVNfVVBEQVRFX0ZBSUxFRCIsIklOVEVSTkFMX0VSUk9SIiwiUkVRVUVTVF9JTlBVVF9WQUxJREFUSU9OX0VSUk9SIiwiUkVTUE9OU0VfSU5QVVRfVkFMSURBVElPTl9FUlJPUiIsIklOU1VGRklDSUVOVF9GVU5EUyIsIklOVkFMSURfRElSRUNUSU9OIiwiSU5WQUxJRF9CQU5ORVJfVFlQRSIsIldBTExFVF9OT1RfRk9VTkQiLCJJTlZBTElEX1RPS0VOIiwiUkVTRVRfUEFTU1dPUkRfVE9LRU4iLCJVU0VSX05PVF9FWElTVFMiLCJTT01FVEhJTkdfV0VOVF9XUk9ORyIsIkFETUlOX0FMUkVBRFlfRVhJU1RTIiwiQUZGSUxJQVRFU19OT1RfRk9VTkQiLCJUUkFOU0FDVElPTl9OT1RfRk9VTkQiLCJBRERSRVNTX05PVF9GT1VORCIsIkNPVU5UUllfTk9UX0ZPVU5EIiwiVEVOQU5UX0dBTUVfQ0FURUdPUllfTk9UX0ZPVU5EIiwiQ0FURUdPUllfR0FNRV9OT1RfRk9VTkQiLCJURU5BTlRfTk9UX0ZPVU5EIiwiVEVOQU5UX1JFR0lTVFJBVElPTl9OT1RfRk9VTkQiLCJDTVNfTk9UX0ZPVU5EIiwiQk9OVVNfTk9UX0ZPVU5EIiwiVU5fQVVUSE9SSVpFIiwiQURNSU5fSU5fQUNUSVZFIiwiVVNFUl9OQU1FX0VYSVNUUyIsIlVTRVJfQUxSRUFEWV9FWElTVFMiLCJDVVJSRU5DWV9OT1RfRk9VTkQiLCJJTlZBTElEX0NPSU5fVFlQRSIsIkxBTkdVQUdFX05PVF9GT1VORCIsIkdBTUVfTk9UX0ZPVU5EIiwiRU1BSUxfQUxSRUFEWV9FWElTVFMiLCJMSU1JVFNfRVJST1IiLCJTRVNTSU9OX1RJTUVfTElNSVQiLCJET0NVTUVOVF9MQUJFTFNfTk9UX0ZPVU5EIiwiVVNFUl9ET0NVTUVOVFNfTk9UX0ZPVU5EIiwiR0FNRV9FWElTVFMiLCJDQVNJTk9fVFJBTlNBQ1RJT05TX05PVF9GT1VORCIsIkJPTlVTX0FWQUlMX0VSUk9SIiwiVFJBTlNBQ1RJT05fSEFORExFUl9FUlJPUiIsIkNBU0hCQUNLX0xBUFNFRF9FUlJPUiIsIkJPTlVTX0FMUkVBRFlfSVNTVUVfRVJST1IiLCJVU0VSX0JPTlVTX0VSUk9SIiwiQk9OVVNfREVMRVRFX0VSUk9SIiwiV0lUSERSQVdfUkVRVUVTVF9OT1RfRk9VTkQiLCJURU5BTlRfUkVHSVNUUkFUSU9OX05PVF9FWElTVFMiLCJDUkVERU5USUFMU19OT1RfRk9VTkQiLCJBRE1JTl9OT1RfRk9VTkQiLCJJRF9SRVFVSVJFRCIsIkNBTk5PVF9DUkVBVEVfQURNSU4iLCJQRVJNSVNTSU9OX0RFTklFRCIsIlJPTEVfTk9UX0ZPVU5EIiwiR1JPVVBfTk9UX0ZPVU5EIiwiQUNUSU9OX05PVF9BTExPV0VEIiwiTEFCRUxfQUxSRUFEWV9FWElTVFMiLCJHTE9CQUxfUkVHSVNUUkFUSU9OX05PVF9GT1VORCIsIkxPWUFMVFlfTEVWRUxfTk9UX0ZPVU5EIiwiQ0FTSU5PX1BST1ZJREVSX05PVF9GT1VORCIsIkFHR1JFR0FUT1JfTk9UX0ZPVU5EIiwiU1RBVFVTX1VQREFURV9GQUlMRUQiLCJSRUFTT05fUkVRVUlSRUQiLCJUT0dHTEVfQ0FTRV9JTlZBTElEIiwiRE9NQUlOX0VYSVNUUyIsIlRFTkFOVF9FWElTVFMiLCJDUkVERU5USUFMX0tFWV9OT1RfRk9VTkQiLCJURU5BTlRfQ1JFREVOVElBTF9FWElTVFMiLCJURU5BTlRfQ1JFREVOVElBTFNfTk9UX0ZPVU5EIiwiVEVOQU5UX0NPTkZJR1VSQVRJT05fTk9UX0ZPVU5EIiwiQUxMT1dFRF9DT05GSUdVUkFUSU9OX0VSUk9SIiwiSU5URVJOQUxfVVNFUl9FUlJPUiIsIkRBSUxZX0xJTUlUX0VSUk9SIiwiV0VFS0xZX0xJTUlUX0VSUk9SIiwiTU9OVEhMWV9MSU1JVF9FUlJPUiIsIlJFTU9WRV9NT05FWV9FUlJPUiIsIklNQUdFX05PVF9GT1VORCIsIkZJTEVfTk9UX0ZPVU5EIiwiUkVXQVJEU19OT1RfRk9VTkQiLCJNVUxUSVBMRV9SRVdBUkRTX05PVF9BTExPV0VEIiwiQkFOTkVSX05PVF9GT1VORCIsIkJBTk5FUl9LRVlfTk9UX0ZPVU5EIiwiS0VZX05PVF9GT1VORCIsIkRBWVNfUkVRVUlSRUQiLCJXQUdFUklOR19UWVBFX0lOVkFMSUQiLCJXQUdFUklOR19URU1QTEFURV9OT1RfRk9VTkQiLCJJTlZBTElEX1FVQU5USVRZIiwiQVBQTElFRF9CT05VU19OT1RfRk9VTkQiLCJTUElOU19SRVFVSVJFRCIsIkdBTUVTX1JFUVVJUkVEIiwiVElNRV9QRVJJT0RfUkVRVUlSRUQiLCJVU0VSX0JPTlVTX05PVF9GT1VORCIsIkFHR1JFR0FUT1JfRVhJU1RTIiwiR0FNRV9TVUJfQ0FURUdPUllfTk9UX0ZPVU5EIiwiR0FNRV9DQVRFR09SWV9OT1RfRk9VTkQiLCJDQVNJTk9fUFJPVklERVJfQUxSRUFEWV9FWElTVFMiLCJHQU1FX0NBVEVHT1JZX0FMUkVBRFlfRVhJU1RTIiwiR0FNRV9TVUJfQ0FURUdPUllfQUxSRUFEWV9FWElTVFMiLCJOQU1FX0FMUkVBRFlfRVhJU1RTIiwiQ01TX0FMUkVBRFlfRVhJU1RTIiwiSVRFTVNfTk9UX0ZPVU5EIiwiQ1VSUkVOQ1lfQUxSRUFEWV9FWElTVFMiLCJFTUFJTF9URU1QTEFURV9BTFJFQURZX0VYSVNUUyIsIkVNQUlMX1RFTVBMQVRFX05PVF9GT1VORCIsIlBSSU1BUllfRU1BSUwiLCJQUklNQVJZX1RFTVBMQVRFIiwiQ1VTVE9NX0RBVEVfUkVRVUlSRUQiLCJPUkRFUl9SRVFVSVJFRCIsIlVTRVJfREFUQV9VUERBVEVEIiwiVE9LRU5fREVDT0RFIiwiQUZGSUxJQVRFU19FUlJPUiIsIlBBWU1FTlRfUFJPVklERVJfTk9UX0ZPVU5EX0VSUk9SIiwiSU5WQUxJRF9GSUxFIiwiREVQT1NJVF9DQVNIQkFDS19CT05VUyIsIklOVkFMSURfQk9OVVNfRVJST1IiLCJBTU9VTlRfUkVRVUlSRUQiLCJNRVJDSEFOVF9OT1RfRk9VTkQiLCJTRUdNRU5UU19OT1RfRk9VTkQiLCJVU0VSX0NPVU5UUllfQkxPQ0tFRCIsIkJBTEFOQ0VfQk9OVVNfQ0xBSU1FRCIsIkNPTU1FTlRfTk9UX0ZPVU5EIiwiRU1BSUxfQUxSRUFEWV9WRVJJRklFRCIsIkVYVEVSTkFMX0FQSV9FUlJPUiIsIkZJRUxEX05BTUVfUkVRVUlSRUQiLCJBTU9VTlRfRklFTERfREVMRVRFX0VSUk9SIiwiUEFZTUVOVF9QUk9WSURFUl9BTFJFQURZX0VYSVNUUyIsIlNBTUVfUEFTU1dPUkRfRVJST1IiLCJXUk9OR19QQVNTV09SRF9FUlJPUiIsIkVNQUlMX05PVF9WRVJJRklFRCIsIlJFVklFV19OT1RfRk9VTkQiLCJTUE9SVFNfQkVUVElOR19UUkFOU0FDVElPTlNfTk9UX0ZPVU5EIiwiSk9JTklOR19BTU9VTlRfTk9UX0ZPVU5EIiwiQUNUSVZFX0JPTlVTX0VYSVNUUyIsIk5PVF9GT1VORF9DQVNJTk9fR0FNRSIsIlBST01PVElPTl9TTFVHX0FMUkVBRFlfRVhJU1RTIiwiUFJPTU9USU9OX05PVF9FWElTVFMiLCJQUkVWSU9VU19MRVZFTF9OT1RfVVBEQVRFRCIsIkdST1VQX0FMUkVBRFlfRVhJU1RTIiwiQ09NTUlTSU9OX0dST1VQX0FMUkVBRFlfRVhJU1RTIiwiQ09NTUlTSU9OX0dST1VQX05PVF9FWElTVFMiLCJVUExJTkVfVVNFUl9BTFJFQURZX0VYSVNUUyIsIlBBQ0tBR0VfQUxSRUFEWV9FWElTVFMiLCJQQUNLQUdFX05PVF9FWElTVFMiLCJQQUNLQUdFX05PVF9GT1VORCIsIkFETUlOX1JPTEVfTk9UX0ZPVU5EIiwiQURNSU5fUk9MRV9OT1RfRVhJU1RTIiwiVklQX1RJRVJfQUxSRUFEWV9FWElTVFMiLCJWSVBfVElFUl9OT1RfRVhJU1RTIiwiVklQX1RJRVJTX05PVF9FWElTVFMiLCJNQVhfTElNSVRfTEVTU19USEFOX01JTl9MSU1JVCIsIk1JTl9MSU1JVF9HUkVBVEVSX1RIQU5fTUFYX0xJTUlUIiwiSU5WQUxJRF9XSEVFTF9ESVZJU0lPTl9JRCIsIlVTRVJfTElNSVRTX0RPRVNfTk9UX0VYSVNUUyIsIkZBVUNFVF9TRVRUSU5HU19ET0VTX05PVF9FWElTVFMiLCJXSVRIRFJBV0FMX0xJTUlUU19TRVRUSU5HU19ET0VTX05PVF9FWElTVFMiLCJJTlZBTElEX1RJQ0tFVF9JRCIsIklOVkFMSURfVElDS0VUX1NUQVRVUyIsIk5PX1RJQ0tFVFNfRk9VTkQiLCJHTE9CQUxfR1JPVVBfRVhJU1QiLCJHUk9VUF9OQU1FX0FMUkVBRFlfRVhJU1QiLCJDSEFUX0dST1VQX05PVF9GT1VORCIsIkNIQVRfUkFJTl9BTFJFQURZX0FDVElWRSIsIkNIQVRfUkFJTl9OT1RfRk9VTkQiLCJDSEFUX1JVTEVfTk9UX0ZPVU5EIiwiT0ZGRU5TSVZFX1dPUkRfRVhJU1QiLCJPRkZFTlNJVkVfV09SRF9OT1RfRk9VTkQiLCJJTlZBTElEX0FSUkFZIiwiU09DSUFMX01FRElBX0xJTktfRE9FU19OT1RfRVhJU1RTIiwiS0lMTF9TV0lUQ0hfRE9FU19OT1RfRVhJU1RTIiwiREVQT1NJVF9MSU1JVFNfRE9FU19OT1RfRVhJU1RTIiwiTk9fR0xPQkFMX1NFVFRJTkdTX0VYSVNUUyIsIlNJVEVfSU5GT1JNQVRJT05fRE9FU19OT1RfRVhJU1RTIiwiQ01TX0VYSVNUUyIsIlNUQVRFX05PVF9GT1VORCIsIkFHRV9JU19CRUxPVzE4IiwiQk9OVVNfQ09ERV9BTFJFQURZX0VYSVNUIiwiR0FNRV9DQVRFR09SWV9FWElTVFMiLCJQRVJDRU5UQUdFX0lTX0JFTE9XMTAwIiwiUEFZTUVOVF9GQUlMRUQiLCJQUk9WSURFUl9JTkFDVElWRSIsIkRFRkFVTFRfR0FNRV9DQVRFR09SWV9OT1RfRk9VTkQiLCJJTlZBTElEX1NFR01FTlRfSUQiLCJDQU1QQUlHTl9OT1RfRk9VTkQiLCJJTlZBTElEX0NBTVBBSUdOX1NUQVRVUyIsIkNBTVBBSUdOX05PVF9BQ1RJVkUiLCJTRUdNRU5UU19BTFJFQURZX0VYSVNUUyIsIlJFUE9SVF9OT1RfRk9VTkQiLCJJTlZBTElEX0lOUFVUIiwiUkVRVUlSRURfQUREUkVTU19ERVRBSUxTIiwiUkVRVUlSRURfRklFTEQiLCJJTlZBTElEX0NBUkRfREVUQUlMUyIsIlVTRVJfV0lUSERSQVdBTF9MSU1JVF9OT1RfRk9VTkQiLCJNSVNTSU5HX0NVU1RPTUVSX0lEIiwiVU5TVVBQT1JURURfUEFZTUVOVF9QUk9WSURFUiIsIkdMT0JBTF9TRVRUSU5HX05PVF9GT1VORCIsIkFDQ09VTlRfU1VTUEVOREVEIiwiQUNDT1VOVF9VTkRFUl9SRVZJRVciLCJBQ0NPVU5UX0NMT1NFRCIsIlRBR19OT1RfRk9VTkQiLCJDQVRFR09SWV9OT1RfRk9VTkQiLCJDQVRFR09SWV9FWElTVFMiLCJTVUJDQVRFR09SWV9OT1RfRk9VTkQiLCJTVUJDQVRFR09SWV9FWElTVFMiLCJQUk9EVUNUX05PVF9GT1VORCIsIlBST0RVQ1RfRVhJU1RTIiwiRU5RVUlSWV9OT1RfRk9VTkQiLCJGUkFOQ0hJU0VfTE9DQVRJT05fTk9UX0ZPVU5EIiwiSU5WQUxJRF9TVEFURSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvZXJyb3JDb2Rlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5leHBvcnQgY29uc3QgRXJyb3JzID0ge1xuICBESVZJU0lPTlNfTk9UX0ZPVU5EOiB7XG4gIG5hbWU6IFwiRElWSVNJT05TX05PVF9GT1VORFwiLFxuICBtZXNzYWdlOiBcIk9uZSBvciBtb3JlIGRpdmlzaW9ucyBub3QgZm91bmRcIixcbiAgZXhwbGFuYXRpb246XG4gICAgXCJUaGUgcHJvdmlkZWQgd2hlZWxEaXZpc2lvbklkcyBkbyBub3QgZXhpc3Qgb3IgY291bGQgbm90IGJlIHJldHJpZXZlZCBmcm9tIHRoZSBkYXRhYmFzZS5cIixcbiAgY29kZTogMzAwMSxcbiAgaHR0cFN0YXR1c0NvZGU6IFN0YXR1c0NvZGVzLk5PVF9GT1VORCxcbn0sXG5cbklOVkFMSURfUFJJT1JJVFlfU1VNOiB7XG4gIG5hbWU6IFwiSU5WQUxJRF9QUklPUklUWV9TVU1cIixcbiAgbWVzc2FnZTogXCJJbnZhbGlkIHByaW9yaXR5IGRpc3RyaWJ1dGlvblwiLFxuICBleHBsYW5hdGlvbjpcbiAgICBcIlRoZSB0b3RhbCBzdW0gb2YgcHJpb3JpdGllcyBhY3Jvc3MgYWxsIGRpdmlzaW9ucyBtdXN0IGJlIGV4YWN0bHkgMTAwIGJlZm9yZSB1cGRhdGluZy5cIixcbiAgY29kZTogMzAwMixcbiAgaHR0cFN0YXR1c0NvZGU6IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULFxufSxcblxuUFJJT1JJVFlfVkFMVUVfSU5WQUxJRDoge1xuICBuYW1lOiBcIlBSSU9SSVRZX1ZBTFVFX0lOVkFMSURcIixcbiAgbWVzc2FnZTogXCJJbnZhbGlkIHByaW9yaXR5IHZhbHVlIGRldGVjdGVkXCIsXG4gIGV4cGxhbmF0aW9uOlxuICAgIFwiRWFjaCBwcmlvcml0eSB2YWx1ZSBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyIGFuZCBjYW5ub3QgYmUgbGVzcyB0aGFuIDAgb3IgZ3JlYXRlciB0aGFuIDEwMC5cIixcbiAgY29kZTogMzAwMyxcbiAgaHR0cFN0YXR1c0NvZGU6IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULFxufSxcblxuRElWSVNJT05fVVBEQVRFX0ZBSUxFRDoge1xuICBuYW1lOiBcIkRJVklTSU9OX1VQREFURV9GQUlMRURcIixcbiAgbWVzc2FnZTogXCJGYWlsZWQgdG8gdXBkYXRlIGRpdmlzaW9uIHByaW9yaXRpZXNcIixcbiAgZXhwbGFuYXRpb246XG4gICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHVwZGF0aW5nIHRoZSBwcmlvcml0aWVzIG9mIHRoZSBkaXZpc2lvbnMgaW4gdGhlIGRhdGFiYXNlLlwiLFxuICBjb2RlOiAzMDA0LFxuICBodHRwU3RhdHVzQ29kZTogU3RhdHVzQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxufSxcblxuTk9fRElWSVNJT05TX1BST1ZJREVEOiB7XG4gIG5hbWU6IFwiTk9fRElWSVNJT05TX1BST1ZJREVEXCIsXG4gIG1lc3NhZ2U6IFwiTm8gZGl2aXNpb25zIHByb3ZpZGVkIGZvciB1cGRhdGVcIixcbiAgZXhwbGFuYXRpb246XG4gICAgXCJUaGUgcmVxdWVzdCBib2R5IG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgZGl2aXNpb24gdG8gdXBkYXRlIHByaW9yaXRpZXMgZm9yLlwiLFxuICBjb2RlOiAzMDA1LFxuICBodHRwU3RhdHVzQ29kZTogU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsXG59XG4sXG5JTlZBTElEX1JFUVVFU1RfQk9EWToge1xuICBuYW1lOiBcIklOVkFMSURfUkVRVUVTVF9CT0RZXCIsXG4gIG1lc3NhZ2U6IFwiSW52YWxpZCByZXF1ZXN0IGJvZHlcIixcbiAgZXhwbGFuYXRpb246XG4gICAgXCJUaGUgcHJvdmlkZWQgcmVxdWVzdCBib2R5IGlzIG1hbGZvcm1lZCBvciBtaXNzaW5nIHJlcXVpcmVkIGZpZWxkcy4gUGxlYXNlIGVuc3VyZSBhbGwgcmVxdWlyZWQgcGFyYW1ldGVycyBhcmUgY29ycmVjdGx5IHByb3ZpZGVkIGFuZCBmb3JtYXR0ZWQuXCIsXG4gIGNvZGU6IDEwMDMsXG4gIGh0dHBTdGF0dXNDb2RlOiBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCxcbn0sXG4gIFRPRE9fTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJUT0RPX05PVF9GT1VORFwiLFxuICAgIG1lc3NhZ2U6IFwiVE9ETyBpdGVtIG5vdCBmb3VuZFwiLFxuICAgIGV4cGxhbmF0aW9uOiBcIlRoZSByZXF1ZXN0ZWQgVE9ETyBpdGVtIGNvdWxkIG5vdCBiZSBmb3VuZCBpbiB0aGUgZGF0YWJhc2UuXCIsXG4gICAgY29kZTogMTAwMSxcbiAgICBodHRwU3RhdHVzQ29kZTogU3RhdHVzQ29kZXMuTk9UX0ZPVU5ELFxuICB9LFxuICAgIFBPU1RBTF9DT0RFX1NFVFRJTkdfTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJQT1NUQUxfQ09ERV9TRVRUSU5HX05PVF9GT1VORFwiLFxuICAgIG1lc3NhZ2U6IFwiUG9zdGFsIGNvZGUgc2V0dGluZ3Mgbm8gZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjogXCJUaGUgcmVxdWVzdGVkIHBvc3RhbCBjb2RlIGNvdWxkIG5vdCBiZSBmb3VuZCBpbiB0aGUgZGF0YWJhc2UuXCIsXG4gICAgY29kZTogMTAwMSxcbiAgICBodHRwU3RhdHVzQ29kZTogU3RhdHVzQ29kZXMuTk9UX0ZPVU5ELFxuICB9LFxuICBBRE1JTl9ST0xFX0VYSVNUUzoge1xuICAgIG5hbWU6IFwiQWRtaW5Sb2xlRXhpc3RzXCIsXG4gICAgbWVzc2FnZTogXCJFaXRoZXIgbGV2ZWwgUm9sZSBvciBuYW1lIFJvbGUgQWxyZWFkeSBFeGlzdHNcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiVGhlIHJlc3BvbnNlIGRhdGEgc3RydWN0dXJlIGRvZXMgbm90IG1hdGNoIHRoZSBleHBlY3RlZCBzY2hlbWEuXCIsXG4gICAgY29kZTogMTAwMixcbiAgICBodHRwU3RhdHVzQ29kZTogU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsXG4gIH0sXG4gIE1JU1NJTkdfUkVRVUlSRURfUEFSQU1FVEVSOiB7XG4gIG5hbWU6IFwiTWlzc2luZ1JlcXVpcmVkUGFyYW1ldGVyXCIsXG4gIG1lc3NhZ2U6IFwiTWlzc2luZyBSZXF1aXJlZCBQYXJhbWV0ZXJcIixcbiAgZXhwbGFuYXRpb246XG4gICAgXCJQbGVhc2UgZW5zdXJlIGFsbCByZXF1aXJlZCBwYXJhbWV0ZXJzIGFyZSBwcm92aWRlZCBhbmQgZm9ybWF0dGVkIGNvcnJlY3RseS5cIixcbiAgY29kZTogMTAwMyxcbiAgaHR0cFN0YXR1c0NvZGU6IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULFxuIH0sXG4gIElOVkFMSURfR0FNQkxJTkdfTElNSVQ6IHtcbiAgICBuYW1lOiBcIklOVkFMSURfR0FNQkxJTkdfTElNSVRcIixcbiAgICBtZXNzYWdlOiBcIkludmFsaWQgZ2FtYmxpbmcgbGltaXQgaGllcmFyY2h5XCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIk1vbnRobHkgbGltaXQgbXVzdCBiZSBncmVhdGVyIHRoYW4gV2Vla2x5LCBhbmQgV2Vla2x5IG11c3QgYmUgZ3JlYXRlciB0aGFuIERhaWx5LlwiLFxuICAgIGNvZGU6IDIwMDEsXG4gICAgaHR0cFN0YXR1c0NvZGU6IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULFxuICB9LFxuICBSRVFVRVNUX1ZBTElEQVRJT05fRVJST1I6IHtcbiAgICBuYW1lOiBcIlJlcXVlc3RWYWxpZGF0aW9uRXJyb3JcIixcbiAgICBtZXNzYWdlOiBcIlJlcXVlc3QgVmFsaWRhdGlvbiBFcnJvclwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJUaGUgcmVzcG9uc2UgZGF0YSBzdHJ1Y3R1cmUgZG9lcyBub3QgbWF0Y2ggdGhlIGV4cGVjdGVkIHNjaGVtYS5cIixcbiAgICBjb2RlOiAxMDAyLFxuICAgIGh0dHBTdGF0dXNDb2RlOiBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCxcbiAgfSxcbiAgSU5WQUxJRF9QT1NUQUxfQ09ERV9CT0RZOiB7XG4gICAgbmFtZTogXCJJTlZBTElEIFBPU1RBTCBDT0RFIEJPRFlcIixcbiAgICBtZXNzYWdlOlxuICAgICAgXCJSZXF1aXJlZCBmaWVsZHMgZ2NDb2luLCBzY0NvaW4sIGFuZCBwb3N0YWxDb2RlVmFsaWRUaWxsIGFyZSBtaXNzaW5nIG9yIGludmFsaWQuXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFsbCBvZiB0aGUgZm9sbG93aW5nIGZpZWxkcyBhcmUgcmVxdWlyZWQ6IGdjQ29pbiwgc2NDb2luLCBhbmQgcG9zdGFsQ29kZVZhbGlkVGlsbC4gUGxlYXNlIGVuc3VyZSB0aGF0IGFsbCBmaWVsZHMgYXJlIHByb3ZpZGVkIGFuZCB2YWxpZC5cIixcbiAgICBjb2RlOiAzMDAzLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIC8vIGVycm9yQ29uc3RhbnRzLmpzXG4gIElOVkFMSURfU1RBVFVTOiB7XG4gICAgbmFtZTogXCJJTlZBTElEX1NUQVRVU1wiLFxuICAgIG1lc3NhZ2U6IFwiSW52YWxpZCBzdGF0dXMgdmFsdWUgcHJvdmlkZWRcIixcbiAgICBleHBsYW5hdGlvbjogXCJUaGUgc3RhdHVzIG11c3QgYmUgZWl0aGVyIEFQUFJPVkVEIG9yIFJFSkVDVEVELlwiLFxuICAgIGNvZGU6IDEwMDEsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgRU1BSUxfU0VSVklDRV9GQUlMRUQ6IHtcbiAgICBuYW1lOiBcIkVNQUlMX1NFUlZJQ0VfRkFJTEVEXCIsXG4gICAgbWVzc2FnZTogXCJFbWFpbCBzZXJ2aWNlIHVuYXZhaWxhYmxlXCIsXG4gICAgZXhwbGFuYXRpb246IFwiRHVlIHRvIGEgc2VydmljZSBpc3N1ZSwgdGhlIGVtYWlsIGNvdWxkIG5vdCBiZSBzZW50LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDEwMDEsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDUwMCxcbiAgfSxcbiAgUE9TVEFMX0NPREVfTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJQT1NUQUxfQ09ERV9OT1RfRk9VTkRcIixcbiAgICBtZXNzYWdlOiBcIlBvc3RhbCBjb2RlIHJlcXVlc3Qgbm90IGZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246IFwiTm8gcG9zdGFsIGNvZGUgcmVxdWVzdCBleGlzdHMgd2l0aCB0aGUgcHJvdmlkZWQgSUQuXCIsXG4gICAgY29kZTogMTAwMixcbiAgICBodHRwU3RhdHVzQ29kZTogNDA0LFxuICB9LFxuICBTRUxGX0VYQ0xVU0lPTl9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIlNFTEZfRVhDTFVTSU9OX05PVF9GT1VORFwiLFxuICAgIG1lc3NhZ2U6IFwiU2VsZi1leGNsdXNpb24gcmVjb3JkIG5vdCBmb3VuZFwiLFxuICAgIGV4cGxhbmF0aW9uOiBcIlRoZSByZXF1ZXN0ZWQgc2VsZi1leGNsdXNpb24gcmVjb3JkIGNvdWxkIG5vdCBiZSBmb3VuZCBpbiB0aGUgZGF0YWJhc2UuXCIsXG4gICAgY29kZTogMjAwMSxcbiAgICBodHRwU3RhdHVzQ29kZTogU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsXG4gIH0sXG4gIFNFTEZfRVhDTFVTSU9OX0VYSVNUUzoge1xuICAgIG5hbWU6IFwiU0VMRl9FWENMVVNJT05fRVhJU1RTXCIsXG4gICAgbWVzc2FnZTogXCJBY3RpdmUgc2VsZi1leGNsdXNpb24gZXhpc3RzXCIsXG4gICAgZXhwbGFuYXRpb246IFwiVGhlIHVzZXIgaGFzIGFuIGFjdGl2ZSBzZWxmLWV4Y2x1c2lvblwiLFxuICAgIGNvZGU6IDIwMDIsXG4gICAgaHR0cFN0YXR1c0NvZGU6IFN0YXR1c0NvZGVzLkZPUkJJRERFTixcbiAgfSxcbiAgSU5WQUxJRF9TVEFUVVNfVFJBTlNJVElPTjoge1xuICAgIG5hbWU6IFwiSU5WQUxJRF9TVEFUVVNfVFJBTlNJVElPTlwiLFxuICAgIG1lc3NhZ2U6IFwiSW52YWxpZCBzdGF0dXMgdHJhbnNpdGlvblwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJUaGUgcG9zdGFsIGNvZGUgcmVxdWVzdCBjYW4gb25seSBiZSBhcHByb3ZlZCBvciByZWplY3RlZCBpZiBpdCBpcyBpbiBQRU5ESU5HIHN0YXR1cy5cIixcbiAgICBjb2RlOiAxMDAzLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIElOVkFMSURfRVhQSVJZX1RJTUU6IHtcbiAgICBuYW1lOiBcIklOVkFMSURfRVhQSVJZX1RJTUVcIixcbiAgICBtZXNzYWdlOiBcIlJlcXVlc3QgVmFsaWRhdGlvbiBFcnJvclwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJpbnZhbGlkIGV4cGlyeSB0aW1lIGRhdGUgdGltZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBjdXJyZW50IHRpbWVcIixcbiAgICBjb2RlOiAxMDAyLFxuICAgIGh0dHBTdGF0dXNDb2RlOiBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCxcbiAgfSxcbiAgTk9fRklFTERTX1RPX1VQREFURToge1xuICAgIG5hbWU6IFwiTk9fRklFTERTX1RPX1VQREFURVwiLFxuICAgIG1lc3NhZ2U6IFwiUmVxdWVzdCBWYWxpZGF0aW9uIEVycm9yXCIsXG4gICAgZXhwbGFuYXRpb246IFwiaW52YWxpZCByZXF1ZXN0IGJvZHkgbm8gZmllbGQgaXMgZm91bmQgdG8gdXBkYXRlXCIsXG4gICAgY29kZTogMTAwMixcbiAgICBodHRwU3RhdHVzQ29kZTogU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsXG4gIH0sXG4gIERVUExJQ0FURV9DT0RFOiB7XG4gICAgbmFtZTogXCJEVVBMSUNBVEVfQ09ERVwiLFxuICAgIG1lc3NhZ2U6IFwiZHVwbGljYXRlIGJvbnVzIGRyb3AgY29kZVwiLFxuICAgIGV4cGxhbmF0aW9uOiBcIkEgRHJvcEJvbnVzIHdpdGggdGhpcyBjb2RlIGFscmVhZHkgZXhpc3RzLlwiLFxuICAgIGNvZGU6IDEwMDIsXG4gICAgaHR0cFN0YXR1c0NvZGU6IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULFxuICB9LFxuICBSRVNQT05TRV9WQUxJREFUSU9OX0VSUk9SOiB7XG4gICAgbmFtZTogXCJSZXNwb25zZVZhbGlkYXRpb25FcnJvclwiLFxuICAgIG1lc3NhZ2U6IFwiUmVzcG9uc2UgVmFsaWRhdGlvbiBFcnJvclwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJQbGVhc2UgZW5zdXJlIGFsbCByZXF1aXJlZCBwYXJhbWV0ZXJzIGFyZSBwcm92aWRlZCBhbmQgZm9ybWF0dGVkIGNvcnJlY3RseS5cIixcbiAgICBjb2RlOiAxMDAzLFxuICAgIGh0dHBTdGF0dXNDb2RlOiBTdGF0dXNDb2Rlcy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gIH0sXG4gIEJPTlVTX1VQREFURV9GQUlMRUQ6IHtcbiAgICBuYW1lOiBcIkJPTlVTX1VQREFURV9GQUlMRURcIixcbiAgICBtZXNzYWdlOiBcIlJlc3BvbnNlIFZhbGlkYXRpb24gRXJyb3JcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiUGxlYXNlIGVuc3VyZSBhbGwgcmVxdWlyZWQgcGFyYW1ldGVycyBhcmUgcHJvdmlkZWQgYW5kIGZvcm1hdHRlZCBjb3JyZWN0bHkuXCIsXG4gICAgY29kZTogMTAwMyxcbiAgICBodHRwU3RhdHVzQ29kZTogU3RhdHVzQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICB9LFxuICBJTlRFUk5BTF9FUlJPUjoge1xuICAgIG5hbWU6IFwiSW50ZXJuYWxTZXJ2ZXJFcnJvclwiLFxuICAgIG1lc3NhZ2U6IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMTAwNCxcbiAgICBodHRwU3RhdHVzQ29kZTogU3RhdHVzQ29kZXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICB9LFxuICBSRVFVRVNUX0lOUFVUX1ZBTElEQVRJT05fRVJST1I6IHtcbiAgICBuYW1lOiBcIlJlcXVlc3RJbnB1dFZhbGlkYXRpb25FcnJvclwiLFxuICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGNoZWNrIHRoZSByZXF1ZXN0IGRhdGFcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDAxLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIERJVklTSU9OU19OT1RfRk9VTkQ6IHtcbiAgbmFtZTogXCJESVZJU0lPTlNfTk9UX0ZPVU5EXCIsXG4gIG1lc3NhZ2U6IFwiT25lIG9yIG1vcmUgZGl2aXNpb25zIG5vdCBmb3VuZFwiLFxuICBleHBsYW5hdGlvbjpcbiAgICBcIlRoZSBwcm92aWRlZCB3aGVlbERpdmlzaW9uSWRzIGRvIG5vdCBleGlzdCBvciBjb3VsZCBub3QgYmUgcmV0cmlldmVkIGZyb20gdGhlIGRhdGFiYXNlLlwiLFxuICBjb2RlOiAzMDAxLFxuICBodHRwU3RhdHVzQ29kZTogU3RhdHVzQ29kZXMuTk9UX0ZPVU5ELFxufSxcblxuSU5WQUxJRF9QUklPUklUWV9TVU06IHtcbiAgbmFtZTogXCJJTlZBTElEX1BSSU9SSVRZX1NVTVwiLFxuICBtZXNzYWdlOiBcIkludmFsaWQgcHJpb3JpdHkgZGlzdHJpYnV0aW9uXCIsXG4gIGV4cGxhbmF0aW9uOlxuICAgIFwiVGhlIHRvdGFsIHN1bSBvZiBwcmlvcml0aWVzIGFjcm9zcyBhbGwgZGl2aXNpb25zIG11c3QgYmUgZXhhY3RseSAxMDAgYmVmb3JlIHVwZGF0aW5nLlwiLFxuICBjb2RlOiAzMDAyLFxuICBodHRwU3RhdHVzQ29kZTogU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsXG59LFxuXG5QUklPUklUWV9WQUxVRV9JTlZBTElEOiB7XG4gIG5hbWU6IFwiUFJJT1JJVFlfVkFMVUVfSU5WQUxJRFwiLFxuICBtZXNzYWdlOiBcIkludmFsaWQgcHJpb3JpdHkgdmFsdWUgZGV0ZWN0ZWRcIixcbiAgZXhwbGFuYXRpb246XG4gICAgXCJFYWNoIHByaW9yaXR5IHZhbHVlIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIgYW5kIGNhbm5vdCBiZSBsZXNzIHRoYW4gMCBvciBncmVhdGVyIHRoYW4gMTAwLlwiLFxuICBjb2RlOiAzMDAzLFxuICBodHRwU3RhdHVzQ29kZTogU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsXG59LFxuXG5ESVZJU0lPTl9VUERBVEVfRkFJTEVEOiB7XG4gIG5hbWU6IFwiRElWSVNJT05fVVBEQVRFX0ZBSUxFRFwiLFxuICBtZXNzYWdlOiBcIkZhaWxlZCB0byB1cGRhdGUgZGl2aXNpb24gcHJpb3JpdGllc1wiLFxuICBleHBsYW5hdGlvbjpcbiAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgdXBkYXRpbmcgdGhlIHByaW9yaXRpZXMgb2YgdGhlIGRpdmlzaW9ucyBpbiB0aGUgZGF0YWJhc2UuXCIsXG4gIGNvZGU6IDMwMDQsXG4gIGh0dHBTdGF0dXNDb2RlOiBTdGF0dXNDb2Rlcy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG59LFxuXG5OT19ESVZJU0lPTlNfUFJPVklERUQ6IHtcbiAgbmFtZTogXCJOT19ESVZJU0lPTlNfUFJPVklERURcIixcbiAgbWVzc2FnZTogXCJObyBkaXZpc2lvbnMgcHJvdmlkZWQgZm9yIHVwZGF0ZVwiLFxuICBleHBsYW5hdGlvbjpcbiAgICBcIlRoZSByZXF1ZXN0IGJvZHkgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBkaXZpc2lvbiB0byB1cGRhdGUgcHJpb3JpdGllcyBmb3IuXCIsXG4gIGNvZGU6IDMwMDUsXG4gIGh0dHBTdGF0dXNDb2RlOiBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCxcbn1cbixcbklOVkFMSURfUkVRVUVTVF9CT0RZOiB7XG4gIG5hbWU6IFwiSU5WQUxJRF9SRVFVRVNUX0JPRFlcIixcbiAgbWVzc2FnZTogXCJJbnZhbGlkIHJlcXVlc3QgYm9keVwiLFxuICBleHBsYW5hdGlvbjpcbiAgICBcIlRoZSBwcm92aWRlZCByZXF1ZXN0IGJvZHkgaXMgbWFsZm9ybWVkIG9yIG1pc3NpbmcgcmVxdWlyZWQgZmllbGRzLiBQbGVhc2UgZW5zdXJlIGFsbCByZXF1aXJlZCBwYXJhbWV0ZXJzIGFyZSBjb3JyZWN0bHkgcHJvdmlkZWQgYW5kIGZvcm1hdHRlZC5cIixcbiAgY29kZTogMTAwMyxcbiAgaHR0cFN0YXR1c0NvZGU6IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULFxufVxuLFxuICBSRVNQT05TRV9JTlBVVF9WQUxJREFUSU9OX0VSUk9SOiB7XG4gICAgbmFtZTogXCJSZXNwb25zZUlucHV0VmFsaWRhdGlvbkVycm9yXCIsXG4gICAgbWVzc2FnZTogXCJSZXNwb25zZSB2YWxpZGF0aW9uIGZhaWxlZCBwbGVhc2UgcmVmZXIganNvbiBzY2hlbWEgb2YgcmVzcG9uc2VcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDAyLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIElOU1VGRklDSUVOVF9GVU5EUzoge1xuICAgIG5hbWU6IFwiSW5zdWZmaWNpZW50RnVuZEVycm9yXCIsXG4gICAgbWVzc2FnZTogXCJVc2VyIGRvZXMgbm90IGhhdmUgZW5vdWdoIGJhbGFuY2VcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDAyLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIElOVkFMSURfRElSRUNUSU9OOiB7XG4gICAgbmFtZTogXCJJTlZBTElEIERJUkVDVElPTlNcIixcbiAgICBtZXNzYWdlOiBcIlVzZXIgZG9lcyBub3QgaGF2ZSBlbm91Z2ggYmFsYW5jZVwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwMDIsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgSU5WQUxJRF9CQU5ORVJfVFlQRToge1xuICAgIG5hbWU6IFwiSU5WQUxJRCBCQU5ORVIgVFlQRVwiLFxuICAgIG1lc3NhZ2U6IFwiYmFubmVyIHR5cGUgaXMgaW52YWxpZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwMDIsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgV0FMTEVUX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiV2FsbGV0Tm90Rm91ZEVycm9yXCIsXG4gICAgbWVzc2FnZTogXCJJbnZhbGlkIHdhbGxldCBJZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwMDIsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgSU5URVJOQUxfU0VSVkVSX0VSUk9SOiB7XG4gICAgbmFtZTogXCJJbnRlcm5hbFNlcnZlckVycm9yXCIsXG4gICAgbWVzc2FnZTogXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDAzLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA1MDAsXG4gIH0sXG4gIElOVkFMSURfVE9LRU46IHtcbiAgICBuYW1lOiBcIkludmFsaWRUb2tlblwiLFxuICAgIG1lc3NhZ2U6IFwiRWl0aGVyIHJlc2V0IHBhc3N3b3JkIHRva2VuIG5vdCBwYXNzZWQgb3IgaXQgaXMgZXhwaXJlZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwMjUsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMSxcbiAgfSxcbiAgUkVTRVRfUEFTU1dPUkRfVE9LRU46IHtcbiAgICBuYW1lOiBcIlJlc2V0UGFzc3dvcmRcIixcbiAgICBtZXNzYWdlOiBcIkVpdGhlciByZXNldCBwYXNzd29yZCB0b2tlbiBub3QgcGFzc2VkIG9yIGl0IGlzIGV4cGlyZWRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDI1LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDEsXG4gIH0sXG4gIFVTRVJfTk9UX0VYSVNUUzoge1xuICAgIG5hbWU6IFwiVXNlck5vdEV4aXN0c1wiLFxuICAgIG1lc3NhZ2U6IFwiVXNlciBkb2VzIG5vdCBleGlzdHNcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDA1LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIFNPTUVUSElOR19XRU5UX1dST05HOiB7XG4gICAgbmFtZTogXCJTb21ldGhpbmdXZW50V3JvbmdcIixcbiAgICBtZXNzYWdlOiBcIlNvbWV0aGluZyBXZW50IFdyb25nXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzAwNixcbiAgICBodHRwU3RhdHVzQ29kZTogNDAzLFxuICB9LFxuICBBRE1JTl9BTFJFQURZX0VYSVNUUzoge1xuICAgIG5hbWU6IFwiQWRtaW5BbHJlYWR5RXhpc3RzXCIsXG4gICAgbWVzc2FnZTogXCJBZG1pbiBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoaXMgZW1haWwgb3IgdXNlcm5hbWVcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDA3LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIEFGRklMSUFURVNfTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJBZmZpbGlhdGVzTm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIkFmZmlsaWF0ZXMgbm90IGZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzAwOCxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBUUkFOU0FDVElPTl9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIlRyYW5zYWN0aW9uTm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIlRyYW5zYWN0aW9uIG5vdCBmb3VuZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwMDksXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgICAgIEFERFJFU1NfTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJBZGRyZXNzTm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIkJpbGxpbmcgYWRkcmVzcyBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjogXCJUaGUgcmVxdWVzdGVkIGJpbGxpbmcgYWRkcmVzcyBkb2VzIG5vdCBleGlzdCBvciBkb2VzIG5vdCBiZWxvbmcgdG8gdGhpcyB1c2VyLlwiLFxuICAgIGNvZGU6IDMyMDAsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwNCxcbiAgfSxcbiAgQ09VTlRSWV9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIkNvdW50cnlOb3RGb3VuZFwiLFxuICAgIG1lc3NhZ2U6IFwiQ291bnRyeSBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDEwLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIFRFTkFOVF9HQU1FX0NBVEVHT1JZX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiVGVuYW50R2FtZUNhdGVnb3J5Tm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIlRlbmFudCBHYW1lIENhdGVnb3J5IG5vdCBmb3VuZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwMTEsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgQ0FURUdPUllfR0FNRV9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIkNhdGVnb3J5R2FtZU5vdEZvdW5kXCIsXG4gICAgbWVzc2FnZTogXCJDYXRlZ29yeSBHYW1lcyBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDEzLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIFRFTkFOVF9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIlRlbmFudE5vdEZvdW5kXCIsXG4gICAgbWVzc2FnZTogXCJUZW5hbnQgbm90IGZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBURU5BTlRfUkVHSVNUUkFUSU9OX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiVGVuYW50UmVnaXN0cmF0aW9uTm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIlRlbmFudCBSZWdpc3RyYXRpb24gZmllbGRzIG5vdCBmb3VuZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwMTUsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgQ01TX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiQ21zTm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIkNtcyBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAxLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIEJPTlVTX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiQm9udXNOb3RGb3VuZFwiLFxuICAgIG1lc3NhZ2U6IFwiQm9udXMgbm90IGZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzAxNyxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBVTl9BVVRIT1JJWkU6IHtcbiAgICBuYW1lOiBcIlVuQXV0aG9yaXplXCIsXG4gICAgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWQgXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzAxOCxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAzLFxuICB9LFxuICBBRE1JTl9JTl9BQ1RJVkU6IHtcbiAgICBuYW1lOiBcIkFkbWluSW5BY3RpdmVcIixcbiAgICBtZXNzYWdlOiBcIkFkbWluIEluYWN0aXZlXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzA0MyxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAzLFxuICB9LFxuICBVU0VSX05BTUVfRVhJU1RTOiB7XG4gICAgbmFtZTogXCJVc2VyTmFtZUV4aXN0c1wiLFxuICAgIG1lc3NhZ2U6IFwiVXNlcm5hbWUgYWxyZWFkeSBleGlzdHNcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDIwLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIFVTRVJfQUxSRUFEWV9FWElTVFM6IHtcbiAgICBuYW1lOiBcIlVzZXJBbHJlYWR5RXhpc3RzXCIsXG4gICAgbWVzc2FnZTogXCJVc2VyIGFscmVhZHkgZXhpc3RzXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzAyMSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBDVVJSRU5DWV9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIkN1cnJlbmN5Tm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIkN1cnJlbmN5IG5vdCBmb3VuZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwMjIsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgSU5WQUxJRF9DT0lOX1RZUEU6IHtcbiAgICBuYW1lOiBcIklOVkFMSURfQ09JTl9UWVBFXCIsXG4gICAgbWVzc2FnZTogXCJpbnZhbGlkIGNvaW4gdHlwZVwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJpbnZhbGlkIGNvaW4gdHlwZSBwbGVhc2UgY2hlY2sgYWdhaW4gY29pbiB0eXBlIG11c3QgYmUgR0Mgb3IgQlNDXCIsXG4gICAgY29kZTogMzAyMixcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBMQU5HVUFHRV9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIkxhbmd1YWdlTm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIkxhbmd1YWdlIG5vdCBmb3VuZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDEsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgR0FNRV9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIkdhbWVOb3RGb3VuZFwiLFxuICAgIG1lc3NhZ2U6IFwiR2FtZSBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDI0LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIEVNQUlMX0FMUkVBRFlfRVhJU1RTOiB7XG4gICAgbmFtZTogXCJFbWFpbEFscmVhZHlFeGlzdHNcIixcbiAgICBtZXNzYWdlOiBcIkVtYWlsIGFscmVhZHkgZXhpc3RzXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzAyNixcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBMSU1JVFNfRVJST1I6IHtcbiAgICBuYW1lOiBcIkxpbWl0c0Vycm9yXCIsXG4gICAgbWVzc2FnZTogXCJEYXlzIGZvciB0YWtlIGEgYnJlYWsgY2FuIGJlIGluIHJhbmdlIDEgdG8gMzBcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDI3LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIFNFU1NJT05fVElNRV9MSU1JVDoge1xuICAgIG5hbWU6IFwiU2Vzc2lvblRpbWVMaW1pdFwiLFxuICAgIG1lc3NhZ2U6IFwiU2Vzc2lvbiBUaW1lIGNhbiBiZSBzZXQgYmV0d2VlbiAxIHRvIDI0XCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzAyOCxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBET0NVTUVOVF9MQUJFTFNfTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJEb2N1bWVudExhYmVsc05vdEZvdW5kXCIsXG4gICAgbWVzc2FnZTogXCJEb2N1bWVudCBMYWJlbHMgbm90IGZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzAyOSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBVU0VSX0RPQ1VNRU5UU19OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIlVzZXJEb2N1bWVudHNOb3RGb3VuZFwiLFxuICAgIG1lc3NhZ2U6IFwiVXNlciBkb2N1bWVudCBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDMwLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIEdBTUVfRVhJU1RTOiB7XG4gICAgbmFtZTogXCJHYW1lRXhpc3RzXCIsXG4gICAgbWVzc2FnZTogXCJHYW1lIGFscmVhZHkgZXhpc3RzXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzAzMSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBDQVNJTk9fVFJBTlNBQ1RJT05TX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiQ2FzaW5vVHJhbnNhY3Rpb25zTm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIkNhc2lubyB0cmFuc2FjdGlvbnMgbm90IGZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzAzMixcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBCT05VU19BVkFJTF9FUlJPUjoge1xuICAgIG5hbWU6IFwiQm9udXNBdmFpbEVycm9yXCIsXG4gICAgbWVzc2FnZTogXCJCb251cyBjYW5ub3QgYmUgYWN0aXZhdGVkLCB0cnkgYWdhaW4gbGF0ZXJcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDMzLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIFRSQU5TQUNUSU9OX0hBTkRMRVJfRVJST1I6IHtcbiAgICBuYW1lOiBcIlRyYW5zYWN0aW9uSGFuZGxlckVycm9yXCIsXG4gICAgbWVzc2FnZTogXCJUcmFuc2FjdGlvbiBoYW5kbGVyIGVycm9yIFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwMzQsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgQ0FTSEJBQ0tfTEFQU0VEX0VSUk9SOiB7XG4gICAgbmFtZTogXCJDYXNoYmFja0xhcHNlZEVycm9yXCIsXG4gICAgbWVzc2FnZTogXCJQbGF5ZXIgZG9lcyBub3QgaGF2ZSBlbm91Z2ggbG9zc2VzIHRvIGdldCBjYXNoYmFja1wiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwMzUsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgQk9OVVNfQUxSRUFEWV9JU1NVRV9FUlJPUjoge1xuICAgIG5hbWU6IFwiQm9udXNBbHJlYWR5SXNzdWVFcnJvclwiLFxuICAgIG1lc3NhZ2U6IFwiU2FtZSBCb251cyBjYW5ub3QgYmUgaXNzdWVkIGFnYWluLlwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwMzYsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgVVNFUl9CT05VU19FUlJPUjoge1xuICAgIG5hbWU6IFwiVXNlckJvbnVzRXJyb3JcIixcbiAgICBtZXNzYWdlOiBcIkFjdGlvbiBjYW5ub3QgYmUgcGVyZm9ybWVkLCBib251cyBpcyBjbGFpbWVkIGJ5IHVzZXIgaXRzZWxmLlwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwMzcsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgQk9OVVNfREVMRVRFX0VSUk9SOiB7XG4gICAgbmFtZTogXCJCb251c0RlbGV0ZUVycm9yXCIsXG4gICAgbWVzc2FnZTpcbiAgICAgIFwiQm9udXMgaXMgYmVpbmcgdXNlZCBieSB1c2VyIG9yIGlzc3VlciBpcyBkaWZmZXJlbnQsIEJvbnVzIGNhbm5vdCBiZSBkZWxldGVkXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzAzOCxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBXSVRIRFJBV19SRVFVRVNUX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiV2l0aGRyYXdSZXF1ZXN0Tm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIldpdGhkcmF3YWwgcmVxdWVzdCBub3QgZm91bmQuXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzAzOSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBURU5BTlRfUkVHSVNUUkFUSU9OX05PVF9FWElTVFM6IHtcbiAgICBuYW1lOiBcIlRlbmFudFJlZ2lzdHJhdGlvbk5vdEV4aXN0c1wiLFxuICAgIG1lc3NhZ2U6IFwiVGVuYW50IFJlZ2lzdHJhdGlvbiBub3QgZXhpc3RzXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzAzMCxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBDUkVERU5USUFMU19OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIkNyZWRlbnRpYWxzTm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIkNyZWRlbnRpYWxzIE5vdCBmb3VuZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwNDEsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgQURNSU5fTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJBZG1pbk5vdEZvdW5kXCIsXG4gICAgbWVzc2FnZTogXCJBZG1pbiBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDQ0LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIElEX1JFUVVJUkVEOiB7XG4gICAgbmFtZTogXCJJZFJlcXVpcmVkXCIsXG4gICAgbWVzc2FnZTogXCJJZCByZXF1aXJlZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwNDUsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgQ0FOTk9UX0NSRUFURV9BRE1JTjoge1xuICAgIG5hbWU6IFwiQ2Fubm90Q3JlYXRlQWRtaW5cIixcbiAgICBtZXNzYWdlOiBcIkNhbm5vdCBDcmVhdGUgQWRtaW4gVXNlclwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwNDYsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgUEVSTUlTU0lPTl9ERU5JRUQ6IHtcbiAgICBuYW1lOiBcIlBlcm1pc3Npb25EZW5pZWRcIixcbiAgICBtZXNzYWdlOiBcIlBlcm1pc3Npb24gRGVuaWVkXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzA0NyxcbiAgICBodHRwU3RhdHVzQ29kZTogNDA2LFxuICB9LFxuICBST0xFX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiUm9sZU5vdEZvdW5kXCIsXG4gICAgbWVzc2FnZTogXCJSb2xlIE5vdCBmb3VuZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwNDgsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgR1JPVVBfTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJHcm91cE5vdEZvdW5kXCIsXG4gICAgbWVzc2FnZTogXCJHcm91cCBOb3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDQ5LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIEFDVElPTl9OT1RfQUxMT1dFRDoge1xuICAgIG5hbWU6IFwiQWN0aW9uTm90QWxsb3dlZFwiLFxuICAgIG1lc3NhZ2U6IFwiQWN0aW9uIG5vdCBhbGxvd2VkXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzA1MCxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAzLFxuICB9LFxuICBMQUJFTF9BTFJFQURZX0VYSVNUUzoge1xuICAgIG5hbWU6IFwiTGFiZWxBbHJlYWR5RXhpc3RzXCIsXG4gICAgbWVzc2FnZTogXCJMYWJlbCBhbHJlYWR5IGV4aXN0c1wiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwNTEsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgR0xPQkFMX1JFR0lTVFJBVElPTl9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIkdsb2JhbFJlZ2lzdHJhdGlvbk5vdEZvdW5kXCIsXG4gICAgbWVzc2FnZTogXCJHbG9iYWwgUmVnaXN0cmF0aW9uIGZpZWxkcyBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDUyLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIExPWUFMVFlfTEVWRUxfTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJMb3lhbHR5TGV2ZWxOb3RGb3VuZFwiLFxuICAgIG1lc3NhZ2U6IFwiTG95YWx0eSBMZXZlbCBTZXR0aW5ncyBOb3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDUzLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIENBU0lOT19QUk9WSURFUl9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIkNhc2lub1Byb3ZpZGVyTm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIkNhc2lubyBwcm92aWRlciBOb3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDU0LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIEFHR1JFR0FUT1JfTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJBZ2dyZWdhdG9yTm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIkFnZ3JlZ2F0b3IgTm90IGZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzA1NSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBTVEFUVVNfVVBEQVRFX0ZBSUxFRDoge1xuICAgIG5hbWU6IFwiU3RhdHVzVXBkYXRlRmFpbGVkXCIsXG4gICAgbWVzc2FnZTogXCJTdGF0dXMgdXBkYXRlIGZhaWxlZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwNTYsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgUkVBU09OX1JFUVVJUkVEOiB7XG4gICAgbmFtZTogXCJSZWFzb25SZXF1aXJlZFwiLFxuICAgIG1lc3NhZ2U6IFwiUmVhc29uIGlzIHJlcXVpcmVkIHRvIG1hcmsgdXNlciBpbi1hY3RpdmVcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDU3LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIFRPR0dMRV9DQVNFX0lOVkFMSUQ6IHtcbiAgICBuYW1lOiBcIlRvZ2dsZUNhc2VJbnZhbGlkXCIsXG4gICAgbWVzc2FnZTogXCJUb2dnbGUgY2FzZSB2YWx1ZSBpcyBpbnZhbGlkXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzA1OCxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBET01BSU5fRVhJU1RTOiB7XG4gICAgbmFtZTogXCJEb21haW5FeGlzdHNcIixcbiAgICBtZXNzYWdlOiBcIkRvbWFpbiBhbHJlYWR5IGV4aXN0c1wiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwNTksXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgVEVOQU5UX0VYSVNUUzoge1xuICAgIG5hbWU6IFwiVGVuYW50RXhpc3RzXCIsXG4gICAgbWVzc2FnZTogXCJUZW5hbnQgYWxyZWFkeSBleGlzdHNcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDYwLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIENSRURFTlRJQUxfS0VZX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiQ3JlZGVudGlhbEtleU5vdEZvdW5kXCIsXG4gICAgbWVzc2FnZTogXCJDcmVkZW50aWFsIGtleSBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDYxLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIFRFTkFOVF9DUkVERU5USUFMX0VYSVNUUzoge1xuICAgIG5hbWU6IFwiVGVuYW50Q3JlZGVudGlhbEV4aXN0c1wiLFxuICAgIG1lc3NhZ2U6IFwiVGVuYW50IGNyZWRlbnRpYWwgYWxyZWFkeSBleGlzdHNcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDYyLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIFRFTkFOVF9DUkVERU5USUFMU19OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIlRlbmFudENyZWRlbnRpYWxzTm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIlRlbmFudCBjcmVkZW50aWFscyBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDYzLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIFRFTkFOVF9DT05GSUdVUkFUSU9OX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiVGVuYW50Q29uZmlndXJhdGlvbk5vdEZvdW5kXCIsXG4gICAgbWVzc2FnZTogXCJUZW5hbnQgY29uZmlndXJhdGlvbiBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDY0LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIEFMTE9XRURfQ09ORklHVVJBVElPTl9FUlJPUjoge1xuICAgIG5hbWU6IFwiQWxsb3dlZENvbmZpZ3VyYXRpb25FcnJvclwiLFxuICAgIG1lc3NhZ2U6IFwiQ3VycmVuY3kgYW5kIGxhbmd1YWdlIHNob3VsZCBiZSBhcyBwZXIgYWxsb3dlZCBjb25maWd1cmF0aW9uXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzA2NixcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBJTlRFUk5BTF9VU0VSX0VSUk9SOiB7XG4gICAgbmFtZTogXCJJbnRlcm5hbFVzZXJFcnJvclwiLFxuICAgIG1lc3NhZ2U6IFwiVGhpcyB1c2VyIGlzIGFscmVhZHkgSW50ZXJuYWwgVXNlclwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwNjcsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgREFJTFlfTElNSVRfRVJST1I6IHtcbiAgICBuYW1lOiBcIkRhaWx5TGltaXRFcnJvclwiLFxuICAgIG1lc3NhZ2U6IFwiRGFpbHkgbGltaXQgc2hvdWxkIGJlIGxlc3MgdGhhbiB3ZWVrbHkgYW5kIG1vbnRobHkgbGltaXRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDY4LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIFdFRUtMWV9MSU1JVF9FUlJPUjoge1xuICAgIG5hbWU6IFwiV2Vla2x5TGltaXRFcnJvclwiLFxuICAgIG1lc3NhZ2U6XG4gICAgICBcIldlZWtseSBsaW1pdCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIGRhaWx5IGxpbWl0IGFuZCBsZXNzIHRoYW4gbW9udGhseSBsaW1pdFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwNjksXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgTU9OVEhMWV9MSU1JVF9FUlJPUjoge1xuICAgIG5hbWU6IFwiTW9udGhseUxpbWl0RXJyb3JcIixcbiAgICBtZXNzYWdlOlxuICAgICAgXCJNb250aGx5IGxpbWl0IHNob3VsZCBiZSBncmVhdGVyIHRoYW4gZGFpbHkgbGltaXQgYW5kIHdlZWtseSBsaW1pdFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwNzAsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgUkVNT1ZFX01PTkVZX0VSUk9SOiB7XG4gICAgbmFtZTogXCJSZW1vdmVNb25leUVycm9yXCIsXG4gICAgbWVzc2FnZTogXCJSZW1vdmUgbW9uZXkgYW1vdW50IGlzIG1vcmUgdGhhbiB3YWxsZXQgYmFsYW5jZVwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwNzEsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgSU1BR0VfTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJJbWFnZU5vdEZvdW5kXCIsXG4gICAgbWVzc2FnZTogXCJJbWFnZSBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDcyLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIEZJTEVfTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJGSUxFX05PVF9GT1VORFwiLFxuICAgIG1lc3NhZ2U6IFwiZmlsZSBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDcyLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIFJFV0FSRFNfTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJSd2FyZHNOb3RGb3VuZFwiLFxuICAgIG1lc3NhZ2U6IFwiUmV3YXJkcyBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDcyLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIE1VTFRJUExFX1JFV0FSRFNfTk9UX0FMTE9XRUQ6IHtcbiAgICBuYW1lOiBcIk1VTFRJUExFX1JFV0FSRFNfTk9UX0FMTE9XRURcIixcbiAgICBtZXNzYWdlOiBcIm11bHRpcGxlIHJld2FyZHMgbm90IGFsbG93ZWRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDcyLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIEJBTk5FUl9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIkJhbm5lck5vdEZvdW5kXCIsXG4gICAgbWVzc2FnZTogXCJCYW5uZXIgbm90IGZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzA3MixcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBCQU5ORVJfS0VZX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiQmFubmVyS2V5Tm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIkJhbm5lciBrZXkgbm90IGZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzA3MyxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBLRVlfTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJLZXlOb3RGb3VuZFwiLFxuICAgIG1lc3NhZ2U6IFwiS2V5IG5vdCBmb3VuZCBmb3IgY3VycmVuY3lcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDc0LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIERBWVNfUkVRVUlSRUQ6IHtcbiAgICBuYW1lOiBcIkRheXNSZXF1aXJlZFwiLFxuICAgIG1lc3NhZ2U6IFwiRGF5cyB0byBjbGVhciByZXF1aXJlZCBhbmQgc2hvdWxkIGJlIGxlc3MgdGhhbiAzMCBmb3IgZnJlZXNwaW5zXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzA3NSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBXQUdFUklOR19UWVBFX0lOVkFMSUQ6IHtcbiAgICBuYW1lOiBcIldhZ2VyaW5nVHlwZUludmFsaWRcIixcbiAgICBtZXNzYWdlOiBcIkludmFsaWQgd2FnZXJpbmcgdHlwZSBzZWxlY3RlZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwNzYsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgV0FHRVJJTkdfVEVNUExBVEVfTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJXYWdlcmluZ1RlbXBsYXRlTm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIldhZ2VyaW5nIHRlbXBsYXRlIG5vdCBmb3VuZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwNzcsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgSU5WQUxJRF9RVUFOVElUWToge1xuICAgIG5hbWU6IFwiSW52YWxpZFF1YW50aXR5XCIsXG4gICAgbWVzc2FnZTogXCJTcGlucyBxdWFudGl0eSBtdXN0IGJlIGxlc3MgdGhhbiAxMDBcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDc4LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIEFQUExJRURfQk9OVVNfTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJBcHBsaWVkQm9udXNOb3RGb3VuZFwiLFxuICAgIG1lc3NhZ2U6IFwiQXBwbGllZCBib251cyBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDc5LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIFNQSU5TX1JFUVVJUkVEOiB7XG4gICAgbmFtZTogXCJTcGluc1JlcXVpcmVkXCIsXG4gICAgbWVzc2FnZTogXCJGcmVlIHNwaW5zIHF1YW50aXR5IHJlcXVpcmVkXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzA4MCxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBHQU1FU19SRVFVSVJFRDoge1xuICAgIG5hbWU6IFwiR2FtZXNSZXF1aXJlZFwiLFxuICAgIG1lc3NhZ2U6IFwiR2FtZXMgcmVxdWlyZWRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDgxLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIFRJTUVfUEVSSU9EX1JFUVVJUkVEOiB7XG4gICAgbmFtZTogXCJUaW1lUGVyaW9kUmVxdWlyZWRcIixcbiAgICBtZXNzYWdlOiBcIlRpbWUgcGVyaW9kIHJlcXVpcmVkXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzA4MixcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBVU0VSX0JPTlVTX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiVXNlckJvbnVzTm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIlVzZXIgYm9udXMgbm90IGZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzA4MyxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBBR0dSRUdBVE9SX0VYSVNUUzoge1xuICAgIG5hbWU6IFwiQWdncmVnYXRvckV4aXN0c1wiLFxuICAgIG1lc3NhZ2U6IFwiQ2FzaW5vIGFnZ3JlZ2F0b3IgYWxyZWFkeSBleGlzdHNcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDg0LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIEdBTUVfU1VCX0NBVEVHT1JZX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiR2FtZVN1YkNhdGVnb3J5Tm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIkdhbWUgU3ViIENhdGVnb3J5IG5vdCBmb3VuZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwODUsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgR0FNRV9DQVRFR09SWV9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIkdhbWVDYXRlZ29yeU5vdEZvdW5kXCIsXG4gICAgbWVzc2FnZTogXCJHYW1lIENhdGVnb3J5IG5vdCBmb3VuZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwODYsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgQ0FTSU5PX1BST1ZJREVSX0FMUkVBRFlfRVhJU1RTOiB7XG4gICAgbmFtZTogXCJDYXNpbm9Qcm92aWRlckFscmVhZHlFeGlzdHNcIixcbiAgICBtZXNzYWdlOiBcIkNhc2lubyBwcm92aWRlciBhbHJlYWR5IGV4aXN0c1wiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwODcsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgR0FNRV9DQVRFR09SWV9BTFJFQURZX0VYSVNUUzoge1xuICAgIG5hbWU6IFwiR2FtZUNhdGVnb3J5QWxyZWFkeUV4aXN0c1wiLFxuICAgIG1lc3NhZ2U6IFwiR2FtZSBDYXRlZ29yeSBhbHJlYWR5IGV4aXN0c1wiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwODgsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgR0FNRV9TVUJfQ0FURUdPUllfQUxSRUFEWV9FWElTVFM6IHtcbiAgICBuYW1lOiBcIkdhbWVTdWJDYXRlZ29yeUFscmVhZHlFeGlzdHNcIixcbiAgICBtZXNzYWdlOiBcIkdhbWUgU3ViIENhdGVnb3J5IGFscmVhZHkgZXhpc3RzXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzA4OSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBOQU1FX0FMUkVBRFlfRVhJU1RTOiB7XG4gICAgbmFtZTogXCJOYW1lQWxyZWFkeUV4aXN0c1wiLFxuICAgIG1lc3NhZ2U6IFwiTmFtZSBhbHJlYWR5IGV4aXN0c1wiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwOTAsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgQ01TX0FMUkVBRFlfRVhJU1RTOiB7XG4gICAgbmFtZTogXCJDbXNBbHJlYWR5RXhpc3RzXCIsXG4gICAgbWVzc2FnZTogXCJDbXMgd2l0aCB0aGlzIHNsdWcgYWxyZWFkeSBleGlzdHNcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDkxLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIElURU1TX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiSXRlbXNOb3RGb3VuZFwiLFxuICAgIG1lc3NhZ2U6IFwiUmVzdHJpY3RlZCBpdGVtcyBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDkyLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIENVUlJFTkNZX0FMUkVBRFlfRVhJU1RTOiB7XG4gICAgbmFtZTogXCJDdXJyZW5jeUFscmVhZHlFeGlzdHNcIixcbiAgICBtZXNzYWdlOiBcIkN1cnJlbmN5IGFscmVhZHkgZXhpc3RzXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzA5MyxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBFTUFJTF9URU1QTEFURV9BTFJFQURZX0VYSVNUUzoge1xuICAgIG5hbWU6IFwiRW1haWxUZW1wbGF0ZUFscmVhZHlFeGlzdHNcIixcbiAgICBtZXNzYWdlOiBcIkVtYWlsIHRlbXBsYXRlIGZvciB0aGlzIGxhYmVsIGFscmVhZHkgZXhpc3RzXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzA5NCxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBFTUFJTF9URU1QTEFURV9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIkVtYWlsVGVtcGxhdGVOb3RGb3VuZFwiLFxuICAgIG1lc3NhZ2U6IFwiRW1haWwgdGVtcGxhdGUgbm90IGZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzA5NSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBQUklNQVJZX0VNQUlMOiB7XG4gICAgbmFtZTogXCJQcmltYXJ5RW1haWxcIixcbiAgICBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgcHJpbWFyeSBlbWFpbFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwOTYsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgUFJJTUFSWV9URU1QTEFURToge1xuICAgIG5hbWU6IFwiUHJpbWFyeVRlbXBsYXRlXCIsXG4gICAgbWVzc2FnZTogXCJTZWxlY3Qgb3RoZXIgcHJpbWFyeSB0ZW1wbGF0ZVwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwOTcsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgQ1VTVE9NX0RBVEVfUkVRVUlSRUQ6IHtcbiAgICBuYW1lOiBcIkN1c3RvbURhdGVSZXF1aXJlZFwiLFxuICAgIG1lc3NhZ2U6IFwiQ3VzdG9tIGRhdGUgb3B0aW9ucyByZXF1aXJlZCBkYXRlc1wiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwOTgsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgT1JERVJfUkVRVUlSRUQ6IHtcbiAgICBuYW1lOiBcIk9yZGVyUmVxdWlyZWRcIixcbiAgICBtZXNzYWdlOiBcIlNlbmQgb3JkZXIgZm9yIGFsbCBzdWIgY2F0ZWdvcmllc1wiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMxMDAsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgVVNFUl9EQVRBX1VQREFURUQ6IHtcbiAgICBuYW1lOiBcIlVzZXJEYXRhVXBkYXRlZFwiLFxuICAgIG1lc3NhZ2U6IFwiVXNlciBkYXRhIGFscmVhZHkgdXBkYXRlZCBhdCBteSBhZmZpbGlhdGVcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMTAxLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIFRPS0VOX0RFQ09ERToge1xuICAgIG5hbWU6IFwiVG9rZW5EZWNvZGVcIixcbiAgICBtZXNzYWdlOiBcIlVuYWJsZSB0byBkZWNvZGUgQWZmaWxpYXRlIFRva2VuXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzEwMixcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBBRkZJTElBVEVTX0VSUk9SOiB7XG4gICAgbmFtZTogXCJBZmZpbGlhdGVzRXJyb3JcIixcbiAgICBtZXNzYWdlOiBcIlVuYWJsZSB0byBzZW5kIHVzZXIgZGV0YWlscyB0byBteSBhZmZpbGlhdGVzXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzEwMyxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBQQVlNRU5UX1BST1ZJREVSX05PVF9GT1VORF9FUlJPUjoge1xuICAgIG5hbWU6IFwiUGF5bWVudFByb3ZpZGVyTm90Rm91bmRFcnJvclwiLFxuICAgIG1lc3NhZ2U6IFwiUGF5bWVudCBQcm92aWRlciBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMTA0LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIElOVkFMSURfRklMRToge1xuICAgIG5hbWU6IFwiSW52YWxpZEZpbGVcIixcbiAgICBtZXNzYWdlOiBcIkludmFsaWQgRmlsZSAuXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzEwNSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBERVBPU0lUX0NBU0hCQUNLX0JPTlVTOiB7XG4gICAgbmFtZTogXCJEZXBvc2l0Q2FzaGJhY2tCb251c1wiLFxuICAgIG1lc3NhZ2U6IFwiQ2Fubm90IGlzc3VlIERlcG9zaXQgQ2FzaGJhY2sgYm9udXNcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMTA2LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIElOVkFMSURfQk9OVVNfRVJST1I6IHtcbiAgICBuYW1lOiBcIkludmFsaWRCb251c0Vycm9yXCIsXG4gICAgbWVzc2FnZTogXCJBbW91bnQgY2FuIGJlIGlzc3VlZCBvbmx5IGluIERlcG9zaXQgQm9udXMuXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzEwNyxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBBTU9VTlRfUkVRVUlSRUQ6IHtcbiAgICBuYW1lOiBcIkFtb3VudFJlcXVpcmVkXCIsXG4gICAgbWVzc2FnZTogXCJCb251cyBhbW91bnQgcmVxdWlyZWRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMTA4LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIE1FUkNIQU5UX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiTWVyY2hhbnROb3RGb3VuZFwiLFxuICAgIG1lc3NhZ2U6IFwiTWVyY2hhbnQgbm90IGZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzEwOSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBTRUdNRU5UU19OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIlNlZ21lbnRzTm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIlNlZ21lbnRzIG5vdCBmb3VuZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMxMTAsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgVVNFUl9DT1VOVFJZX0JMT0NLRUQ6IHtcbiAgICBuYW1lOiBcIlVzZXJDb3VudHJ5QmxvY2tlZFwiLFxuICAgIG1lc3NhZ2U6IFwiVGhpcyBib251cyBpcyBibG9ja2VkIGZvciBwbGF5ZXJzIGNvdW50cnlcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMTExLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIEJBTEFOQ0VfQk9OVVNfQ0xBSU1FRDoge1xuICAgIG5hbWU6IFwiQmFsYW5jZUJvbnVzQ2xhaW1lZFwiLFxuICAgIG1lc3NhZ2U6IFwiQmFsYW5jZSBCb251cyBhcHBseWluZyB0aGlzIGJvbnVzIGlzIGNsYWltZWQgYnkgdXNlci5cIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMTEyLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIENPTU1FTlRfTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJDb21tZW50Tm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIkNvbW1lbnQgbm90IGZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzExMyxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBFTUFJTF9BTFJFQURZX1ZFUklGSUVEOiB7XG4gICAgbmFtZTogXCJFbWFpbEFscmVhZHlWZXJpZmllZFwiLFxuICAgIG1lc3NhZ2U6IFwiRW1haWwgYWxyZWFkeSB2ZXJpZmllZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMxMTQsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgRVhURVJOQUxfQVBJX0VSUk9SOiB7XG4gICAgbmFtZTogXCJFeHRlcm5hbEFwaUVycm9yXCIsXG4gICAgbWVzc2FnZTogXCJFeHRlcm5hbCBhcGkgcmVzcG9uc2UgZXJyb3JcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMTE1LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIEZJRUxEX05BTUVfUkVRVUlSRUQ6IHtcbiAgICBuYW1lOiBcIkZpZWxkTmFtZVJlcXVpcmVkXCIsXG4gICAgbWVzc2FnZTogXCJGaWVsZCBuYW1lcyByZXF1aXJlZCB0byBkZWxldGVcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMTE2LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIEFNT1VOVF9GSUVMRF9ERUxFVEVfRVJST1I6IHtcbiAgICBuYW1lOiBcIkFtb3VudEZpZWxkRGVsZXRlRXJyb3JcIixcbiAgICBtZXNzYWdlOiBcIkFtb3VudCBmaWVsZCBjYW5ub3QgYmUgZGVsZXRlZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMxMTcsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgUEFZTUVOVF9QUk9WSURFUl9BTFJFQURZX0VYSVNUUzoge1xuICAgIG5hbWU6IFwiUGF5bWVudFByb3ZpZGVyQWxyZWFkeUV4aXN0c1wiLFxuICAgIG1lc3NhZ2U6IFwiUGF5bWVudCBwcm92aWRlciBmb3IgdGhpcyBhZ2dyZWdhdG9yIGFuZCBncm91cCBhbHJlYWR5IGV4aXN0c1wiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMxMTgsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgU0FNRV9QQVNTV09SRF9FUlJPUjoge1xuICAgIG5hbWU6IFwiU2FtZVBhc3N3b3JkRXJyb3JcIixcbiAgICBtZXNzYWdlOiBcIk5ldyBQYXNzd29yZCBjYW5ub3QgYmUgc2FtZSBhcyBwcmV2aW91cyBwYXNzd29yZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMxMTksXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgV1JPTkdfUEFTU1dPUkRfRVJST1I6IHtcbiAgICBuYW1lOiBcIldyb25nUGFzc3dvcmRFcnJvclwiLFxuICAgIG1lc3NhZ2U6IFwiQ3VycmVudCBwYXNzd29yZCB3cm9uZ1wiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMxMjAsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgRU1BSUxfTk9UX1ZFUklGSUVEOiB7XG4gICAgbmFtZTogXCJFbWFpbE5vdFZlcmlmaWVkXCIsXG4gICAgbWVzc2FnZTogXCJFbWFpbCBOb3QgVmVyaWZpZWRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMTIxLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIFJFVklFV19OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIlJldmlld05vdEZvdW5kXCIsXG4gICAgbWVzc2FnZTogXCJSZXZpZXcgbm90IGZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzEyMixcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBTUE9SVFNfQkVUVElOR19UUkFOU0FDVElPTlNfTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJTcG9ydHNCZXR0aW5nVHJhbnNhY3Rpb25zTm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIlNwb3J0cyBCZXR0aW5nIHRyYW5zYWN0aW9ucyBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMzEyMyxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBKT0lOSU5HX0FNT1VOVF9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIkpvaW5pbmdBbW91bnROb3RGb3VuZFwiLFxuICAgIG1lc3NhZ2U6IFwiSm9pbmluZyBBbW91bnQgbm90IGZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzEyNCxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBBQ1RJVkVfQk9OVVNfRVhJU1RTOiB7XG4gICAgbmFtZTogXCJBY3RpdmVCb251c0V4aXN0c1wiLFxuICAgIG1lc3NhZ2U6IFwiQWN0aXZlIEJvbnVzIGFscmVhZHkgZXhpc3RzLlwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMxMjUsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgTk9UX0ZPVU5EX0NBU0lOT19HQU1FOiB7XG4gICAgbmFtZTogXCJOb3RGb3VuZENhc2lub0dhbWVcIixcbiAgICBtZXNzYWdlOiBcIk5vdCBGb3VuZCBDYXNpbm9HYW1lLlwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMxMjYsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgUFJPTU9USU9OX1NMVUdfQUxSRUFEWV9FWElTVFM6IHtcbiAgICBuYW1lOiBcIlByb21vdGlvblNsdWdBbHJlYWR5RXhpc3RzXCIsXG4gICAgbWVzc2FnZTogXCJQcm9tb3Rpb24gc2x1ZyBhbHJlYWR5IGV4aXN0cy5cIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMTI2LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIFBST01PVElPTl9OT1RfRVhJU1RTOiB7XG4gICAgbmFtZTogXCJQcm9tb3Rpb25Ob3RFeGlzdHNcIixcbiAgICBtZXNzYWdlOiBcIlByb21vdGlvbiBub3QgZXhpc3RzLlwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMxMjYsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgUFJFVklPVVNfTEVWRUxfTk9UX1VQREFURUQ6IHtcbiAgICBuYW1lOiBcIlByZXZpb3VzTGV2ZWxOb3RVcGRhdGVkXCIsXG4gICAgbWVzc2FnZTogXCJQbGVhc2UgdXBkYXRlIHByZXZpb3VzIGxldmVsIFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMxMjgsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgR1JPVVBfQUxSRUFEWV9FWElTVFM6IHtcbiAgICBuYW1lOiBcIkdyb3VwQWxyZWFkeUV4aXN0c0Vycm9yVHlwZVwiLFxuICAgIG1lc3NhZ2U6IFwiR3JvdXAgQWxyZWFkeSBFeGlzdHNcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMTI5LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIENPTU1JU0lPTl9HUk9VUF9BTFJFQURZX0VYSVNUUzoge1xuICAgIG5hbWU6IFwiQ29tbWlzaW9uR3JvdXBBbHJlYWR5RXhpc3RzXCIsXG4gICAgbWVzc2FnZTogXCJBZmZpbGlhdGVzIENvbW1pc2lvbiBHcm91cCBBbHJlYWR5IEV4aXN0c1wiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMxMzIsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgQ09NTUlTSU9OX0dST1VQX05PVF9FWElTVFM6IHtcbiAgICBuYW1lOiBcIkNvbW1pc2lvbkdyb3VwTm90RXhpc3RzXCIsXG4gICAgbWVzc2FnZTogXCJBZmZpbGlhdGVzIENvbW1pc2lvbiBHcm91cCBOb3QgRXhpc3RzXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzEzMyxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBVUExJTkVfVVNFUl9BTFJFQURZX0VYSVNUUzoge1xuICAgIG5hbWU6IFwiVXBsaW5lVXNlckFscmVhZHlFeGlzdHNcIixcbiAgICBtZXNzYWdlOiBcIlVwbGluZSBVc2VyIEFscmVhZHkgRXhpc3RzXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzEzMyxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBQQUNLQUdFX0FMUkVBRFlfRVhJU1RTOiB7XG4gICAgbmFtZTogXCJQYWNrYWdlQWxyZWFkeUV4aXN0c1wiLFxuICAgIG1lc3NhZ2U6IFwiUGFja2FnZSBhbHJlYWR5IGV4aXN0cyB3aXRoIHRoZSBzYW1lIGxhYmVsXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzAyNixcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBQQUNLQUdFX05PVF9FWElTVFM6IHtcbiAgICBuYW1lOiBcIlBhY2thZ2VOb3RFeGlzdHNcIixcbiAgICBtZXNzYWdlOiBcIlBhY2thZ2UgZG9lcyBub3QgZXhpc3RzXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzAwNSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBQQUNLQUdFX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiUGFja2FnZU5vdEZvdW5kXCIsXG4gICAgbWVzc2FnZTogXCJQYWNrYWdlIG5vdCBmb3VuZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwOTUsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgQURNSU5fUk9MRV9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIkFkbWluUm9sZU5vdEZvdW5kXCIsXG4gICAgbWVzc2FnZTogXCJBZG1pbiByb2xlIG5vdCBmb3VuZFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwOTUsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgQURNSU5fUk9MRV9OT1RfRVhJU1RTOiB7XG4gICAgbmFtZTogXCJBZG1pblJvbGVOb3RFeGlzdHNcIixcbiAgICBtZXNzYWdlOiBcIkFkbWluIHJvbGUgZG9lcyBub3QgZXhpc3RzXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzAwNSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBWSVBfVElFUl9BTFJFQURZX0VYSVNUUzoge1xuICAgIG5hbWU6IFwiVmlwVGllckFscmVhZHlFeGlzdHNcIixcbiAgICBtZXNzYWdlOiBcIlZpcCBUaWVyIGFscmVhZHkgZXhpc3RzIGZvciB0aGUgc2FtZSBsZXZlbCBvciBzYW1lIG5hbWVcIixcbiAgICBleHBsYW5hdGlvbjpcbiAgICAgIFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCB3aGlsZSBwcm9jZXNzaW5nIHlvdXIgcmVxdWVzdC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIixcbiAgICBjb2RlOiAzMDI2LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIFZJUF9USUVSX05PVF9FWElTVFM6IHtcbiAgICBuYW1lOiBcIlZpcFRpZXJOb3RFeGlzdHNcIixcbiAgICBtZXNzYWdlOiBcIlZpcCBUaWVyIGRvZXMgbm90IGV4aXN0c1wiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwMDUsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgVklQX1RJRVJTX05PVF9FWElTVFM6IHtcbiAgICBuYW1lOiBcIlZpcFRpZXJzTm90RXhpc3RzXCIsXG4gICAgbWVzc2FnZTogXCJWaXAgVGllcnMgZG9lcyBub3QgZXhpc3RzXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzAwNSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBNQVhfTElNSVRfTEVTU19USEFOX01JTl9MSU1JVDoge1xuICAgIG5hbWU6IFwiTWF4RGVwb3NpdExpbWl0TGVzc1RoYW5NaW5EZXBvc2l0TGltaXRcIixcbiAgICBtZXNzYWdlOiBcIk1heCBkZXBvc2l0IGxpbWl0IGNhbiBub3QgYmUgbGVzcyB0aGFuIE1pbiBkZXBvc2l0IGxpbWl0XCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzAwNSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBNSU5fTElNSVRfR1JFQVRFUl9USEFOX01BWF9MSU1JVDoge1xuICAgIG5hbWU6IFwiTWluRGVwb3NpdExpbWl0R3JlYXRlclRoYW5NYXhEZXBvc2l0TGltaXRcIixcbiAgICBtZXNzYWdlOiBcIk1pbiBkZXBvc2l0IGxpbWl0IGNhbiBub3QgYmUgZ3JlYXRlciB0aGFuIE1heCBkZXBvc2l0IGxpbWl0XCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzAwNSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBJTlZBTElEX1dIRUVMX0RJVklTSU9OX0lEOiB7XG4gICAgbmFtZTogXCJJbnZhbGlkV2hlZWxEaXZpc2lvbklkXCIsXG4gICAgbWVzc2FnZTogXCJJbnZhbGlkIFdoZWVsRGl2aXNpb25JZCAuXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzEwNSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBVU0VSX0xJTUlUU19ET0VTX05PVF9FWElTVFM6IHtcbiAgICBuYW1lOiBcIlVzZXJMaW10c0RvZXNOb3RFeGlzdHNcIixcbiAgICBtZXNzYWdlOiBcIlVzZXIgTGltaXRzIGRvZXMgbm90IGV4aXN0c1wiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMwMDUsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgRkFVQ0VUX1NFVFRJTkdTX0RPRVNfTk9UX0VYSVNUUzoge1xuICAgIG5hbWU6IFwiRmF1Y2V0U2V0dGluZ3NEb2VzTm90RXhpc3RzXCIsXG4gICAgbWVzc2FnZTogXCJGYXVjZXQgc2V0dGluZ3MgZG9lcyBub3QgZXhpc3RzXCIsXG4gICAgZXhwbGFuYXRpb246IFwiU2V0dGluZ3MgZm9yIEZhdWNldCBkb2VzIG5vdCBleGlzdHMgaW4gZ2xvYmFsIHNldHRpbmdzXCIsXG4gICAgY29kZTogMzAwNSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBXSVRIRFJBV0FMX0xJTUlUU19TRVRUSU5HU19ET0VTX05PVF9FWElTVFM6IHtcbiAgICBuYW1lOiBcIldpdGhkcmF3YWxMaW1pdHNTZXR0aW5nc0RvZXNOb3RFeGlzdHNcIixcbiAgICBtZXNzYWdlOiBcIldpdGhkcmF3YWwgbGltaXRzIHNldHRpbmdzIGRvZXMgbm90IGV4aXN0c1wiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJTZXR0aW5ncyBmb3IgV2l0aGRyYXdhbCBMaW1pdHMgZG9lcyBub3QgZXhpc3RzIGluIGdsb2JhbCBzZXR0aW5nc1wiLFxuICAgIGNvZGU6IDMwMDUsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgSU5WQUxJRF9USUNLRVRfSUQ6IHtcbiAgICBuYW1lOiBcIkludmFsaWRUaWNrZXRJZFwiLFxuICAgIG1lc3NhZ2U6IFwiVGlja2V0SWQgaXMgaW52bGlkXCIsXG4gICAgZXhwbGFuYXRpb246IFwiVGhlcmUgaXMgbm8gdGlja2V0IHByZXNlbnQgZm9yIHRoZSBnaXZlbiB0aWNrZXRJZC5cIixcbiAgICBjb2RlOiAzMTMxLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIElOVkFMSURfVElDS0VUX1NUQVRVUzoge1xuICAgIG5hbWU6IFwiSW52YWxpZFRpY2tldFN0YXR1c1wiLFxuICAgIG1lc3NhZ2U6IFwiVGlja2V0IHN0YXR1cyBpcyBpbnZsaWRcIixcbiAgICBleHBsYW5hdGlvbjogXCJUaGUgZ2l2ZW4gdGlja2V0IHN0YXR1cyBpcyBpbnZhbGlkXCIsXG4gICAgY29kZTogMzEzMixcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBOT19USUNLRVRTX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJOb1RpY2tldHNGb3VuZFwiLFxuICAgIG1lc3NhZ2U6IFwiTm8gVGlja2V0cyBGb3VuZFwiLFxuICAgIGV4cGxhbmF0aW9uOiBcIk5vIHRpY2tldHMgcHJlc2VudCBmb3IgdGhlIGdpdmVuIHNlYXJjaCB2YWx1ZXNcIixcbiAgICBjb2RlOiAzMTMzLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIEdMT0JBTF9HUk9VUF9FWElTVDoge1xuICAgIG5hbWU6IFwiR2xvYmFsR3JvdXBFeGlzdFwiLFxuICAgIG1lc3NhZ2U6IFwiR2xvYmFsIEdyb3VwIEV4aXN0XCIsXG4gICAgZXhwbGFuYXRpb246IFwiR2xvYmFsIGdyb3VwIGFscmVhZHkgZXhpc3RcIixcbiAgICBjb2RlOiAzMTM0LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIEdST1VQX05BTUVfQUxSRUFEWV9FWElTVDoge1xuICAgIG5hbWU6IFwiR3JvdXBOYW1lRXhpc3RcIixcbiAgICBtZXNzYWdlOiBcIkdsb2JhbCBOYW1lIEV4aXN0XCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzEzNSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBDSEFUX0dST1VQX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiQ2hhdEdyb3VwTm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIkNoYXQgR3JvdXAgTm90IEZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzEzNixcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBDSEFUX1JBSU5fQUxSRUFEWV9BQ1RJVkU6IHtcbiAgICBuYW1lOiBcIkNoYXRSYWluQWxyZWFkeUFjdGl2ZVwiLFxuICAgIG1lc3NhZ2U6IFwiQ2hhdCBSYWluIEFscmVhZHkgQWN0aXZlXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzEzNyxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBDSEFUX1JBSU5fTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJDaGF0UmFpbk5vdEZvdW5kXCIsXG4gICAgbWVzc2FnZTogXCJDaGF0IFJhaW4gTm90IEZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzEzOCxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBDSEFUX1JVTEVfTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJDaGF0UnVsZU5vdEZvdW5kXCIsXG4gICAgbWVzc2FnZTogXCJDaGF0IFJ1bGUgTm90IEZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzEzOSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBPRkZFTlNJVkVfV09SRF9FWElTVDoge1xuICAgIG5hbWU6IFwiT2ZmZW5zaXZlV29yZEV4aXN0XCIsXG4gICAgbWVzc2FnZTogXCJPZmZlbnNpdmUgd29yZCBhbHJlYWR5IGV4aXN0XCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzE0MCxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBPRkZFTlNJVkVfV09SRF9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIk9mZmVuc2l2ZVdvcmROb3RGb3VuZFwiLFxuICAgIG1lc3NhZ2U6IFwiT2ZmZW5zaXZlIFdvcmQgTm90IEZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzE0MSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBJTlZBTElEX0FSUkFZOiB7XG4gICAgbmFtZTogXCJJbnZhbGlkIGFycmF5XCIsXG4gICAgbWVzc2FnZTogXCJJbnZhbGlkIGFycmF5XCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgd2hpbGUgcHJvY2Vzc2luZyB5b3VyIHJlcXVlc3QuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgY29kZTogMzE0MSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBTT0NJQUxfTUVESUFfTElOS19ET0VTX05PVF9FWElTVFM6IHtcbiAgICBuYW1lOiBcIlNvY2lhbE1lZGlhTGlua1NldHRpbmdzRG9lc05vdEV4aXN0c1wiLFxuICAgIG1lc3NhZ2U6IFwiU29jaWFsIG1lZGlhIGxpbmsgc2V0dGluZ3MgZG9lcyBub3QgZXhpc3RzXCIsXG4gICAgZXhwbGFuYXRpb246XG4gICAgICBcIlNldHRpbmdzIGZvciBzb2NpYWwgbWVkaWEgbGluayBkb2VzIG5vdCBleGlzdHMgaW4gZ2xvYmFsIHNldHRpbmdzXCIsXG4gICAgY29kZTogMzE0MixcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBLSUxMX1NXSVRDSF9ET0VTX05PVF9FWElTVFM6IHtcbiAgICBuYW1lOiBcIktpbGxTd2l0Y2hTZXR0aW5nc0RvZXNOb3RFeGlzdHNcIixcbiAgICBtZXNzYWdlOiBcIktpbGwgc3dpdGNoIHNldHRpbmdzIGRvZXMgbm90IGV4aXN0c1wiLFxuICAgIGV4cGxhbmF0aW9uOiBcIlNldHRpbmdzIGZvciBraWxsIHN3aXRjaCBkb2VzIG5vdCBleGlzdHMgaW4gZ2xvYmFsIHNldHRpbmdzXCIsXG4gICAgY29kZTogMzE0MyxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBERVBPU0lUX0xJTUlUU19ET0VTX05PVF9FWElTVFM6IHtcbiAgICBuYW1lOiBcIkRlcG9zaXRMaW1pdHNTZXR0aW5nc0RvZXNOb3RFeGlzdHNcIixcbiAgICBtZXNzYWdlOiBcIkRlcG9zaXQgTGltaXRzIHNldHRpbmdzIGRvZXMgbm90IGV4aXN0c1wiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJTZXR0aW5ncyBmb3IgZGVwb3NpdCBsaW1pdHMgZG9lcyBub3QgZXhpc3RzIGluIGdsb2JhbCBzZXR0aW5nc1wiLFxuICAgIGNvZGU6IDMxNDQsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgTk9fR0xPQkFMX1NFVFRJTkdTX0VYSVNUUzoge1xuICAgIG5hbWU6IFwiR2xvYmFsU2V0dGluZ3NEb2VzTm90RXhpc3RzXCIsXG4gICAgbWVzc2FnZTogXCJzZXR0aW5ncyBkb2VzIG5vdCBleGlzdHNcIixcbiAgICBleHBsYW5hdGlvbjogXCJTZXR0aW5ncyBkb2VzIG5vdCBleGlzdHMgaW4gZ2xvYmFsIHNldHRpbmdzXCIsXG4gICAgY29kZTogMzE0NSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBTSVRFX0lORk9STUFUSU9OX0RPRVNfTk9UX0VYSVNUUzoge1xuICAgIG5hbWU6IFwiU2l0ZUluZm9ybWF0aW9uU2V0dGluZ3NEb2VzTm90RXhpc3RzXCIsXG4gICAgbWVzc2FnZTogXCJzaXRlIGluZm9ybWF0aW9uIHNldHRpbmdzIGRvZXMgbm90IGV4aXN0c1wiLFxuICAgIGV4cGxhbmF0aW9uOiBcInNpdGUgaW5mb3JtYXRpb24gc2V0dGluZyBkb2VzIG5vdCBleGlzdHMgaW4gZ2xvYmFsIHNldHRpbmdzXCIsXG4gICAgY29kZTogMzE0NixcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBDTVNfRVhJU1RTOiB7XG4gICAgbmFtZTogXCJDTVNFeGlzdHNcIixcbiAgICBtZXNzYWdlOiBcIkNNUyBBbHJlYWR5IEV4aXN0c1wiLFxuICAgIGV4cGxhbmF0aW9uOiBcIkNNUyBBbHJlYWR5IEV4aXN0c1wiLFxuICAgIGNvZGU6IDMxNDcsXG4gICAgaHR0cFN0YXR1c0NvZGU6IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULFxuICB9LFxuICBTVEFURV9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIlN0YXRlRG9lc05vdEV4aXN0c1wiLFxuICAgIG1lc3NhZ2U6IFwiU3RhdGUgZG9lcyBub3QgZXhpc3RzXCIsXG4gICAgZXhwbGFuYXRpb246IFwiU3RhdGUgRG9lcyBOb3QgRXhpc3RzXCIsXG4gICAgY29kZTogMzE0OCxcbiAgICBodHRwU3RhdHVzQ29kZTogU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsXG4gIH0sXG4gIEFHRV9JU19CRUxPVzE4OiB7XG4gICAgbmFtZTogXCJBZ2VJc0JlbG93MThcIixcbiAgICBtZXNzYWdlOiBcIkFnZSBpcyBCZWxvdyAxOFwiLFxuICAgIGV4cGxhbmF0aW9uOlxuICAgICAgXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMxNDksXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgQk9OVVNfQ09ERV9BTFJFQURZX0VYSVNUOiB7XG4gICAgbmFtZTogXCJCb251c0NvZGVBbHJlYWR5RXhpc3RcIixcbiAgICBtZXNzYWdlOiBcIkJvbnVzIENvZGUgQWxyZWFkeSBFeGlzdFwiLFxuICAgIGV4cGxhbmF0aW9uOiBcIkJvbnVzIENvZGUgQWxyZWFkeSBFeGlzdFwiLFxuICAgIGNvZGU6IDMxNTAsXG4gICAgaHR0cFN0YXR1c0NvZGU6IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULFxuICB9LFxuICBHQU1FX0NBVEVHT1JZX0VYSVNUUzoge1xuICAgIG5hbWU6IFwiR2FtZUNhdGVnb3J5QWxyZWFkeUV4aXN0XCIsXG4gICAgbWVzc2FnZTogXCJHYW1lIENhdGVnb3J5IEFscmVhZHkgRXhpc3RcIixcbiAgICBleHBsYW5hdGlvbjogXCJHYW1lIENhdGVnb3J5IEFscmVhZHkgRXhpc3RcIixcbiAgICBjb2RlOiAzMTUxLFxuICAgIGh0dHBTdGF0dXNDb2RlOiBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCxcbiAgfSxcbiAgUEVSQ0VOVEFHRV9JU19CRUxPVzEwMDoge1xuICAgIG5hbWU6IFwiUGVyY2VudGFnZUlzQmVsb3cxMDBcIixcbiAgICBtZXNzYWdlOiBcIlN1bSBvZiBhbGwgcGVyY2VudGFnZSBpcyBiZWxvdyAxMDBcIixcbiAgICBleHBsYW5hdGlvbjogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDMxNTIsXG4gICAgaHR0cFN0YXR1c0NvZGU6IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULFxuICB9LFxuICBQQVlNRU5UX0ZBSUxFRDoge1xuICAgIG5hbWU6ICdQYXltZW50RmFpbGVkJyxcbiAgICBtZXNzYWdlOiAnUGF5bWVudCBGYWlsZWQnLFxuICAgIGV4cGxhbmF0aW9uOiAnUGF5bWVudCBGYWlsZWQnLFxuICAgIGNvZGU6IDMxNTMsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMFxuICB9LFxuICBQUk9WSURFUl9JTkFDVElWRToge1xuICAgIG5hbWU6IFwiUHJvdmlkZXJJbmFjdGl2ZVwiLFxuICAgIG1lc3NhZ2U6IFwiTm90IGdldCBhbnkgcmVzcG9uc2Usc2luY2UgcHJvdmlkZXIgaXMgaW5hY3RpdmUsIHRyeSBhZ2FpblwiLFxuICAgIGV4cGxhbmF0aW9uOiBcIk5vdCBnZXQgYW55IHJlc3BvbnNlLHNpbmNlIHByb3ZpZGVyIGlzIGluYWN0aXZlXCIsXG4gICAgY29kZTogMzE1NCxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBERUZBVUxUX0dBTUVfQ0FURUdPUllfTk9UX0ZPVU5EOiB7XG4gICAgbmFtZTogXCJEZWZhdWx0R2FtZUNhdGVnb3J5Tm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIkRlZmF1bHQgZ2FtZSBjYXRlZ29yeSBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjogXCJEZWZhdWx0IGdhbWUgY2F0ZWdvcnkgbm90IGZvdW5kLlwiLFxuICAgIGNvZGU6IDMxNTUsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgSU5WQUxJRF9TRUdNRU5UX0lEOiB7XG4gICAgbmFtZTogXCJJbnZhbGlkU2VnbWVudElkXCIsXG4gICAgbWVzc2FnZTogXCJPbmUgb3IgbW9yZSBwcm92aWRlZCBzZWdtZW50IElEcyBhcmUgaW52YWxpZFwiLFxuICAgIGV4cGxhbmF0aW9uOiBcIlRoZSBzZWdtZW50IElEcyBwcm92aWRlZCBkbyBub3QgZXhpc3QgaW4gdGhlIGRhdGFiYXNlIG9yIGFyZSBub3QgdmFsaWQuXCIsXG4gICAgY29kZTogNDEwMSxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBDQU1QQUlHTl9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIkNhbXBhaWduTm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIkNhbXBhaWduIG5vdCBmb3VuZC5cIixcbiAgICBleHBsYW5hdGlvbjogXCJUaGUgY2FtcGFpZ24gd2l0aCB0aGUgZ2l2ZW4gSUQgZG9lcyBub3QgZXhpc3QuXCIsXG4gICAgY29kZTogNDEwMixcbiAgICBodHRwU3RhdHVzQ29kZTogNDA0LFxuICB9LFxuICBJTlZBTElEX0NBTVBBSUdOX1NUQVRVUzoge1xuICAgIG5hbWU6IFwiSW52YWxpZFN0YXR1c1ZhbHVlXCIsXG4gICAgbWVzc2FnZTogXCJTdGF0dXMgdmFsdWUgaXMgaW52YWxpZC5cIixcbiAgICBleHBsYW5hdGlvbjogXCJUaGUgcHJvdmlkZWQgc3RhdHVzIHZhbHVlIGlzIGludmFsaWQuXCIsXG4gICAgY29kZTogNDEwMyxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwXG4gIH0sXG4gIENBTVBBSUdOX05PVF9BQ1RJVkU6IHtcbiAgICBuYW1lOiBcIkNhbXBhaWduTm90QWN0aXZlXCIsXG4gICAgbWVzc2FnZTogXCJDYW1wYWlnbiBpcyBOb3QgQWN0aXZlLlwiLFxuICAgIGV4cGxhbmF0aW9uOiBcIlRoZSBwcm92aWRlZCBjYW1wYWlnbiBpcyBJbmFjdGl2ZS5cIixcbiAgICBjb2RlOiA0MTA0LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDBcbiAgfSxcbiAgU0VHTUVOVFNfQUxSRUFEWV9FWElTVFM6IHtcbiAgICBuYW1lOiBcIlNlZ21lbnRBbHJlYWR5RXhpc3RzXCIsXG4gICAgbWVzc2FnZTogXCJUaGlzIHNlZ21lbnQgQWxyZWFkeSBFeGlzdHNcIixcbiAgICBleHBsYW5hdGlvbjogXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIHdoaWxlIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgIGNvZGU6IDQxMDUsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgUkVQT1JUX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiUmVwb3J0Tm90Rm91bmRcIixcbiAgICBtZXNzYWdlOiBcIlJlcG9ydCBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjogXCJSZXBvcnQgbm90IGZvdW5kLlwiLFxuICAgIGNvZGU6IDQxMDYsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgSU5WQUxJRF9JTlBVVDoge1xuICAgIG5hbWU6IFwiSU5WQUxJRCBJTlBVVFwiLFxuICAgIG1lc3NhZ2U6IFwiVXNpbmcgSW52YWxpZCBJbnB1dFwiLFxuICAgIGV4cGxhbmF0aW9uOiBcInlvdSBhcmUgdXNpbmcgaW52YWxpZCBpbnB1dFwiLFxuICAgIGNvZGU6IDQxMDYsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgUkVRVUlSRURfQUREUkVTU19ERVRBSUxTOiB7XG4gICAgbmFtZTogXCJSZXF1aXJlZEFkZHJlc3NEZXRhaWxzXCIsXG4gICAgbWVzc2FnZTogXCJBZGRyZXNzIGRldGFpbHMgYXJlIHJlcXVpcmVkXCIsXG4gICAgZXhwbGFuYXRpb246IFwiVGhlIHVzZXIgZGlkIG5vdCBwcm92aWRlIHRoZSBuZWNlc3NhcnkgYWRkcmVzcyBpbmZvcm1hdGlvbiBuZWVkZWQgdG8gcHJvY2VlZFwiLFxuICAgIGNvZGU6IDQxMDcsXG4gICAgaHR0cFN0YXR1c0NvZGU6IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULFxuICB9LFxuICBSRVFVSVJFRF9GSUVMRDoge1xuICAgIG5hbWU6IFwiUmVxdWlyZWRGaWVsZFwiLFxuICAgIG1lc3NhZ2U6IFwiQSByZXF1aXJlZCBmaWVsZCBpcyBtaXNzaW5nXCIsXG4gICAgZXhwbGFuYXRpb246IFwiT25lIG9yIG1vcmUgcmVxdWlyZWQgZmllbGRzIHdlcmUgbm90IHByb3ZpZGVkIGluIHRoZSByZXF1ZXN0XCIsXG4gICAgY29kZTogNDEwOCxcbiAgICBodHRwU3RhdHVzQ29kZTogU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsXG4gIH0sXG4gIElOVkFMSURfQ0FSRF9ERVRBSUxTOiB7XG4gICAgbmFtZTogXCJJbnZhbGlkQ2FyZERldGFpbHNcIixcbiAgICBtZXNzYWdlOiBcIkNhcmQgZGV0YWlscyBwcm92aWRlZCBhcmUgaW52YWxpZFwiLFxuICAgIGV4cGxhbmF0aW9uOiBcIlRoZSBjYXJkIG51bWJlciwgZXhwaXJ5IGRhdGUsIENWViwgb3Igb3RoZXIgZGV0YWlscyBhcmUgaW5jb3JyZWN0IG9yIGltcHJvcGVybHkgZm9ybWF0dGVkXCIsXG4gICAgY29kZTogNDEwOSxcbiAgICBodHRwU3RhdHVzQ29kZTogU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsXG4gIH0sXG4gIFVTRVJfV0lUSERSQVdBTF9MSU1JVF9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIkZhaWxUb0ZldGNoVXNlcldpdGhkcmF3YWxMaW1pdFwiLFxuICAgIG1lc3NhZ2U6IFwiRmFpbCB0byBmZXRjaCB1c2VyIHdpdGhkcmF3YWwgbGltaXRcIixcbiAgICBleHBsYW5hdGlvbjogXCJmYWlsIHRvIGZldGNoIHVzZXIgd2l0aGRyYXdhbCBsaW1pdFwiLFxuICAgIGNvZGU6IDQxMTAsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgTUlTU0lOR19DVVNUT01FUl9JRDoge1xuICAgIG5hbWU6IFwiTWlzc2luZ0N1c3RvbWVySWRcIixcbiAgICBtZXNzYWdlOiBcIkN1c3RvbWVyIElkIE1pc3NpbmcuXCIsXG4gICAgZXhwbGFuYXRpb246IFwiTWlzc2luZyBjdXN0b21lciBJRFwiLFxuICAgIGNvZGU6IDQxMTEsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgVU5TVVBQT1JURURfUEFZTUVOVF9QUk9WSURFUjoge1xuICAgIG5hbWU6IFwiVW5zdXBwb3J0ZWRQYXltZW50UHJvdmlkZXJcIixcbiAgICBtZXNzYWdlOiBcIlVuc3VwcG9ydGVkIHBheW1lbnQgcHJvdmlkZXIuXCIsXG4gICAgZXhwbGFuYXRpb246IFwiUGF5bWVudCBwcm92aWRlciBpcyBub3Qgc3VwcG9ydGVkXCIsXG4gICAgY29kZTogNDExMixcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBHTE9CQUxfU0VUVElOR19OT1RfRk9VTkQ6IHtcbiAgbmFtZTogXCJHbG9iYWxTZXR0aW5nTm90Rm91bmRcIixcbiAgbWVzc2FnZTogXCJHbG9iYWwgc2V0dGluZyBub3QgZm91bmRcIixcbiAgZXhwbGFuYXRpb246IFwiUmVxdWVzdGVkIGdsb2JhbCBzZXR0aW5nIGtleSBkb2VzIG5vdCBleGlzdCBpbiBkYXRhYmFzZVwiLFxuICBjb2RlOiA0MTEzLFxuICBodHRwU3RhdHVzQ29kZTogNDAwLFxufSxcbiAgQUNDT1VOVF9TVVNQRU5ERUQ6IHtcbiAgICBuYW1lOiBcIkFjY291bnRTdXNwZW5kZWRcIixcbiAgICBtZXNzYWdlOiBcIllvdXIgYWNjb3VudCBoYXMgYmVlbiB0ZW1wb3JhcmlseSBzdXNwZW5kZWQuIFBsZWFzZSBjb250YWN0IHN1cHBvcnQgZm9yIGFzc2lzdGFuY2UuXCIsXG4gICAgZXhwbGFuYXRpb246IFwiWW91ciBhY2NvdW50IGlzIGN1cnJlbnRseSBzdXNwZW5kZWQgYW5kIGFjY2VzcyBoYXMgYmVlbiByZXN0cmljdGVkLlwiLFxuICAgIGNvZGU6IDQxMTMsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMyxcbiAgfSxcbiAgQUNDT1VOVF9VTkRFUl9SRVZJRVc6IHtcbiAgICBuYW1lOiBcIkFjY291bnRVbmRlclJldmlld1wiLFxuICAgIG1lc3NhZ2U6IFwiWW91ciBhY2NvdW50IGlzIGN1cnJlbnRseSB1bmRlciByZXZpZXcuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgZXhwbGFuYXRpb246IFwiWW91ciBhY2NvdW50IGlzIHVuZGVyIHJldmlldyBhbmQgd2lsbCBiZSByZXN0b3JlZCBvbmNlIHRoZSByZXZpZXcgaXMgY29tcGxldGUuXCIsXG4gICAgY29kZTogNDExNCxcbiAgICBodHRwU3RhdHVzQ29kZTogNDAzLFxuICB9LFxuICBBQ0NPVU5UX0NMT1NFRDoge1xuICAgIG5hbWU6IFwiQWNjb3VudENsb3NlZFwiLFxuICAgIG1lc3NhZ2U6IFwiWW91ciBhY2NvdW50IGhhcyBiZWVuIHBlcm1hbmVudGx5IGNsb3NlZC4gUGxlYXNlIGNvbnRhY3Qgc3VwcG9ydCBpZiB5b3UgYmVsaWV2ZSB0aGlzIGlzIGFuIGVycm9yLlwiLFxuICAgIGV4cGxhbmF0aW9uOiBcIllvdXIgYWNjb3VudCBoYXMgYmVlbiBwZXJtYW5lbnRseSBjbG9zZWQgYW5kIGNhbm5vdCBiZSByZXN0b3JlZC5cIixcbiAgICBjb2RlOiA0MTE1LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDMsXG4gIH0sXG4gIFRBR19OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIlRhZ05vdEZvdW5kXCIsXG4gICAgbWVzc2FnZTogXCJUYWcgbm90IGZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246IFwiVGFnIG5vdCBmb3VuZC5cIixcbiAgICBjb2RlOiA0MTEzLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIENBVEVHT1JZX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiQ2F0ZWdvcnlOb3RGb3VuZFwiLFxuICAgIG1lc3NhZ2U6IFwiQ2F0ZWdvcnkgbm90IGZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246IFwiVGhlIHJlcXVlc3RlZCBjYXRlZ29yeSBjb3VsZCBub3QgYmUgZm91bmQgaW4gdGhlIGRhdGFiYXNlLlwiLFxuICAgIGNvZGU6IDUwMDEsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwNCxcbiAgfSxcbiAgQ0FURUdPUllfRVhJU1RTOiB7XG4gICAgbmFtZTogXCJDYXRlZ29yeUV4aXN0c1wiLFxuICAgIG1lc3NhZ2U6IFwiQ2F0ZWdvcnkgYWxyZWFkeSBleGlzdHNcIixcbiAgICBleHBsYW5hdGlvbjogXCJBIGNhdGVnb3J5IHdpdGggdGhlIHNhbWUgc2x1ZyBhbHJlYWR5IGV4aXN0cy5cIixcbiAgICBjb2RlOiA1MDAyLFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDAsXG4gIH0sXG4gIFNVQkNBVEVHT1JZX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiU3ViY2F0ZWdvcnlOb3RGb3VuZFwiLFxuICAgIG1lc3NhZ2U6IFwiU3ViY2F0ZWdvcnkgbm90IGZvdW5kXCIsXG4gICAgZXhwbGFuYXRpb246IFwiVGhlIHJlcXVlc3RlZCBzdWJjYXRlZ29yeSBjb3VsZCBub3QgYmUgZm91bmQgaW4gdGhlIGRhdGFiYXNlIG9yIGRvZXMgbm90IGJlbG9uZyB0byB0aGUgY2F0ZWdvcnkuXCIsXG4gICAgY29kZTogNTAwMyxcbiAgICBodHRwU3RhdHVzQ29kZTogNDA0LFxuICB9LFxuICBTVUJDQVRFR09SWV9FWElTVFM6IHtcbiAgICBuYW1lOiBcIlN1YmNhdGVnb3J5RXhpc3RzXCIsXG4gICAgbWVzc2FnZTogXCJTdWJjYXRlZ29yeSBhbHJlYWR5IGV4aXN0c1wiLFxuICAgIGV4cGxhbmF0aW9uOiBcIkEgc3ViY2F0ZWdvcnkgd2l0aCB0aGUgc2FtZSBzbHVnIGFscmVhZHkgZXhpc3RzLlwiLFxuICAgIGNvZGU6IDUwMDQsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbiAgUFJPRFVDVF9OT1RfRk9VTkQ6IHtcbiAgICBuYW1lOiBcIlByb2R1Y3ROb3RGb3VuZFwiLFxuICAgIG1lc3NhZ2U6IFwiUHJvZHVjdCBub3QgZm91bmRcIixcbiAgICBleHBsYW5hdGlvbjogXCJUaGUgcmVxdWVzdGVkIHByb2R1Y3QgY291bGQgbm90IGJlIGZvdW5kIGluIHRoZSBkYXRhYmFzZS5cIixcbiAgICBjb2RlOiA1MDA1LFxuICAgIGh0dHBTdGF0dXNDb2RlOiA0MDQsXG4gIH0sXG4gIFBST0RVQ1RfRVhJU1RTOiB7XG4gICAgbmFtZTogXCJQcm9kdWN0RXhpc3RzXCIsXG4gICAgbWVzc2FnZTogXCJQcm9kdWN0IGFscmVhZHkgZXhpc3RzXCIsXG4gICAgZXhwbGFuYXRpb246IFwiQSBwcm9kdWN0IHdpdGggdGhlIHNhbWUgc2x1ZyBvciBiYXNlIGNvZGUgYWxyZWFkeSBleGlzdHMuXCIsXG4gICAgY29kZTogNTAwNixcbiAgICBodHRwU3RhdHVzQ29kZTogNDAwLFxuICB9LFxuICBFTlFVSVJZX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiRW5xdWlyeU5vdEZvdW5kXCIsXG4gICAgbWVzc2FnZTogXCJFbnF1aXJ5IG5vdCBmb3VuZFwiLFxuICAgIGV4cGxhbmF0aW9uOiBcIlRoZSByZXF1ZXN0ZWQgZW5xdWlyeSBjb3VsZCBub3QgYmUgZm91bmQgaW4gdGhlIGRhdGFiYXNlLlwiLFxuICAgIGNvZGU6IDUwMDcsXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwNCxcbiAgfSxcbiAgRlJBTkNISVNFX0xPQ0FUSU9OX05PVF9GT1VORDoge1xuICAgIG5hbWU6IFwiRnJhbmNoaXNlTG9jYXRpb25Ob3RGb3VuZFwiLFxuICAgIG1lc3NhZ2U6IFwiRnJhbmNoaXNlIGxvY2F0aW9uIG5vdCBmb3VuZFwiLFxuICAgIGV4cGxhbmF0aW9uOiBcIlRoZSByZXF1ZXN0ZWQgZnJhbmNoaXNlIGxvY2F0aW9uIGNvdWxkIG5vdCBiZSBmb3VuZCBpbiB0aGUgZGF0YWJhc2UuXCIsXG4gICAgY29kZTogNTAwOCxcbiAgICBodHRwU3RhdHVzQ29kZTogNDA0LFxuICB9LFxuICBJTlZBTElEX1NUQVRFOiB7XG4gICAgbmFtZTogXCJJbnZhbGlkU3RhdGVcIixcbiAgICBtZXNzYWdlOiBcIkludmFsaWQgc3RhdGVcIixcbiAgICBleHBsYW5hdGlvbjogXCJUaGUgcHJvdmlkZWQgc3RhdGUgaXMgbm90IGEgcmVjb2duaXplZCBJbmRpYW4gc3RhdGUgb3IgdW5pb24gdGVycml0b3J5LlwiLFxuICAgIGNvZGU6IDUwMDksXG4gICAgaHR0cFN0YXR1c0NvZGU6IDQwMCxcbiAgfSxcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLGdCQUFBLEdBQUFDLE9BQUE7QUFFTyxNQUFNQyxNQUFNLEdBQUFDLE9BQUEsQ0FBQUQsTUFBQSxHQUFHO0VBQ3BCRSxtQkFBbUIsRUFBRTtJQUNyQkMsSUFBSSxFQUFFLHFCQUFxQjtJQUMzQkMsT0FBTyxFQUFFLGlDQUFpQztJQUMxQ0MsV0FBVyxFQUNULHlGQUF5RjtJQUMzRkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFQyw0QkFBVyxDQUFDQztFQUM5QixDQUFDO0VBRURDLG9CQUFvQixFQUFFO0lBQ3BCUCxJQUFJLEVBQUUsc0JBQXNCO0lBQzVCQyxPQUFPLEVBQUUsK0JBQStCO0lBQ3hDQyxXQUFXLEVBQ1QsdUZBQXVGO0lBQ3pGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUVDLDRCQUFXLENBQUNHO0VBQzlCLENBQUM7RUFFREMsc0JBQXNCLEVBQUU7SUFDdEJULElBQUksRUFBRSx3QkFBd0I7SUFDOUJDLE9BQU8sRUFBRSxpQ0FBaUM7SUFDMUNDLFdBQVcsRUFDVCw4RkFBOEY7SUFDaEdDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRUMsNEJBQVcsQ0FBQ0c7RUFDOUIsQ0FBQztFQUVERSxzQkFBc0IsRUFBRTtJQUN0QlYsSUFBSSxFQUFFLHdCQUF3QjtJQUM5QkMsT0FBTyxFQUFFLHNDQUFzQztJQUMvQ0MsV0FBVyxFQUNULDhGQUE4RjtJQUNoR0MsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFQyw0QkFBVyxDQUFDTTtFQUM5QixDQUFDO0VBRURDLHFCQUFxQixFQUFFO0lBQ3JCWixJQUFJLEVBQUUsdUJBQXVCO0lBQzdCQyxPQUFPLEVBQUUsa0NBQWtDO0lBQzNDQyxXQUFXLEVBQ1QsK0VBQStFO0lBQ2pGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUVDLDRCQUFXLENBQUNHO0VBQzlCLENBQUM7RUFFREssb0JBQW9CLEVBQUU7SUFDcEJiLElBQUksRUFBRSxzQkFBc0I7SUFDNUJDLE9BQU8sRUFBRSxzQkFBc0I7SUFDL0JDLFdBQVcsRUFDVCxnSkFBZ0o7SUFDbEpDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRUMsNEJBQVcsQ0FBQ0c7RUFDOUIsQ0FBQztFQUNDTSxjQUFjLEVBQUU7SUFDZGQsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QkMsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QkMsV0FBVyxFQUFFLDZEQUE2RDtJQUMxRUMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFQyw0QkFBVyxDQUFDQztFQUM5QixDQUFDO0VBQ0NTLDZCQUE2QixFQUFFO0lBQy9CZixJQUFJLEVBQUUsK0JBQStCO0lBQ3JDQyxPQUFPLEVBQUUsK0JBQStCO0lBQ3hDQyxXQUFXLEVBQUUsK0RBQStEO0lBQzVFQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUVDLDRCQUFXLENBQUNDO0VBQzlCLENBQUM7RUFDRFUsaUJBQWlCLEVBQUU7SUFDakJoQixJQUFJLEVBQUUsaUJBQWlCO0lBQ3ZCQyxPQUFPLEVBQUUsK0NBQStDO0lBQ3hEQyxXQUFXLEVBQ1QsaUVBQWlFO0lBQ25FQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUVDLDRCQUFXLENBQUNHO0VBQzlCLENBQUM7RUFDRFMsMEJBQTBCLEVBQUU7SUFDNUJqQixJQUFJLEVBQUUsMEJBQTBCO0lBQ2hDQyxPQUFPLEVBQUUsNEJBQTRCO0lBQ3JDQyxXQUFXLEVBQ1QsNkVBQTZFO0lBQy9FQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUVDLDRCQUFXLENBQUNHO0VBQzdCLENBQUM7RUFDQVUsc0JBQXNCLEVBQUU7SUFDdEJsQixJQUFJLEVBQUUsd0JBQXdCO0lBQzlCQyxPQUFPLEVBQUUsa0NBQWtDO0lBQzNDQyxXQUFXLEVBQ1QsbUZBQW1GO0lBQ3JGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUVDLDRCQUFXLENBQUNHO0VBQzlCLENBQUM7RUFDRFcsd0JBQXdCLEVBQUU7SUFDeEJuQixJQUFJLEVBQUUsd0JBQXdCO0lBQzlCQyxPQUFPLEVBQUUsMEJBQTBCO0lBQ25DQyxXQUFXLEVBQ1QsaUVBQWlFO0lBQ25FQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUVDLDRCQUFXLENBQUNHO0VBQzlCLENBQUM7RUFDRFksd0JBQXdCLEVBQUU7SUFDeEJwQixJQUFJLEVBQUUsMEJBQTBCO0lBQ2hDQyxPQUFPLEVBQ0wsaUZBQWlGO0lBQ25GQyxXQUFXLEVBQ1QsMElBQTBJO0lBQzVJQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEO0VBQ0FpQixjQUFjLEVBQUU7SUFDZHJCLElBQUksRUFBRSxnQkFBZ0I7SUFDdEJDLE9BQU8sRUFBRSwrQkFBK0I7SUFDeENDLFdBQVcsRUFBRSxpREFBaUQ7SUFDOURDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RrQixvQkFBb0IsRUFBRTtJQUNwQnRCLElBQUksRUFBRSxzQkFBc0I7SUFDNUJDLE9BQU8sRUFBRSwyQkFBMkI7SUFDcENDLFdBQVcsRUFBRSw4RUFBOEU7SUFDM0ZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RtQixxQkFBcUIsRUFBRTtJQUNyQnZCLElBQUksRUFBRSx1QkFBdUI7SUFDN0JDLE9BQU8sRUFBRSwrQkFBK0I7SUFDeENDLFdBQVcsRUFBRSxxREFBcUQ7SUFDbEVDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RvQix3QkFBd0IsRUFBRTtJQUN4QnhCLElBQUksRUFBRSwwQkFBMEI7SUFDaENDLE9BQU8sRUFBRSxpQ0FBaUM7SUFDMUNDLFdBQVcsRUFBRSx5RUFBeUU7SUFDdEZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRUMsNEJBQVcsQ0FBQ0c7RUFDOUIsQ0FBQztFQUNEaUIscUJBQXFCLEVBQUU7SUFDckJ6QixJQUFJLEVBQUUsdUJBQXVCO0lBQzdCQyxPQUFPLEVBQUUsOEJBQThCO0lBQ3ZDQyxXQUFXLEVBQUUsdUNBQXVDO0lBQ3BEQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUVDLDRCQUFXLENBQUNxQjtFQUM5QixDQUFDO0VBQ0RDLHlCQUF5QixFQUFFO0lBQ3pCM0IsSUFBSSxFQUFFLDJCQUEyQjtJQUNqQ0MsT0FBTyxFQUFFLDJCQUEyQjtJQUNwQ0MsV0FBVyxFQUNULHNGQUFzRjtJQUN4RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHdCLG1CQUFtQixFQUFFO0lBQ25CNUIsSUFBSSxFQUFFLHFCQUFxQjtJQUMzQkMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQ0MsV0FBVyxFQUNULGlFQUFpRTtJQUNuRUMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFQyw0QkFBVyxDQUFDRztFQUM5QixDQUFDO0VBQ0RxQixtQkFBbUIsRUFBRTtJQUNuQjdCLElBQUksRUFBRSxxQkFBcUI7SUFDM0JDLE9BQU8sRUFBRSwwQkFBMEI7SUFDbkNDLFdBQVcsRUFBRSxrREFBa0Q7SUFDL0RDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRUMsNEJBQVcsQ0FBQ0c7RUFDOUIsQ0FBQztFQUNEc0IsY0FBYyxFQUFFO0lBQ2Q5QixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCQyxPQUFPLEVBQUUsMkJBQTJCO0lBQ3BDQyxXQUFXLEVBQUUsNENBQTRDO0lBQ3pEQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUVDLDRCQUFXLENBQUNHO0VBQzlCLENBQUM7RUFDRHVCLHlCQUF5QixFQUFFO0lBQ3pCL0IsSUFBSSxFQUFFLHlCQUF5QjtJQUMvQkMsT0FBTyxFQUFFLDJCQUEyQjtJQUNwQ0MsV0FBVyxFQUNULDZFQUE2RTtJQUMvRUMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFQyw0QkFBVyxDQUFDTTtFQUM5QixDQUFDO0VBQ0RxQixtQkFBbUIsRUFBRTtJQUNuQmhDLElBQUksRUFBRSxxQkFBcUI7SUFDM0JDLE9BQU8sRUFBRSwyQkFBMkI7SUFDcENDLFdBQVcsRUFDVCw2RUFBNkU7SUFDL0VDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRUMsNEJBQVcsQ0FBQ007RUFDOUIsQ0FBQztFQUNEc0IsY0FBYyxFQUFFO0lBQ2RqQyxJQUFJLEVBQUUscUJBQXFCO0lBQzNCQyxPQUFPLEVBQUUsdUJBQXVCO0lBQ2hDQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUVDLDRCQUFXLENBQUNNO0VBQzlCLENBQUM7RUFDRHVCLDhCQUE4QixFQUFFO0lBQzlCbEMsSUFBSSxFQUFFLDZCQUE2QjtJQUNuQ0MsT0FBTyxFQUFFLCtCQUErQjtJQUN4Q0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDREwsbUJBQW1CLEVBQUU7SUFDckJDLElBQUksRUFBRSxxQkFBcUI7SUFDM0JDLE9BQU8sRUFBRSxpQ0FBaUM7SUFDMUNDLFdBQVcsRUFDVCx5RkFBeUY7SUFDM0ZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRUMsNEJBQVcsQ0FBQ0M7RUFDOUIsQ0FBQztFQUVEQyxvQkFBb0IsRUFBRTtJQUNwQlAsSUFBSSxFQUFFLHNCQUFzQjtJQUM1QkMsT0FBTyxFQUFFLCtCQUErQjtJQUN4Q0MsV0FBVyxFQUNULHVGQUF1RjtJQUN6RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFQyw0QkFBVyxDQUFDRztFQUM5QixDQUFDO0VBRURDLHNCQUFzQixFQUFFO0lBQ3RCVCxJQUFJLEVBQUUsd0JBQXdCO0lBQzlCQyxPQUFPLEVBQUUsaUNBQWlDO0lBQzFDQyxXQUFXLEVBQ1QsOEZBQThGO0lBQ2hHQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUVDLDRCQUFXLENBQUNHO0VBQzlCLENBQUM7RUFFREUsc0JBQXNCLEVBQUU7SUFDdEJWLElBQUksRUFBRSx3QkFBd0I7SUFDOUJDLE9BQU8sRUFBRSxzQ0FBc0M7SUFDL0NDLFdBQVcsRUFDVCw4RkFBOEY7SUFDaEdDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRUMsNEJBQVcsQ0FBQ007RUFDOUIsQ0FBQztFQUVEQyxxQkFBcUIsRUFBRTtJQUNyQlosSUFBSSxFQUFFLHVCQUF1QjtJQUM3QkMsT0FBTyxFQUFFLGtDQUFrQztJQUMzQ0MsV0FBVyxFQUNULCtFQUErRTtJQUNqRkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFQyw0QkFBVyxDQUFDRztFQUM5QixDQUFDO0VBRURLLG9CQUFvQixFQUFFO0lBQ3BCYixJQUFJLEVBQUUsc0JBQXNCO0lBQzVCQyxPQUFPLEVBQUUsc0JBQXNCO0lBQy9CQyxXQUFXLEVBQ1QsZ0pBQWdKO0lBQ2xKQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUVDLDRCQUFXLENBQUNHO0VBQzlCLENBQUM7RUFFQzJCLCtCQUErQixFQUFFO0lBQy9CbkMsSUFBSSxFQUFFLDhCQUE4QjtJQUNwQ0MsT0FBTyxFQUFFLGlFQUFpRTtJQUMxRUMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRGdDLGtCQUFrQixFQUFFO0lBQ2xCcEMsSUFBSSxFQUFFLHVCQUF1QjtJQUM3QkMsT0FBTyxFQUFFLG1DQUFtQztJQUM1Q0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRGlDLGlCQUFpQixFQUFFO0lBQ2pCckMsSUFBSSxFQUFFLG9CQUFvQjtJQUMxQkMsT0FBTyxFQUFFLG1DQUFtQztJQUM1Q0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRGtDLG1CQUFtQixFQUFFO0lBQ25CdEMsSUFBSSxFQUFFLHFCQUFxQjtJQUMzQkMsT0FBTyxFQUFFLHdCQUF3QjtJQUNqQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRG1DLGdCQUFnQixFQUFFO0lBQ2hCdkMsSUFBSSxFQUFFLG9CQUFvQjtJQUMxQkMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRE8scUJBQXFCLEVBQUU7SUFDckJYLElBQUksRUFBRSxxQkFBcUI7SUFDM0JDLE9BQU8sRUFBRSx1QkFBdUI7SUFDaENDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RvQyxhQUFhLEVBQUU7SUFDYnhDLElBQUksRUFBRSxjQUFjO0lBQ3BCQyxPQUFPLEVBQUUseURBQXlEO0lBQ2xFQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEcUMsb0JBQW9CLEVBQUU7SUFDcEJ6QyxJQUFJLEVBQUUsZUFBZTtJQUNyQkMsT0FBTyxFQUFFLHlEQUF5RDtJQUNsRUMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHNDLGVBQWUsRUFBRTtJQUNmMUMsSUFBSSxFQUFFLGVBQWU7SUFDckJDLE9BQU8sRUFBRSxzQkFBc0I7SUFDL0JDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0R1QyxvQkFBb0IsRUFBRTtJQUNwQjNDLElBQUksRUFBRSxvQkFBb0I7SUFDMUJDLE9BQU8sRUFBRSxzQkFBc0I7SUFDL0JDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0R3QyxvQkFBb0IsRUFBRTtJQUNwQjVDLElBQUksRUFBRSxvQkFBb0I7SUFDMUJDLE9BQU8sRUFBRSxrREFBa0Q7SUFDM0RDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0R5QyxvQkFBb0IsRUFBRTtJQUNwQjdDLElBQUksRUFBRSxvQkFBb0I7SUFDMUJDLE9BQU8sRUFBRSxzQkFBc0I7SUFDL0JDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0QwQyxxQkFBcUIsRUFBRTtJQUNyQjlDLElBQUksRUFBRSxxQkFBcUI7SUFDM0JDLE9BQU8sRUFBRSx1QkFBdUI7SUFDaENDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0cyQyxpQkFBaUIsRUFBRTtJQUNyQi9DLElBQUksRUFBRSxpQkFBaUI7SUFDdkJDLE9BQU8sRUFBRSwyQkFBMkI7SUFDcENDLFdBQVcsRUFBRSwrRUFBK0U7SUFDNUZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0Q0QyxpQkFBaUIsRUFBRTtJQUNqQmhELElBQUksRUFBRSxpQkFBaUI7SUFDdkJDLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUJDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0Q2Qyw4QkFBOEIsRUFBRTtJQUM5QmpELElBQUksRUFBRSw0QkFBNEI7SUFDbENDLE9BQU8sRUFBRSxnQ0FBZ0M7SUFDekNDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0Q4Qyx1QkFBdUIsRUFBRTtJQUN2QmxELElBQUksRUFBRSxzQkFBc0I7SUFDNUJDLE9BQU8sRUFBRSwwQkFBMEI7SUFDbkNDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0QrQyxnQkFBZ0IsRUFBRTtJQUNoQm5ELElBQUksRUFBRSxnQkFBZ0I7SUFDdEJDLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0JDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxDQUFDO0lBQ1BDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RnRCw2QkFBNkIsRUFBRTtJQUM3QnBELElBQUksRUFBRSw0QkFBNEI7SUFDbENDLE9BQU8sRUFBRSxzQ0FBc0M7SUFDL0NDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RpRCxhQUFhLEVBQUU7SUFDYnJELElBQUksRUFBRSxhQUFhO0lBQ25CQyxPQUFPLEVBQUUsZUFBZTtJQUN4QkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLENBQUM7SUFDUEMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRGtELGVBQWUsRUFBRTtJQUNmdEQsSUFBSSxFQUFFLGVBQWU7SUFDckJDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUJDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RtRCxZQUFZLEVBQUU7SUFDWnZELElBQUksRUFBRSxhQUFhO0lBQ25CQyxPQUFPLEVBQUUsZUFBZTtJQUN4QkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRG9ELGVBQWUsRUFBRTtJQUNmeEQsSUFBSSxFQUFFLGVBQWU7SUFDckJDLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekJDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RxRCxnQkFBZ0IsRUFBRTtJQUNoQnpELElBQUksRUFBRSxnQkFBZ0I7SUFDdEJDLE9BQU8sRUFBRSx5QkFBeUI7SUFDbENDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RzRCxtQkFBbUIsRUFBRTtJQUNuQjFELElBQUksRUFBRSxtQkFBbUI7SUFDekJDLE9BQU8sRUFBRSxxQkFBcUI7SUFDOUJDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0R1RCxrQkFBa0IsRUFBRTtJQUNsQjNELElBQUksRUFBRSxrQkFBa0I7SUFDeEJDLE9BQU8sRUFBRSxvQkFBb0I7SUFDN0JDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0R3RCxpQkFBaUIsRUFBRTtJQUNqQjVELElBQUksRUFBRSxtQkFBbUI7SUFDekJDLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUJDLFdBQVcsRUFDVCxrRUFBa0U7SUFDcEVDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0R5RCxrQkFBa0IsRUFBRTtJQUNsQjdELElBQUksRUFBRSxrQkFBa0I7SUFDeEJDLE9BQU8sRUFBRSxvQkFBb0I7SUFDN0JDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxDQUFDO0lBQ1BDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0QwRCxjQUFjLEVBQUU7SUFDZDlELElBQUksRUFBRSxjQUFjO0lBQ3BCQyxPQUFPLEVBQUUsZ0JBQWdCO0lBQ3pCQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEMkQsb0JBQW9CLEVBQUU7SUFDcEIvRCxJQUFJLEVBQUUsb0JBQW9CO0lBQzFCQyxPQUFPLEVBQUUsc0JBQXNCO0lBQy9CQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNENEQsWUFBWSxFQUFFO0lBQ1poRSxJQUFJLEVBQUUsYUFBYTtJQUNuQkMsT0FBTyxFQUFFLCtDQUErQztJQUN4REMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDZELGtCQUFrQixFQUFFO0lBQ2xCakUsSUFBSSxFQUFFLGtCQUFrQjtJQUN4QkMsT0FBTyxFQUFFLHlDQUF5QztJQUNsREMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDhELHlCQUF5QixFQUFFO0lBQ3pCbEUsSUFBSSxFQUFFLHdCQUF3QjtJQUM5QkMsT0FBTyxFQUFFLDJCQUEyQjtJQUNwQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRCtELHdCQUF3QixFQUFFO0lBQ3hCbkUsSUFBSSxFQUFFLHVCQUF1QjtJQUM3QkMsT0FBTyxFQUFFLHlCQUF5QjtJQUNsQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRGdFLFdBQVcsRUFBRTtJQUNYcEUsSUFBSSxFQUFFLFlBQVk7SUFDbEJDLE9BQU8sRUFBRSxxQkFBcUI7SUFDOUJDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RpRSw2QkFBNkIsRUFBRTtJQUM3QnJFLElBQUksRUFBRSw0QkFBNEI7SUFDbENDLE9BQU8sRUFBRSwrQkFBK0I7SUFDeENDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RrRSxpQkFBaUIsRUFBRTtJQUNqQnRFLElBQUksRUFBRSxpQkFBaUI7SUFDdkJDLE9BQU8sRUFBRSw0Q0FBNEM7SUFDckRDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RtRSx5QkFBeUIsRUFBRTtJQUN6QnZFLElBQUksRUFBRSx5QkFBeUI7SUFDL0JDLE9BQU8sRUFBRSw0QkFBNEI7SUFDckNDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RvRSxxQkFBcUIsRUFBRTtJQUNyQnhFLElBQUksRUFBRSxxQkFBcUI7SUFDM0JDLE9BQU8sRUFBRSxvREFBb0Q7SUFDN0RDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RxRSx5QkFBeUIsRUFBRTtJQUN6QnpFLElBQUksRUFBRSx3QkFBd0I7SUFDOUJDLE9BQU8sRUFBRSxvQ0FBb0M7SUFDN0NDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RzRSxnQkFBZ0IsRUFBRTtJQUNoQjFFLElBQUksRUFBRSxnQkFBZ0I7SUFDdEJDLE9BQU8sRUFBRSw4REFBOEQ7SUFDdkVDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0R1RSxrQkFBa0IsRUFBRTtJQUNsQjNFLElBQUksRUFBRSxrQkFBa0I7SUFDeEJDLE9BQU8sRUFDTCw2RUFBNkU7SUFDL0VDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0R3RSwwQkFBMEIsRUFBRTtJQUMxQjVFLElBQUksRUFBRSx5QkFBeUI7SUFDL0JDLE9BQU8sRUFBRSwrQkFBK0I7SUFDeENDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0R5RSw4QkFBOEIsRUFBRTtJQUM5QjdFLElBQUksRUFBRSw2QkFBNkI7SUFDbkNDLE9BQU8sRUFBRSxnQ0FBZ0M7SUFDekNDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0QwRSxxQkFBcUIsRUFBRTtJQUNyQjlFLElBQUksRUFBRSxxQkFBcUI7SUFDM0JDLE9BQU8sRUFBRSx1QkFBdUI7SUFDaENDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0QyRSxlQUFlLEVBQUU7SUFDZi9FLElBQUksRUFBRSxlQUFlO0lBQ3JCQyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNENEUsV0FBVyxFQUFFO0lBQ1hoRixJQUFJLEVBQUUsWUFBWTtJQUNsQkMsT0FBTyxFQUFFLGFBQWE7SUFDdEJDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0Q2RSxtQkFBbUIsRUFBRTtJQUNuQmpGLElBQUksRUFBRSxtQkFBbUI7SUFDekJDLE9BQU8sRUFBRSwwQkFBMEI7SUFDbkNDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0Q4RSxpQkFBaUIsRUFBRTtJQUNqQmxGLElBQUksRUFBRSxrQkFBa0I7SUFDeEJDLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUJDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0QrRSxjQUFjLEVBQUU7SUFDZG5GLElBQUksRUFBRSxjQUFjO0lBQ3BCQyxPQUFPLEVBQUUsZ0JBQWdCO0lBQ3pCQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEZ0YsZUFBZSxFQUFFO0lBQ2ZwRixJQUFJLEVBQUUsZUFBZTtJQUNyQkMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRGlGLGtCQUFrQixFQUFFO0lBQ2xCckYsSUFBSSxFQUFFLGtCQUFrQjtJQUN4QkMsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRGtGLG9CQUFvQixFQUFFO0lBQ3BCdEYsSUFBSSxFQUFFLG9CQUFvQjtJQUMxQkMsT0FBTyxFQUFFLHNCQUFzQjtJQUMvQkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRG1GLDZCQUE2QixFQUFFO0lBQzdCdkYsSUFBSSxFQUFFLDRCQUE0QjtJQUNsQ0MsT0FBTyxFQUFFLHNDQUFzQztJQUMvQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRG9GLHVCQUF1QixFQUFFO0lBQ3ZCeEYsSUFBSSxFQUFFLHNCQUFzQjtJQUM1QkMsT0FBTyxFQUFFLGtDQUFrQztJQUMzQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHFGLHlCQUF5QixFQUFFO0lBQ3pCekYsSUFBSSxFQUFFLHdCQUF3QjtJQUM5QkMsT0FBTyxFQUFFLDJCQUEyQjtJQUNwQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHNGLG9CQUFvQixFQUFFO0lBQ3BCMUYsSUFBSSxFQUFFLG9CQUFvQjtJQUMxQkMsT0FBTyxFQUFFLHNCQUFzQjtJQUMvQkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHVGLG9CQUFvQixFQUFFO0lBQ3BCM0YsSUFBSSxFQUFFLG9CQUFvQjtJQUMxQkMsT0FBTyxFQUFFLHNCQUFzQjtJQUMvQkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHdGLGVBQWUsRUFBRTtJQUNmNUYsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QkMsT0FBTyxFQUFFLDJDQUEyQztJQUNwREMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHlGLG1CQUFtQixFQUFFO0lBQ25CN0YsSUFBSSxFQUFFLG1CQUFtQjtJQUN6QkMsT0FBTyxFQUFFLDhCQUE4QjtJQUN2Q0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDBGLGFBQWEsRUFBRTtJQUNiOUYsSUFBSSxFQUFFLGNBQWM7SUFDcEJDLE9BQU8sRUFBRSx1QkFBdUI7SUFDaENDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0QyRixhQUFhLEVBQUU7SUFDYi9GLElBQUksRUFBRSxjQUFjO0lBQ3BCQyxPQUFPLEVBQUUsdUJBQXVCO0lBQ2hDQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNENEYsd0JBQXdCLEVBQUU7SUFDeEJoRyxJQUFJLEVBQUUsdUJBQXVCO0lBQzdCQyxPQUFPLEVBQUUsMEJBQTBCO0lBQ25DQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNENkYsd0JBQXdCLEVBQUU7SUFDeEJqRyxJQUFJLEVBQUUsd0JBQXdCO0lBQzlCQyxPQUFPLEVBQUUsa0NBQWtDO0lBQzNDQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEOEYsNEJBQTRCLEVBQUU7SUFDNUJsRyxJQUFJLEVBQUUsMkJBQTJCO0lBQ2pDQyxPQUFPLEVBQUUsOEJBQThCO0lBQ3ZDQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEK0YsOEJBQThCLEVBQUU7SUFDOUJuRyxJQUFJLEVBQUUsNkJBQTZCO0lBQ25DQyxPQUFPLEVBQUUsZ0NBQWdDO0lBQ3pDQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEZ0csMkJBQTJCLEVBQUU7SUFDM0JwRyxJQUFJLEVBQUUsMkJBQTJCO0lBQ2pDQyxPQUFPLEVBQUUsOERBQThEO0lBQ3ZFQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEaUcsbUJBQW1CLEVBQUU7SUFDbkJyRyxJQUFJLEVBQUUsbUJBQW1CO0lBQ3pCQyxPQUFPLEVBQUUsb0NBQW9DO0lBQzdDQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEa0csaUJBQWlCLEVBQUU7SUFDakJ0RyxJQUFJLEVBQUUsaUJBQWlCO0lBQ3ZCQyxPQUFPLEVBQUUsMERBQTBEO0lBQ25FQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEbUcsa0JBQWtCLEVBQUU7SUFDbEJ2RyxJQUFJLEVBQUUsa0JBQWtCO0lBQ3hCQyxPQUFPLEVBQ0wsNkVBQTZFO0lBQy9FQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEb0csbUJBQW1CLEVBQUU7SUFDbkJ4RyxJQUFJLEVBQUUsbUJBQW1CO0lBQ3pCQyxPQUFPLEVBQ0wsbUVBQW1FO0lBQ3JFQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEcUcsa0JBQWtCLEVBQUU7SUFDbEJ6RyxJQUFJLEVBQUUsa0JBQWtCO0lBQ3hCQyxPQUFPLEVBQUUsaURBQWlEO0lBQzFEQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEc0csZUFBZSxFQUFFO0lBQ2YxRyxJQUFJLEVBQUUsZUFBZTtJQUNyQkMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHVHLGNBQWMsRUFBRTtJQUNkM0csSUFBSSxFQUFFLGdCQUFnQjtJQUN0QkMsT0FBTyxFQUFFLGdCQUFnQjtJQUN6QkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHdHLGlCQUFpQixFQUFFO0lBQ2pCNUcsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QkMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHlHLDRCQUE0QixFQUFFO0lBQzVCN0csSUFBSSxFQUFFLDhCQUE4QjtJQUNwQ0MsT0FBTyxFQUFFLDhCQUE4QjtJQUN2Q0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDBHLGdCQUFnQixFQUFFO0lBQ2hCOUcsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QkMsT0FBTyxFQUFFLGtCQUFrQjtJQUMzQkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDJHLG9CQUFvQixFQUFFO0lBQ3BCL0csSUFBSSxFQUFFLG1CQUFtQjtJQUN6QkMsT0FBTyxFQUFFLHNCQUFzQjtJQUMvQkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDRHLGFBQWEsRUFBRTtJQUNiaEgsSUFBSSxFQUFFLGFBQWE7SUFDbkJDLE9BQU8sRUFBRSw0QkFBNEI7SUFDckNDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0Q2RyxhQUFhLEVBQUU7SUFDYmpILElBQUksRUFBRSxjQUFjO0lBQ3BCQyxPQUFPLEVBQUUsaUVBQWlFO0lBQzFFQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEOEcscUJBQXFCLEVBQUU7SUFDckJsSCxJQUFJLEVBQUUscUJBQXFCO0lBQzNCQyxPQUFPLEVBQUUsZ0NBQWdDO0lBQ3pDQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEK0csMkJBQTJCLEVBQUU7SUFDM0JuSCxJQUFJLEVBQUUsMEJBQTBCO0lBQ2hDQyxPQUFPLEVBQUUsNkJBQTZCO0lBQ3RDQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEZ0gsZ0JBQWdCLEVBQUU7SUFDaEJwSCxJQUFJLEVBQUUsaUJBQWlCO0lBQ3ZCQyxPQUFPLEVBQUUsc0NBQXNDO0lBQy9DQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEaUgsdUJBQXVCLEVBQUU7SUFDdkJySCxJQUFJLEVBQUUsc0JBQXNCO0lBQzVCQyxPQUFPLEVBQUUseUJBQXlCO0lBQ2xDQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEa0gsY0FBYyxFQUFFO0lBQ2R0SCxJQUFJLEVBQUUsZUFBZTtJQUNyQkMsT0FBTyxFQUFFLDhCQUE4QjtJQUN2Q0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRG1ILGNBQWMsRUFBRTtJQUNkdkgsSUFBSSxFQUFFLGVBQWU7SUFDckJDLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekJDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RvSCxvQkFBb0IsRUFBRTtJQUNwQnhILElBQUksRUFBRSxvQkFBb0I7SUFDMUJDLE9BQU8sRUFBRSxzQkFBc0I7SUFDL0JDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RxSCxvQkFBb0IsRUFBRTtJQUNwQnpILElBQUksRUFBRSxtQkFBbUI7SUFDekJDLE9BQU8sRUFBRSxzQkFBc0I7SUFDL0JDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RzSCxpQkFBaUIsRUFBRTtJQUNqQjFILElBQUksRUFBRSxrQkFBa0I7SUFDeEJDLE9BQU8sRUFBRSxrQ0FBa0M7SUFDM0NDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0R1SCwyQkFBMkIsRUFBRTtJQUMzQjNILElBQUksRUFBRSx5QkFBeUI7SUFDL0JDLE9BQU8sRUFBRSw2QkFBNkI7SUFDdENDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0R3SCx1QkFBdUIsRUFBRTtJQUN2QjVILElBQUksRUFBRSxzQkFBc0I7SUFDNUJDLE9BQU8sRUFBRSx5QkFBeUI7SUFDbENDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0R5SCw4QkFBOEIsRUFBRTtJQUM5QjdILElBQUksRUFBRSw2QkFBNkI7SUFDbkNDLE9BQU8sRUFBRSxnQ0FBZ0M7SUFDekNDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0QwSCw0QkFBNEIsRUFBRTtJQUM1QjlILElBQUksRUFBRSwyQkFBMkI7SUFDakNDLE9BQU8sRUFBRSw4QkFBOEI7SUFDdkNDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0QySCxnQ0FBZ0MsRUFBRTtJQUNoQy9ILElBQUksRUFBRSw4QkFBOEI7SUFDcENDLE9BQU8sRUFBRSxrQ0FBa0M7SUFDM0NDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0Q0SCxtQkFBbUIsRUFBRTtJQUNuQmhJLElBQUksRUFBRSxtQkFBbUI7SUFDekJDLE9BQU8sRUFBRSxxQkFBcUI7SUFDOUJDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0Q2SCxrQkFBa0IsRUFBRTtJQUNsQmpJLElBQUksRUFBRSxrQkFBa0I7SUFDeEJDLE9BQU8sRUFBRSxtQ0FBbUM7SUFDNUNDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0Q4SCxlQUFlLEVBQUU7SUFDZmxJLElBQUksRUFBRSxlQUFlO0lBQ3JCQyxPQUFPLEVBQUUsNEJBQTRCO0lBQ3JDQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEK0gsdUJBQXVCLEVBQUU7SUFDdkJuSSxJQUFJLEVBQUUsdUJBQXVCO0lBQzdCQyxPQUFPLEVBQUUseUJBQXlCO0lBQ2xDQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEZ0ksNkJBQTZCLEVBQUU7SUFDN0JwSSxJQUFJLEVBQUUsNEJBQTRCO0lBQ2xDQyxPQUFPLEVBQUUsOENBQThDO0lBQ3ZEQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEaUksd0JBQXdCLEVBQUU7SUFDeEJySSxJQUFJLEVBQUUsdUJBQXVCO0lBQzdCQyxPQUFPLEVBQUUsMEJBQTBCO0lBQ25DQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEa0ksYUFBYSxFQUFFO0lBQ2J0SSxJQUFJLEVBQUUsY0FBYztJQUNwQkMsT0FBTyxFQUFFLDZCQUE2QjtJQUN0Q0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRG1JLGdCQUFnQixFQUFFO0lBQ2hCdkksSUFBSSxFQUFFLGlCQUFpQjtJQUN2QkMsT0FBTyxFQUFFLCtCQUErQjtJQUN4Q0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRG9JLG9CQUFvQixFQUFFO0lBQ3BCeEksSUFBSSxFQUFFLG9CQUFvQjtJQUMxQkMsT0FBTyxFQUFFLG9DQUFvQztJQUM3Q0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHFJLGNBQWMsRUFBRTtJQUNkekksSUFBSSxFQUFFLGVBQWU7SUFDckJDLE9BQU8sRUFBRSxtQ0FBbUM7SUFDNUNDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RzSSxpQkFBaUIsRUFBRTtJQUNqQjFJLElBQUksRUFBRSxpQkFBaUI7SUFDdkJDLE9BQU8sRUFBRSwyQ0FBMkM7SUFDcERDLFdBQVcsRUFDVCxxRkFBcUY7SUFDdkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0R1SSxZQUFZLEVBQUU7SUFDWjNJLElBQUksRUFBRSxhQUFhO0lBQ25CQyxPQUFPLEVBQUUsa0NBQWtDO0lBQzNDQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEd0ksZ0JBQWdCLEVBQUU7SUFDaEI1SSxJQUFJLEVBQUUsaUJBQWlCO0lBQ3ZCQyxPQUFPLEVBQUUsOENBQThDO0lBQ3ZEQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEeUksZ0NBQWdDLEVBQUU7SUFDaEM3SSxJQUFJLEVBQUUsOEJBQThCO0lBQ3BDQyxPQUFPLEVBQUUsNEJBQTRCO0lBQ3JDQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEMEksWUFBWSxFQUFFO0lBQ1o5SSxJQUFJLEVBQUUsYUFBYTtJQUNuQkMsT0FBTyxFQUFFLGdCQUFnQjtJQUN6QkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDJJLHNCQUFzQixFQUFFO0lBQ3RCL0ksSUFBSSxFQUFFLHNCQUFzQjtJQUM1QkMsT0FBTyxFQUFFLHFDQUFxQztJQUM5Q0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDRJLG1CQUFtQixFQUFFO0lBQ25CaEosSUFBSSxFQUFFLG1CQUFtQjtJQUN6QkMsT0FBTyxFQUFFLDZDQUE2QztJQUN0REMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDZJLGVBQWUsRUFBRTtJQUNmakosSUFBSSxFQUFFLGdCQUFnQjtJQUN0QkMsT0FBTyxFQUFFLHVCQUF1QjtJQUNoQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDhJLGtCQUFrQixFQUFFO0lBQ2xCbEosSUFBSSxFQUFFLGtCQUFrQjtJQUN4QkMsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRCtJLGtCQUFrQixFQUFFO0lBQ2xCbkosSUFBSSxFQUFFLGtCQUFrQjtJQUN4QkMsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRGdKLG9CQUFvQixFQUFFO0lBQ3BCcEosSUFBSSxFQUFFLG9CQUFvQjtJQUMxQkMsT0FBTyxFQUFFLDJDQUEyQztJQUNwREMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRGlKLHFCQUFxQixFQUFFO0lBQ3JCckosSUFBSSxFQUFFLHFCQUFxQjtJQUMzQkMsT0FBTyxFQUFFLHVEQUF1RDtJQUNoRUMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRGtKLGlCQUFpQixFQUFFO0lBQ2pCdEosSUFBSSxFQUFFLGlCQUFpQjtJQUN2QkMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRG1KLHNCQUFzQixFQUFFO0lBQ3RCdkosSUFBSSxFQUFFLHNCQUFzQjtJQUM1QkMsT0FBTyxFQUFFLHdCQUF3QjtJQUNqQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRG9KLGtCQUFrQixFQUFFO0lBQ2xCeEosSUFBSSxFQUFFLGtCQUFrQjtJQUN4QkMsT0FBTyxFQUFFLDZCQUE2QjtJQUN0Q0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHFKLG1CQUFtQixFQUFFO0lBQ25CekosSUFBSSxFQUFFLG1CQUFtQjtJQUN6QkMsT0FBTyxFQUFFLGdDQUFnQztJQUN6Q0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHNKLHlCQUF5QixFQUFFO0lBQ3pCMUosSUFBSSxFQUFFLHdCQUF3QjtJQUM5QkMsT0FBTyxFQUFFLGdDQUFnQztJQUN6Q0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHVKLCtCQUErQixFQUFFO0lBQy9CM0osSUFBSSxFQUFFLDhCQUE4QjtJQUNwQ0MsT0FBTyxFQUFFLCtEQUErRDtJQUN4RUMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHdKLG1CQUFtQixFQUFFO0lBQ25CNUosSUFBSSxFQUFFLG1CQUFtQjtJQUN6QkMsT0FBTyxFQUFFLGtEQUFrRDtJQUMzREMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHlKLG9CQUFvQixFQUFFO0lBQ3BCN0osSUFBSSxFQUFFLG9CQUFvQjtJQUMxQkMsT0FBTyxFQUFFLHdCQUF3QjtJQUNqQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDBKLGtCQUFrQixFQUFFO0lBQ2xCOUosSUFBSSxFQUFFLGtCQUFrQjtJQUN4QkMsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDJKLGdCQUFnQixFQUFFO0lBQ2hCL0osSUFBSSxFQUFFLGdCQUFnQjtJQUN0QkMsT0FBTyxFQUFFLGtCQUFrQjtJQUMzQkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDRKLHFDQUFxQyxFQUFFO0lBQ3JDaEssSUFBSSxFQUFFLG1DQUFtQztJQUN6Q0MsT0FBTyxFQUFFLHVDQUF1QztJQUNoREMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLEtBQUs7SUFDWEMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDZKLHdCQUF3QixFQUFFO0lBQ3hCakssSUFBSSxFQUFFLHVCQUF1QjtJQUM3QkMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDhKLG1CQUFtQixFQUFFO0lBQ25CbEssSUFBSSxFQUFFLG1CQUFtQjtJQUN6QkMsT0FBTyxFQUFFLDhCQUE4QjtJQUN2Q0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRCtKLHFCQUFxQixFQUFFO0lBQ3JCbkssSUFBSSxFQUFFLG9CQUFvQjtJQUMxQkMsT0FBTyxFQUFFLHVCQUF1QjtJQUNoQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRGdLLDZCQUE2QixFQUFFO0lBQzdCcEssSUFBSSxFQUFFLDRCQUE0QjtJQUNsQ0MsT0FBTyxFQUFFLGdDQUFnQztJQUN6Q0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRGlLLG9CQUFvQixFQUFFO0lBQ3BCckssSUFBSSxFQUFFLG9CQUFvQjtJQUMxQkMsT0FBTyxFQUFFLHVCQUF1QjtJQUNoQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRGtLLDBCQUEwQixFQUFFO0lBQzFCdEssSUFBSSxFQUFFLHlCQUF5QjtJQUMvQkMsT0FBTyxFQUFFLCtCQUErQjtJQUN4Q0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRG1LLG9CQUFvQixFQUFFO0lBQ3BCdkssSUFBSSxFQUFFLDZCQUE2QjtJQUNuQ0MsT0FBTyxFQUFFLHNCQUFzQjtJQUMvQkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRG9LLDhCQUE4QixFQUFFO0lBQzlCeEssSUFBSSxFQUFFLDZCQUE2QjtJQUNuQ0MsT0FBTyxFQUFFLDJDQUEyQztJQUNwREMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHFLLDBCQUEwQixFQUFFO0lBQzFCekssSUFBSSxFQUFFLHlCQUF5QjtJQUMvQkMsT0FBTyxFQUFFLHVDQUF1QztJQUNoREMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHNLLDBCQUEwQixFQUFFO0lBQzFCMUssSUFBSSxFQUFFLHlCQUF5QjtJQUMvQkMsT0FBTyxFQUFFLDRCQUE0QjtJQUNyQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHVLLHNCQUFzQixFQUFFO0lBQ3RCM0ssSUFBSSxFQUFFLHNCQUFzQjtJQUM1QkMsT0FBTyxFQUFFLDRDQUE0QztJQUNyREMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHdLLGtCQUFrQixFQUFFO0lBQ2xCNUssSUFBSSxFQUFFLGtCQUFrQjtJQUN4QkMsT0FBTyxFQUFFLHlCQUF5QjtJQUNsQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHlLLGlCQUFpQixFQUFFO0lBQ2pCN0ssSUFBSSxFQUFFLGlCQUFpQjtJQUN2QkMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDBLLG9CQUFvQixFQUFFO0lBQ3BCOUssSUFBSSxFQUFFLG1CQUFtQjtJQUN6QkMsT0FBTyxFQUFFLHNCQUFzQjtJQUMvQkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDJLLHFCQUFxQixFQUFFO0lBQ3JCL0ssSUFBSSxFQUFFLG9CQUFvQjtJQUMxQkMsT0FBTyxFQUFFLDRCQUE0QjtJQUNyQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDRLLHVCQUF1QixFQUFFO0lBQ3ZCaEwsSUFBSSxFQUFFLHNCQUFzQjtJQUM1QkMsT0FBTyxFQUFFLHlEQUF5RDtJQUNsRUMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDZLLG1CQUFtQixFQUFFO0lBQ25CakwsSUFBSSxFQUFFLGtCQUFrQjtJQUN4QkMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDhLLG9CQUFvQixFQUFFO0lBQ3BCbEwsSUFBSSxFQUFFLG1CQUFtQjtJQUN6QkMsT0FBTyxFQUFFLDJCQUEyQjtJQUNwQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRCtLLDZCQUE2QixFQUFFO0lBQzdCbkwsSUFBSSxFQUFFLHdDQUF3QztJQUM5Q0MsT0FBTyxFQUFFLDBEQUEwRDtJQUNuRUMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRGdMLGdDQUFnQyxFQUFFO0lBQ2hDcEwsSUFBSSxFQUFFLDJDQUEyQztJQUNqREMsT0FBTyxFQUFFLDZEQUE2RDtJQUN0RUMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRGlMLHlCQUF5QixFQUFFO0lBQ3pCckwsSUFBSSxFQUFFLHdCQUF3QjtJQUM5QkMsT0FBTyxFQUFFLDJCQUEyQjtJQUNwQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRGtMLDJCQUEyQixFQUFFO0lBQzNCdEwsSUFBSSxFQUFFLHdCQUF3QjtJQUM5QkMsT0FBTyxFQUFFLDZCQUE2QjtJQUN0Q0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRG1MLCtCQUErQixFQUFFO0lBQy9CdkwsSUFBSSxFQUFFLDZCQUE2QjtJQUNuQ0MsT0FBTyxFQUFFLGlDQUFpQztJQUMxQ0MsV0FBVyxFQUFFLHdEQUF3RDtJQUNyRUMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRG9MLDBDQUEwQyxFQUFFO0lBQzFDeEwsSUFBSSxFQUFFLHVDQUF1QztJQUM3Q0MsT0FBTyxFQUFFLDRDQUE0QztJQUNyREMsV0FBVyxFQUNULG1FQUFtRTtJQUNyRUMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHFMLGlCQUFpQixFQUFFO0lBQ2pCekwsSUFBSSxFQUFFLGlCQUFpQjtJQUN2QkMsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QkMsV0FBVyxFQUFFLG9EQUFvRDtJQUNqRUMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHNMLHFCQUFxQixFQUFFO0lBQ3JCMUwsSUFBSSxFQUFFLHFCQUFxQjtJQUMzQkMsT0FBTyxFQUFFLHlCQUF5QjtJQUNsQ0MsV0FBVyxFQUFFLG9DQUFvQztJQUNqREMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHVMLGdCQUFnQixFQUFFO0lBQ2hCM0wsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QkMsT0FBTyxFQUFFLGtCQUFrQjtJQUMzQkMsV0FBVyxFQUFFLGdEQUFnRDtJQUM3REMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHdMLGtCQUFrQixFQUFFO0lBQ2xCNUwsSUFBSSxFQUFFLGtCQUFrQjtJQUN4QkMsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QkMsV0FBVyxFQUFFLDRCQUE0QjtJQUN6Q0MsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHlMLHdCQUF3QixFQUFFO0lBQ3hCN0wsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QkMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDBMLG9CQUFvQixFQUFFO0lBQ3BCOUwsSUFBSSxFQUFFLG1CQUFtQjtJQUN6QkMsT0FBTyxFQUFFLHNCQUFzQjtJQUMvQkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDJMLHdCQUF3QixFQUFFO0lBQ3hCL0wsSUFBSSxFQUFFLHVCQUF1QjtJQUM3QkMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDRMLG1CQUFtQixFQUFFO0lBQ25CaE0sSUFBSSxFQUFFLGtCQUFrQjtJQUN4QkMsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDZMLG1CQUFtQixFQUFFO0lBQ25Cak0sSUFBSSxFQUFFLGtCQUFrQjtJQUN4QkMsT0FBTyxFQUFFLHFCQUFxQjtJQUM5QkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDhMLG9CQUFvQixFQUFFO0lBQ3BCbE0sSUFBSSxFQUFFLG9CQUFvQjtJQUMxQkMsT0FBTyxFQUFFLDhCQUE4QjtJQUN2Q0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRCtMLHdCQUF3QixFQUFFO0lBQ3hCbk0sSUFBSSxFQUFFLHVCQUF1QjtJQUM3QkMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQ0MsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRGdNLGFBQWEsRUFBRTtJQUNicE0sSUFBSSxFQUFFLGVBQWU7SUFDckJDLE9BQU8sRUFBRSxlQUFlO0lBQ3hCQyxXQUFXLEVBQ1QscUZBQXFGO0lBQ3ZGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEaU0saUNBQWlDLEVBQUU7SUFDakNyTSxJQUFJLEVBQUUsc0NBQXNDO0lBQzVDQyxPQUFPLEVBQUUsNENBQTRDO0lBQ3JEQyxXQUFXLEVBQ1QsbUVBQW1FO0lBQ3JFQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEa00sMkJBQTJCLEVBQUU7SUFDM0J0TSxJQUFJLEVBQUUsaUNBQWlDO0lBQ3ZDQyxPQUFPLEVBQUUsc0NBQXNDO0lBQy9DQyxXQUFXLEVBQUUsNkRBQTZEO0lBQzFFQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEbU0sOEJBQThCLEVBQUU7SUFDOUJ2TSxJQUFJLEVBQUUsb0NBQW9DO0lBQzFDQyxPQUFPLEVBQUUseUNBQXlDO0lBQ2xEQyxXQUFXLEVBQ1QsZ0VBQWdFO0lBQ2xFQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEb00seUJBQXlCLEVBQUU7SUFDekJ4TSxJQUFJLEVBQUUsNkJBQTZCO0lBQ25DQyxPQUFPLEVBQUUsMEJBQTBCO0lBQ25DQyxXQUFXLEVBQUUsNkNBQTZDO0lBQzFEQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEcU0sZ0NBQWdDLEVBQUU7SUFDaEN6TSxJQUFJLEVBQUUsc0NBQXNDO0lBQzVDQyxPQUFPLEVBQUUsMkNBQTJDO0lBQ3BEQyxXQUFXLEVBQUUsNkRBQTZEO0lBQzFFQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEc00sVUFBVSxFQUFFO0lBQ1YxTSxJQUFJLEVBQUUsV0FBVztJQUNqQkMsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QkMsV0FBVyxFQUFFLG9CQUFvQjtJQUNqQ0MsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFQyw0QkFBVyxDQUFDRztFQUM5QixDQUFDO0VBQ0RtTSxlQUFlLEVBQUU7SUFDZjNNLElBQUksRUFBRSxvQkFBb0I7SUFDMUJDLE9BQU8sRUFBRSx1QkFBdUI7SUFDaENDLFdBQVcsRUFBRSx1QkFBdUI7SUFDcENDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRUMsNEJBQVcsQ0FBQ0c7RUFDOUIsQ0FBQztFQUNEb00sY0FBYyxFQUFFO0lBQ2Q1TSxJQUFJLEVBQUUsY0FBYztJQUNwQkMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQkMsV0FBVyxFQUNULHFGQUFxRjtJQUN2RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHlNLHdCQUF3QixFQUFFO0lBQ3hCN00sSUFBSSxFQUFFLHVCQUF1QjtJQUM3QkMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQ0MsV0FBVyxFQUFFLDBCQUEwQjtJQUN2Q0MsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFQyw0QkFBVyxDQUFDRztFQUM5QixDQUFDO0VBQ0RzTSxvQkFBb0IsRUFBRTtJQUNwQjlNLElBQUksRUFBRSwwQkFBMEI7SUFDaENDLE9BQU8sRUFBRSw2QkFBNkI7SUFDdENDLFdBQVcsRUFBRSw2QkFBNkI7SUFDMUNDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRUMsNEJBQVcsQ0FBQ0c7RUFDOUIsQ0FBQztFQUNEdU0sc0JBQXNCLEVBQUU7SUFDdEIvTSxJQUFJLEVBQUUsc0JBQXNCO0lBQzVCQyxPQUFPLEVBQUUsb0NBQW9DO0lBQzdDQyxXQUFXLEVBQUUscUZBQXFGO0lBQ2xHQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUVDLDRCQUFXLENBQUNHO0VBQzlCLENBQUM7RUFDRHdNLGNBQWMsRUFBRTtJQUNkaE4sSUFBSSxFQUFFLGVBQWU7SUFDckJDLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekJDLFdBQVcsRUFBRSxnQkFBZ0I7SUFDN0JDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0Q2TSxpQkFBaUIsRUFBRTtJQUNqQmpOLElBQUksRUFBRSxrQkFBa0I7SUFDeEJDLE9BQU8sRUFBRSw0REFBNEQ7SUFDckVDLFdBQVcsRUFBRSxpREFBaUQ7SUFDOURDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0Q4TSwrQkFBK0IsRUFBRTtJQUMvQmxOLElBQUksRUFBRSw2QkFBNkI7SUFDbkNDLE9BQU8sRUFBRSxpQ0FBaUM7SUFDMUNDLFdBQVcsRUFBRSxrQ0FBa0M7SUFDL0NDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0QrTSxrQkFBa0IsRUFBRTtJQUNsQm5OLElBQUksRUFBRSxrQkFBa0I7SUFDeEJDLE9BQU8sRUFBRSw4Q0FBOEM7SUFDdkRDLFdBQVcsRUFBRSx5RUFBeUU7SUFDdEZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RnTixrQkFBa0IsRUFBRTtJQUNsQnBOLElBQUksRUFBRSxrQkFBa0I7SUFDeEJDLE9BQU8sRUFBRSxxQkFBcUI7SUFDOUJDLFdBQVcsRUFBRSxnREFBZ0Q7SUFDN0RDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RpTix1QkFBdUIsRUFBRTtJQUN2QnJOLElBQUksRUFBRSxvQkFBb0I7SUFDMUJDLE9BQU8sRUFBRSwwQkFBMEI7SUFDbkNDLFdBQVcsRUFBRSx1Q0FBdUM7SUFDcERDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RrTixtQkFBbUIsRUFBRTtJQUNuQnROLElBQUksRUFBRSxtQkFBbUI7SUFDekJDLE9BQU8sRUFBRSx5QkFBeUI7SUFDbENDLFdBQVcsRUFBRSxvQ0FBb0M7SUFDakRDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RtTix1QkFBdUIsRUFBRTtJQUN2QnZOLElBQUksRUFBRSxzQkFBc0I7SUFDNUJDLE9BQU8sRUFBRSw2QkFBNkI7SUFDdENDLFdBQVcsRUFBRSxxRkFBcUY7SUFDbEdDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RvTixnQkFBZ0IsRUFBRTtJQUNoQnhOLElBQUksRUFBRSxnQkFBZ0I7SUFDdEJDLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0JDLFdBQVcsRUFBRSxtQkFBbUI7SUFDaENDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RxTixhQUFhLEVBQUU7SUFDYnpOLElBQUksRUFBRSxlQUFlO0lBQ3JCQyxPQUFPLEVBQUUscUJBQXFCO0lBQzlCQyxXQUFXLEVBQUUsNkJBQTZCO0lBQzFDQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUU7RUFDbEIsQ0FBQztFQUNEc04sd0JBQXdCLEVBQUU7SUFDeEIxTixJQUFJLEVBQUUsd0JBQXdCO0lBQzlCQyxPQUFPLEVBQUUsOEJBQThCO0lBQ3ZDQyxXQUFXLEVBQUUsOEVBQThFO0lBQzNGQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUVDLDRCQUFXLENBQUNHO0VBQzlCLENBQUM7RUFDRG1OLGNBQWMsRUFBRTtJQUNkM04sSUFBSSxFQUFFLGVBQWU7SUFDckJDLE9BQU8sRUFBRSw2QkFBNkI7SUFDdENDLFdBQVcsRUFBRSw4REFBOEQ7SUFDM0VDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRUMsNEJBQVcsQ0FBQ0c7RUFDOUIsQ0FBQztFQUNEb04sb0JBQW9CLEVBQUU7SUFDcEI1TixJQUFJLEVBQUUsb0JBQW9CO0lBQzFCQyxPQUFPLEVBQUUsbUNBQW1DO0lBQzVDQyxXQUFXLEVBQUUsMkZBQTJGO0lBQ3hHQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxjQUFjLEVBQUVDLDRCQUFXLENBQUNHO0VBQzlCLENBQUM7RUFDRHFOLCtCQUErQixFQUFFO0lBQy9CN04sSUFBSSxFQUFFLGdDQUFnQztJQUN0Q0MsT0FBTyxFQUFFLHFDQUFxQztJQUM5Q0MsV0FBVyxFQUFFLHFDQUFxQztJQUNsREMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDBOLG1CQUFtQixFQUFFO0lBQ25COU4sSUFBSSxFQUFFLG1CQUFtQjtJQUN6QkMsT0FBTyxFQUFFLHNCQUFzQjtJQUMvQkMsV0FBVyxFQUFFLHFCQUFxQjtJQUNsQ0MsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDJOLDRCQUE0QixFQUFFO0lBQzVCL04sSUFBSSxFQUFFLDRCQUE0QjtJQUNsQ0MsT0FBTyxFQUFFLCtCQUErQjtJQUN4Q0MsV0FBVyxFQUFFLG1DQUFtQztJQUNoREMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDROLHdCQUF3QixFQUFFO0lBQzFCaE8sSUFBSSxFQUFFLHVCQUF1QjtJQUM3QkMsT0FBTyxFQUFFLDBCQUEwQjtJQUNuQ0MsV0FBVyxFQUFFLHlEQUF5RDtJQUN0RUMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDQzZOLGlCQUFpQixFQUFFO0lBQ2pCak8sSUFBSSxFQUFFLGtCQUFrQjtJQUN4QkMsT0FBTyxFQUFFLHFGQUFxRjtJQUM5RkMsV0FBVyxFQUFFLHFFQUFxRTtJQUNsRkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRDhOLG9CQUFvQixFQUFFO0lBQ3BCbE8sSUFBSSxFQUFFLG9CQUFvQjtJQUMxQkMsT0FBTyxFQUFFLGlFQUFpRTtJQUMxRUMsV0FBVyxFQUFFLGdGQUFnRjtJQUM3RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRCtOLGNBQWMsRUFBRTtJQUNkbk8sSUFBSSxFQUFFLGVBQWU7SUFDckJDLE9BQU8sRUFBRSxtR0FBbUc7SUFDNUdDLFdBQVcsRUFBRSxrRUFBa0U7SUFDL0VDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0RnTyxhQUFhLEVBQUU7SUFDYnBPLElBQUksRUFBRSxhQUFhO0lBQ25CQyxPQUFPLEVBQUUsZUFBZTtJQUN4QkMsV0FBVyxFQUFFLGdCQUFnQjtJQUM3QkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRGlPLGtCQUFrQixFQUFFO0lBQ2xCck8sSUFBSSxFQUFFLGtCQUFrQjtJQUN4QkMsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QkMsV0FBVyxFQUFFLDREQUE0RDtJQUN6RUMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRGtPLGVBQWUsRUFBRTtJQUNmdE8sSUFBSSxFQUFFLGdCQUFnQjtJQUN0QkMsT0FBTyxFQUFFLHlCQUF5QjtJQUNsQ0MsV0FBVyxFQUFFLCtDQUErQztJQUM1REMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRG1PLHFCQUFxQixFQUFFO0lBQ3JCdk8sSUFBSSxFQUFFLHFCQUFxQjtJQUMzQkMsT0FBTyxFQUFFLHVCQUF1QjtJQUNoQ0MsV0FBVyxFQUFFLGtHQUFrRztJQUMvR0MsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRG9PLGtCQUFrQixFQUFFO0lBQ2xCeE8sSUFBSSxFQUFFLG1CQUFtQjtJQUN6QkMsT0FBTyxFQUFFLDRCQUE0QjtJQUNyQ0MsV0FBVyxFQUFFLGtEQUFrRDtJQUMvREMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHFPLGlCQUFpQixFQUFFO0lBQ2pCek8sSUFBSSxFQUFFLGlCQUFpQjtJQUN2QkMsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QkMsV0FBVyxFQUFFLDJEQUEyRDtJQUN4RUMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCLENBQUM7RUFDRHNPLGNBQWMsRUFBRTtJQUNkMU8sSUFBSSxFQUFFLGVBQWU7SUFDckJDLE9BQU8sRUFBRSx3QkFBd0I7SUFDakNDLFdBQVcsRUFBRSwyREFBMkQ7SUFDeEVDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0R1TyxpQkFBaUIsRUFBRTtJQUNqQjNPLElBQUksRUFBRSxpQkFBaUI7SUFDdkJDLE9BQU8sRUFBRSxtQkFBbUI7SUFDNUJDLFdBQVcsRUFBRSwyREFBMkQ7SUFDeEVDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0R3Tyw0QkFBNEIsRUFBRTtJQUM1QjVPLElBQUksRUFBRSwyQkFBMkI7SUFDakNDLE9BQU8sRUFBRSw4QkFBOEI7SUFDdkNDLFdBQVcsRUFBRSxzRUFBc0U7SUFDbkZDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBQ0R5TyxhQUFhLEVBQUU7SUFDYjdPLElBQUksRUFBRSxjQUFjO0lBQ3BCQyxPQUFPLEVBQUUsZUFBZTtJQUN4QkMsV0FBVyxFQUFFLHlFQUF5RTtJQUN0RkMsSUFBSSxFQUFFLElBQUk7SUFDVkMsY0FBYyxFQUFFO0VBQ2xCO0FBQ0YsQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==
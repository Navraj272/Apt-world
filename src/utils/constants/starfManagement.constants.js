
export const ROLE_DETAILS = {
  SUPERADMIN: {
    NAME: 'Super Admin',
    LEVEL: 1
  },
  ADMIN: {
    NAME: 'Admin',
    LEVEL: 2
  },
  MANAGER: {
    NAME: 'Manager',
    LEVEL: 3
  },
  SUPPORT: {
    NAME: 'Support',
    LEVEL: 4
  }
}

export const applicationModules = {
  profile: 'Profile',
  administrator: 'Administrator',
  players: 'Players',
  playerEngagement: 'PlayerEngagement',
  amoe: 'AMOE',
  appConfiguration: 'AppConfiguration',
  contentManagement: 'ContentManagement',
  crmManagement: 'ContentManagement',
  casinoManagement: 'CasinoManagement',
  bonus: 'Bonus',
  reports: 'Reports',
  packages: 'Packages',
  countriesStates: 'CountriesStates',
  chatModule: 'ChatModule',
  affiliateModule: 'AffiliateModule',
  fraudDetection: 'FraudDetection',
  paymentGateway: 'PaymentGateway',
  dashboard: 'Dashboard',
};

export const permissionLevels = {
  create: 'C',
  read: 'R',
  update: 'U',
  delete: 'D',
  toggle: 'T',
  assign: 'A',
  upload: 'UPL',
  reOrder: 'RO'
};

/**
 * @typedef {keyof typeof applicationModules} ModuleKey
 * @typedef {keyof typeof permissionLevels} PermissionKey
 */

/**
 * Generates a structured object that maps modules to their permission codes.
 * @type {Record<ModuleKey, Record<PermissionKey, string>>}
 */
export const applicationModule = Object.entries(applicationModules).reduce((acc, [moduleKey, moduleName]) => {
  acc[moduleKey] = Object.entries(permissionLevels).reduce((permAcc, [permKey, permCode]) => {
    permAcc[permKey] = `${moduleName}:${permCode}`;
    return permAcc;
  }, {});
  return acc;
}, {});


/**
 * Defines available permissions for each module.
 * @type {Record<string, string[]>}
 */
export const permissions = {
  [applicationModules.administrator]: [
    permissionLevels.create,
    permissionLevels.read,
    permissionLevels.update,
    permissionLevels.toggle,
    permissionLevels.assign
  ],
  [applicationModules.players]: [
    permissionLevels.read,
    permissionLevels.update,
    permissionLevels.toggle
  ],
  [applicationModules.playerEngagement]: [
    permissionLevels.read,
    permissionLevels.create,
    permissionLevels.update,
    permissionLevels.delete,
    permissionLevels.toggle
  ],
  [applicationModules.amoe]: [
    permissionLevels.read,
    permissionLevels.update
  ],
  [applicationModules.appConfiguration]: [
    permissionLevels.read,
    permissionLevels.create,
    permissionLevels.update,
    permissionLevels.upload,
    permissionLevels.reOrder,
  ],
  [applicationModules.contentManagement]: [
    permissionLevels.create,
    permissionLevels.read,
    permissionLevels.update,
    permissionLevels.delete, // Fixed Typo
    permissionLevels.toggle
  ],
  [applicationModules.crmManagement]: [
    permissionLevels.create,
    permissionLevels.read,
    permissionLevels.update,
    permissionLevels.delete, // Fixed Typo
    permissionLevels.toggle
  ],
  [applicationModules.casinoManagement]: [
    permissionLevels.read,
    permissionLevels.create,
    permissionLevels.delete,
    permissionLevels.update,
    permissionLevels.toggle
  ],
  [applicationModules.bonus]: [
    permissionLevels.read,
    permissionLevels.create,
    permissionLevels.update,
    permissionLevels.toggle
  ],
  [applicationModules.reports]: [
    permissionLevels.read
  ],
  [applicationModules.packages]: [
    permissionLevels.read,
    permissionLevels.create,
    permissionLevels.delete,
    permissionLevels.update,
    permissionLevels.toggle
  ],
  [applicationModules.countriesStates]: [
    permissionLevels.read,
    permissionLevels.toggle
  ],
  [applicationModules.chatModule]: [
    permissionLevels.read,
    permissionLevels.create,
    permissionLevels.delete,
    permissionLevels.update,
    permissionLevels.toggle,
    permissionLevels.reOrder,
  ],
  [applicationModules.affiliateModule]: [
    permissionLevels.update,
    permissionLevels.toggle
  ],
  [applicationModules.fraudDetection]: [],
  [applicationModules.paymentGateway]: [
    permissionLevels.toggle
  ],
  [applicationModules.dashboard]: [
    permissionLevels.create,
    permissionLevels.read,
    permissionLevels.update,
    permissionLevels.toggle,
    permissionLevels.assign
  ],
};

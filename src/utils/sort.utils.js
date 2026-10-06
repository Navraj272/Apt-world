// Whitelisted sort keys for admin lists; anything else falls back to newest first
export const buildOrder = (db, alias, sortBy, sortOrder) => {
  const direction = String(sortOrder).toLowerCase() === 'asc' ? 'ASC' : 'DESC';
  switch (sortBy) {
    case 'name':
      return [[db.Sequelize.literal(`LOWER("${alias}"."name"->>'en')`), direction], ['id', 'DESC']];
    case 'baseCode':
      return alias === 'Product' ? [['baseCode', direction], ['id', 'DESC']] : [['id', 'DESC']];
    case 'slug':
      return [['slug', direction], ['id', 'DESC']];
    case 'createdAt':
      return [['createdAt', direction], ['id', 'DESC']];
    case 'id':
      return [['id', direction]];
    default:
      return [['id', 'DESC']];
  }
};

import { AppError } from '@src/errors/app.error';
import { Errors } from '@src/errors/errorCodes';

export const MAX_BULK_ROWS = 500;

export const getBulkItems = (items) => {
  if (!Array.isArray(items) || items.length === 0) {
    throw new AppError(Errors.MISSING_REQUIRED_PARAMETER);
  }
  if (items.length > MAX_BULK_ROWS) {
    throw new AppError({
      ...Errors.MISSING_REQUIRED_PARAMETER,
      message: `A maximum of ${MAX_BULK_ROWS} rows can be imported at once.`,
    });
  }
  return items;
};

// Accepts either a plain string or a { en } object and returns a { en } object
export const toLocalizedName = (value) => {
  if (!value) return null;
  if (typeof value === 'string') return value.trim() ? { en: value.trim() } : null;
  if (typeof value === 'object' && Object.keys(value).length > 0) return value;
  return null;
};

export const parseBoolean = (value, fallback = true) => {
  if (value === undefined || value === null || value === '') return fallback;
  if (typeof value === 'boolean') return value;
  return !['false', '0', 'no', 'inactive'].includes(String(value).trim().toLowerCase());
};

// Builds lookup maps so each row resolves its category without a query per row
export const buildCategoryLookup = (categories) => {
  const lookup = new Map();
  categories.forEach((category) => {
    lookup.set(String(category.id), category);
    if (category.slug) lookup.set(category.slug.toLowerCase(), category);
    const en = category.name && category.name.en;
    if (en) lookup.set(en.trim().toLowerCase(), category);
  });
  return (ref) => (ref === undefined || ref === null ? undefined : lookup.get(String(ref).trim().toLowerCase()));
};

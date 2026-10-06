// In-process cache replacing Redis. Single-instance only; entries are lost on restart.
const store = new Map()

const isExpired = (entry) => entry.expiresAt !== null && entry.expiresAt <= Date.now()

const toRegExp = (pattern) =>
  new RegExp('^' + pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.') + '$')

const matchingKeys = (pattern) => {
  const regExp = toRegExp(pattern)
  return [...store.keys()].filter((key) => regExp.test(key) && getCacheSync(key) !== null)
}

const getCacheSync = (key) => {
  const entry = store.get(key)
  if (!entry) return null
  if (isExpired(entry)) {
    store.delete(key)
    return null
  }
  return entry.value
}

// Minimal subset of the ioredis client API used by the handlers
export const client = {
  del: async (...keys) => keys.reduce((count, key) => count + (store.delete(key) ? 1 : 0), 0),
  scan: async (cursor, _match, pattern) => ['0', matchingKeys(pattern)]
}

export const getCache = async (key) => getCacheSync(key)

export const deleteCache = async (key) => {
  store.delete(key)
}

export const deleteCacheByPattern = async (pattern) => {
  matchingKeys(pattern).forEach((key) => store.delete(key))
}

export const setCache = async (key, value, expirationInSeconds = 86400) => {
  store.set(key, { value, expiresAt: Date.now() + expirationInSeconds * 1000 })
}

export const setInternalCache = async (key, value) => {
  store.set(key, { value, expiresAt: null })
}

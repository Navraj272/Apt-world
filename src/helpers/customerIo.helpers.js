import base64 from 'base-64'
export const AuthHeader = (key1, key2) => {
  return base64.encode(`${key1}:${key2}`)
}

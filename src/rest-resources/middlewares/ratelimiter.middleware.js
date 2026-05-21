const Redis = require("ioredis");
const redis = new Redis();

const rateLimiter = async (req, res, next) => {
  const userKey = `otp:${req.ip}`; // or use user ID or phone number
  const now = Date.now();

  const userData = await redis.hgetall(userKey);

  let attempts = Number(userData.attempts || 0);
  let blockedUntil = Number(userData.blockedUntil || 0);

  if (blockedUntil > now) {
    return res.status(429).json({
      error: "Too many requests. Try again later.",
      unblockAt: new Date(blockedUntil).toISOString()
    });
  }

  attempts++;

  let blockDuration = 0;

  if (attempts > 10) {
    blockDuration = 60 * 60 * 1000; // 1 hour
  } else if (attempts > 6) {
    blockDuration = 15 * 60 * 1000; // 15 min
  } else if (attempts > 3) {
    blockDuration = 5 * 60 * 1000; // 5 min
  }

  if (blockDuration > 0) {
    await redis.hmset(userKey, {
      attempts,
      blockedUntil: now + blockDuration
    });
    await redis.expire(userKey, Math.ceil((blockDuration + 60000) / 1000)); // auto-expire in Redis
    return res.status(429).json({
      error: "Too many requests. Try again later.",
      unblockAt: new Date(now + blockDuration).toISOString()
    });
  }

  await redis.hmset(userKey, { attempts, blockedUntil: 0 });
  await redis.expire(userKey, 60 * 60); // expire in 1 hour

  next();
};

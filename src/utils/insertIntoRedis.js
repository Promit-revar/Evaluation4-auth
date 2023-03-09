const redis = require('redis');

exports.insertIntoRedis = async(token) => {
  const config = {
    socket: {
      host: process.env.REDIS_HOST || "redis",
      port: 6379,
    },
  };
  //console.log(config,process.env.REDIS_HOST)
  const client = redis.createClient(config);
  await client.connect()
  await client.set(token, 1);
}
exports.getFromRedis = async(token) => {
  const config = {
    socket: {
      host: process.env.REDIS_HOST || "redis",
      port: 6379,
    },
  };
  //console.log(config)
  const client = redis.createClient(config);
  await client.connect()
  return await client.get(token);
}
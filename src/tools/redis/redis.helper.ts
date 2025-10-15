import { redisClient } from "../../config/redis";

const redisSet = async (key: string, value: any) => {
  await redisClient.set(key, JSON.stringify(value), "EX", 60);
  return true;
};

const redisGet = async (key: string) => JSON.parse(await redisClient.get(key)||"[]");

const redisHset = async (key: string, field: string, value: any) => await redisClient.hset(key,field, JSON.stringify(value));

const redisHget = async (key: string, field: string) => JSON.parse(await redisClient.hget(key, field) || '[]');

const keyDelete = async (pattern: string) => {
  const keys = await redisClient.keys(pattern);
  console.log(keys);
  
  if(!keys.length) return
  console.log(keys);
  
  await redisClient.del(keys);
}

const HKeyDelete = async (key: string) => {
  const keys = await redisClient.hkeys(key);

  
  if(!keys.length) return

  
  await redisClient.hdel(key,...keys);
}

export const RedisHelper = { redisSet, redisGet, redisHset, redisHget, keyDelete, HKeyDelete };
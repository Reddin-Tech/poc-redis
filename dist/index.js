"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = require("ioredis");
const redisCluster = new ioredis_1.Cluster([
    {
        host: "simplejusinstance-0001-001.gv5qub.0001.sae1.cache.amazonaws.com",
        port: 6379,
    },
    {
        host: "simplejusinstance-0001-002.gv5qub.0001.sae1.cache.amazonaws.com",
        port: 6379,
    },
], {
// redisOptions: {
//   tls: {},
// },
});
redisCluster.on("connect", () => {
    console.log("Conectado ao Redis Cluster com sucesso!");
});
redisCluster.on("error", (err) => {
    console.error("Erro ao conectar ao Redis Cluster:", err);
});
exports.default = redisCluster;

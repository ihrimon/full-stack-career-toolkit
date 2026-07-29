# 🧠 Redis Guide

[⬅ Back to main README](../README.md)

> Redis (Remote Dictionary Server) is an open-source, in-memory data structure store used as a database, cache, message broker, and session store.

## Table of Contents

| Topics                                                         | Overview                                       |
| -------------------------------------------------------------- | ---------------------------------------------- |
| [01. Installation & Setup](#01-installation--setup)            | Install, start service, verify connection      |
| [02. Configuration](#02-configuration)                         | redis.conf, bind, port, memory, eviction       |
| [03. Persistence](#03-persistence)                             | RDB snapshot, AOF, backup directory            |
| [04. Security](#04-security)                                   | Password, firewall, TLS, dangerous commands    |
| [05. Data Structures](#05-data-structures)                     | String, List, Hash, Set, Sorted Set, Bitmap    |
| [06. Core Commands](#06-core-commands)                         | CRUD, expiry, keys, transactions               |
| [07. Caching Patterns](#07-caching-patterns)                   | Cache-aside, TTL, eviction, invalidation       |
| [08. Performance](#08-performance)                             | Pipeline, connection pool, slow log, lazy free |
| [09. Pub/Sub & Streams](#09-pubsub--streams)                   | Publish, subscribe, consumer groups            |
| [10. Monitoring](#10-monitoring)                               | INFO, memory, hit rate, Grafana                |
| [11. High Availability](#11-high-availability)                 | Sentinel, Cluster, replication                 |
| [12. Production Best Practices](#12-production-best-practices) | Key naming, backup, versioning, separation     |

---

## 01. Installation & Setup

- [ ] Install Redis (`apt install redis` / `brew install redis` / Docker)
- [ ] Start Redis service (`systemctl start redis` / `redis-server`)
- [ ] Verify connection (`redis-cli ping` → should return `PONG`)
- [ ] Check Redis version (`redis-cli INFO server | grep redis_version`)
- [ ] Connect via Redis CLI (`redis-cli -h 127.0.0.1 -p 6379`)
- [ ] Run with Docker (`docker run -d -p 6379:6379 redis`)

---

## 02. Configuration (`redis.conf`)

### 🔹 Network

- [ ] Set bind address (`bind 127.0.0.1`)
- [ ] Consider changing default port (`6379`)
- [ ] Keep protected mode enabled (`protected-mode yes`)
- [ ] Enable TCP keepalive (`tcp-keepalive 60`)
- [ ] Set idle connection timeout (`timeout 300`)

### 🔹 Memory

- [ ] Set max memory limit (`maxmemory 512mb`)
- [ ] Configure eviction policy (`maxmemory-policy allkeys-lru`)
- [ ] Enable lazy freeing (`lazyfree-lazy-eviction yes`)

### 🔹 Logging

- [ ] Set log level (`loglevel notice`)
- [ ] Set log file path (`logfile /var/log/redis/redis.log`)
- [ ] Enable slow log (`slowlog-log-slower-than 10000`)

---

## 03. Persistence

### 🔹 RDB (Snapshot)

- [ ] Enable RDB snapshots (`save 900 1` / `save 300 10` / `save 60 10000`)
- [ ] Set RDB filename (`dbfilename dump.rdb`)
- [ ] Set backup directory (`dir /var/lib/redis`)
- [ ] Keep RDB compression enabled (`rdbcompression yes`)

### 🔹 AOF (Append Only File)

- [ ] Decide on AOF usage (`appendonly yes`)
- [ ] Configure AOF fsync policy (`appendfsync everysec`)
- [ ] Set AOF rewrite threshold (`auto-aof-rewrite-percentage 100`)
- [ ] Set AOF file path (`appendfilename appendonly.aof`)

---

## 04. Security

- [ ] Set a strong password (`requirepass YourStrongPassword123!`)
- [ ] Rename dangerous commands (`rename-command FLUSHALL ""`)
- [ ] Disable `FLUSHDB` command in production
- [ ] Disable `DEBUG` command in production
- [ ] Restrict port access via firewall (trusted IPs only)
- [ ] Set up TLS/SSL (`tls-port 6380` + certificate config)
- [ ] Run Redis as a non-root user
- [ ] Isolate Redis inside a VPC or network namespace

---

## 05. Data Structures

### 🔹 String

- [ ] `SET` / `GET` — set and read a value
- [ ] `INCR` / `DECR` — increment/decrement a counter
- [ ] `APPEND` — append to an existing value
- [ ] `MSET` / `MGET` — set and get multiple keys at once

### 🔹 List

- [ ] `LPUSH` / `RPUSH` — push from left/right
- [ ] `LPOP` / `RPOP` — pop from left/right
- [ ] `LRANGE` — read a specific range
- [ ] `LLEN` — get list length

### 🔹 Hash

- [ ] `HSET` / `HGET` — set and read a field
- [ ] `HMSET` / `HMGET` — multiple fields at once
- [ ] `HGETALL` — get all fields and values
- [ ] `HDEL` — delete a field

### 🔹 Set

- [ ] `SADD` / `SMEMBERS` — add and view members
- [ ] `SISMEMBER` — check if a member exists
- [ ] `SUNION` / `SINTER` — union and intersection
- [ ] `SREM` — remove a member

### 🔹 Sorted Set

- [ ] `ZADD` — add a member with a score
- [ ] `ZRANGE` / `ZREVRANGE` — read in order
- [ ] `ZSCORE` — get score of a specific member
- [ ] `ZRANK` / `ZREVRANK` — get rank of a member

### 🔹 Bitmap & HyperLogLog

- [ ] `SETBIT` / `GETBIT` — set and read a bit
- [ ] `BITCOUNT` — count set bits
- [ ] `PFADD` / `PFCOUNT` — unique count estimation (HLL)

---

## 06. Core Commands

### 🔹 Key Management

- [ ] `EXISTS key` — check if a key exists
- [ ] `DEL key` — delete a key
- [ ] `EXPIRE key seconds` — set a TTL
- [ ] `TTL key` — check remaining time
- [ ] `PERSIST key` — remove TTL from a key
- [ ] `RENAME key newkey` — rename a key
- [ ] `TYPE key` — check the data type
- [ ] Use `SCAN` instead of `KEYS *` (avoids blocking in production)

### 🔹 Transactions

- [ ] `MULTI` / `EXEC` — begin and commit a transaction
- [ ] `DISCARD` — cancel a transaction
- [ ] `WATCH key` — optimistic locking

### 🔹 Scripting

- [ ] `EVAL` — run a Lua script
- [ ] `EVALSHA` — run a cached script

---

## 07. Caching Patterns

- [ ] Implement cache-aside pattern
- [ ] Always set a TTL (`EXPIRE key 3600`)
- [ ] Handle cache stampede problem
- [ ] Define a cache invalidation strategy
- [ ] Choose write-through vs write-behind approach
- [ ] Identify and resolve hot key issues
- [ ] Serialize large objects before storing
- [ ] Separate cache by namespace (`user:cache:*`)

---

## 08. Performance

- [ ] Avoid `KEYS *` command — use `SCAN` instead
- [ ] Use pipelining to send multiple commands at once
- [ ] Set up a connection pool
- [ ] Enable lazy freeing (`lazyfree-lazy-eviction yes`)
- [ ] Review slow log regularly (`SLOWLOG GET`)
- [ ] Compress large values before storing
- [ ] Use `O(N)` complexity commands with caution
- [ ] Choose appropriate data structures (Hash vs String)
- [ ] Use batch operations (`MGET`, `MSET`, `HMGET`)

---

## 09. Pub/Sub & Streams

### 🔹 Pub/Sub

- [ ] `SUBSCRIBE channel` — subscribe to a channel
- [ ] `PUBLISH channel message` — publish a message
- [ ] `UNSUBSCRIBE` — unsubscribe from a channel
- [ ] `PSUBSCRIBE pattern` — pattern-based subscription

### 🔹 Streams (Redis 5.0+)

- [ ] `XADD` — add an entry to a stream
- [ ] `XREAD` — read from a stream
- [ ] `XGROUP CREATE` — create a consumer group
- [ ] `XREADGROUP` — read as a group
- [ ] `XACK` — acknowledge a message

---

## 10. Monitoring

- [ ] Check health with `INFO` command (`redis-cli INFO stats`)
- [ ] Monitor memory usage regularly (`INFO memory`)
- [ ] Track connected client count (`CLIENT LIST`)
- [ ] Monitor cache hit rate (80%+ is healthy)
- [ ] Enable keyspace notifications if needed
- [ ] Use `MONITOR` command for real-time command inspection (dev only)
- [ ] Set up Redis Exporter (Prometheus)
- [ ] Build a Grafana dashboard
- [ ] Define alert rules (memory usage, latency thresholds)

---

## 11. High Availability

### 🔹 Replication

- [ ] Set up master-replica replication
- [ ] Configure `replicaof <masterip> <masterport>`
- [ ] Keep replicas read-only (`replica-read-only yes`)
- [ ] Monitor replication lag

### 🔹 Sentinel

- [ ] Set up Redis Sentinel (minimum 3 nodes)
- [ ] Test automatic failover
- [ ] Define Sentinel quorum
- [ ] Use a Sentinel-aware client in the application

### 🔹 Cluster

- [ ] Set up Redis Cluster (minimum 6 nodes)
- [ ] Verify hash slot distribution
- [ ] Check cluster status with `CLUSTER INFO`
- [ ] Use a cluster-aware client library

---

## 12. Production Best Practices

- [ ] Define a key naming convention (`user:42:profile`)
- [ ] Take regular backups (`.rdb` file to S3 or external storage)
- [ ] Keep Redis version up to date (security patches)
- [ ] Use separate instances for cache and session storage
- [ ] Set memory limit correctly (max 75% of available RAM)
- [ ] Disable swap memory on Linux
- [ ] Set `vm.overcommit_memory = 1` on Linux
- [ ] Disable `transparent_hugepage` on Linux
- [ ] Implement circuit breaker pattern in the application
- [ ] Ensure graceful shutdown of Redis connections
- [ ] Test production config in a staging environment
- [ ] Create a disaster recovery plan


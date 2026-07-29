# 🔌 Socket.io Guide

[⬅ Back to main README](../README.md)

> Socket.IO is a library that enables low-latency, bidirectional, event-based communication between a client and a server built on top of the WebSocket protocol.

## Table of Contents

| Topics                                                                  | Overview                                            |
| ----------------------------------------------------------------------- | --------------------------------------------------- |
| [01. Installation & Setup](#01-installation--setup)                     | Install, basic server/client setup                  |
| [02. Core Concepts](#02-core-concepts)                                  | Events, emit, on, namespaces, rooms                 |
| [03. Server Configuration](#03-server-configuration)                    | CORS, transport, ping, adapter                      |
| [04. Client Configuration](#04-client-configuration)                    | Connection options, reconnection, auth              |
| [05. Events & Communication](#05-events--communication)                 | Emit patterns, acknowledgements, broadcasting       |
| [06. Namespaces](#06-namespaces)                                        | Dynamic namespaces, middleware per namespace        |
| [07. Rooms](#07-rooms)                                                  | Join, leave, broadcast to room                      |
| [08. Authentication & Authorization](#08-authentication--authorization) | JWT, middleware, handshake, RBAC                    |
| [09. Scaling & Redis Adapter](#09-scaling--redis-adapter)               | Horizontal scaling, Redis adapter, sticky sessions  |
| [10. Error Handling](#10-error-handling)                                | Connection errors, event errors, reconnection logic |
| [11. Performance Optimization](#11-performance-optimization)            | Binary data, compression, event throttling          |
| [12. Monitoring & Debugging](#12-monitoring--debugging)                 | Logging, Socket.IO Admin UI, metrics                |
| [13. Security](#13-security)                                            | Input validation, rate limiting, CSRF               |
| [14. Testing](#14-testing)                                              | Unit tests, integration tests, E2E                  |
| [15. Production Best Practices](#15-production-best-practices)          | Deployment, load balancing, graceful shutdown       |

---

## 01. Installation & Setup

- [ ] Install Socket.IO server (`npm install socket.io`)
- [ ] Install Socket.IO client (`npm install socket.io-client`)
- [ ] Set up basic HTTP + Socket.IO server
- [ ] Connect client to server
- [ ] Verify connection with `connect` and `disconnect` events
- [ ] Set up with Express.js
- [ ] Set up with Next.js (custom server or API route)
- [ ] Set up with Fastify or NestJS (if applicable)

```js
// Basic server setup
import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('connected:', socket.id);
});

httpServer.listen(3000);
```

---

## 02. Core Concepts

- [ ] Understand the Socket.IO event model
- [ ] Understand `socket.id` — unique per connection
- [ ] Understand the difference between `io` (server) and `socket` (single client)
- [ ] Understand transport fallback (WebSocket → HTTP long-polling)
- [ ] Understand the difference between `emit` and `broadcast`
- [ ] Understand namespaces vs rooms
- [ ] Understand acknowledgement callbacks
- [ ] Understand the connection lifecycle (connect → events → disconnect)

---

## 03. Server Configuration

### 🔹 CORS

- [ ] Configure `cors` option correctly
- [ ] Restrict allowed origins in production
- [ ] Set allowed methods and headers
- [ ] Handle credentials with `credentials: true`

### 🔹 Transport

- [ ] Configure transports (`["websocket", "polling"]`)
- [ ] Prefer WebSocket-only in production if possible
- [ ] Understand polling fallback and its trade-offs

### 🔹 Ping & Timeout

- [ ] Set `pingTimeout` (default: 20000ms)
- [ ] Set `pingInterval` (default: 25000ms)
- [ ] Tune values based on network conditions

### 🔹 Adapter

- [ ] Use default in-memory adapter for single server
- [ ] Switch to Redis adapter for multi-server setup
- [ ] Consider MongoDB adapter for persistence needs

---

## 04. Client Configuration

- [ ] Set server URL correctly
- [ ] Configure `autoConnect` option
- [ ] Set `reconnection: true` (enabled by default)
- [ ] Configure `reconnectionAttempts` limit
- [ ] Configure `reconnectionDelay` and `reconnectionDelayMax`
- [ ] Pass `auth` token on connection
- [ ] Handle `connect_error` event on client
- [ ] Handle `disconnect` event and reason

```js
// Client setup with auth
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000', {
  auth: { token: 'your-jwt-token' },
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

socket.on('connect', () => console.log('connected:', socket.id));
socket.on('connect_error', (err) => console.error(err.message));
```

---

## 05. Events & Communication

### 🔹 Basic Emit

- [ ] `socket.emit(event, data)` — send to this client
- [ ] `io.emit(event, data)` — broadcast to all clients
- [ ] `socket.broadcast.emit(event, data)` — send to all except sender
- [ ] `io.to(roomId).emit(event, data)` — send to a room
- [ ] `socket.to(socketId).emit(event, data)` — send to specific client

### 🔹 Acknowledgements

- [ ] Use acknowledgement callbacks for confirmed delivery
- [ ] Handle acknowledgement timeout (`timeout()`)
- [ ] Use `emitWithAck()` for async/await style

```js
// With acknowledgement
socket.emit('create:post', { title: 'Hello' }, (response) => {
  console.log(response.status); // "ok"
});

// Async style
const response = await socket.emitWithAck('create:post', { title: 'Hello' });
```

### 🔹 Event Patterns

- [ ] Use consistent event naming convention (`noun:verb`)
- [ ] Send structured payloads (objects, not plain strings)
- [ ] Validate received event data on both sides
- [ ] Handle unknown or unexpected events gracefully

---

## 06. Namespaces

- [ ] Use the default namespace (`/`) for general use
- [ ] Create custom namespaces for feature separation (`/chat`, `/admin`)
- [ ] Apply middleware at the namespace level
- [ ] Use dynamic namespaces with regex or function
- [ ] Restrict namespace access by role or permission

```js
// Custom namespace
const chatNsp = io.of('/chat');
chatNsp.on('connection', (socket) => {
  console.log('joined /chat:', socket.id);
});
```

---

## 07. Rooms

- [ ] `socket.join(room)` — join a room
- [ ] `socket.leave(room)` — leave a room
- [ ] `io.to(room).emit(event, data)` — broadcast to a room
- [ ] `socket.rooms` — get all rooms a socket is in
- [ ] Auto-join user to their own room on connect (`socket.join(socket.id)`)
- [ ] Clean up rooms on disconnect
- [ ] Use room names that are meaningful (`user:42`, `chat:room1`)
- [ ] Avoid too many small rooms — group logically

---

## 08. Authentication & Authorization

- [ ] Validate auth token in server-side middleware
- [ ] Use JWT for stateless authentication
- [ ] Attach user data to `socket.data` after auth
- [ ] Reject unauthorized connections with `next(new Error(...))`
- [ ] Apply namespace-level middleware for role checks
- [ ] Protect sensitive events with per-event auth checks
- [ ] Invalidate socket on token expiry

```js
// Auth middleware
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  try {
    const user = verifyJWT(token);
    socket.data.user = user;
    next();
  } catch (err) {
    next(new Error('Unauthorized'));
  }
});
```

---

## 09. Scaling & Redis Adapter

- [ ] Understand why in-memory adapter fails with multiple servers
- [ ] Install Redis adapter (`npm install @socket.io/redis-adapter`)
- [ ] Install `ioredis` (`npm install ioredis`)
- [ ] Connect pub/sub Redis clients to the adapter
- [ ] Verify cross-server broadcasting works correctly
- [ ] Enable sticky sessions on load balancer (required for polling transport)
- [ ] Use `socket.io-sticky` or configure Nginx/HAProxy for sticky sessions
- [ ] Test failover behavior when a Redis node goes down

```js
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'ioredis';

const pubClient = createClient({ host: 'localhost', port: 6379 });
const subClient = pubClient.duplicate();

io.adapter(createAdapter(pubClient, subClient));
```

---

## 10. Error Handling

- [ ] Handle `connect_error` on client side
- [ ] Handle `disconnect` event and log the reason
- [ ] Wrap event handlers in try/catch blocks
- [ ] Emit an error event back to the client on failure
- [ ] Implement reconnection logic on client
- [ ] Handle server-side middleware errors with `next(new Error(...))`
- [ ] Log all unhandled errors with context (socket ID, user)
- [ ] Avoid crashing the server on a single socket error

---

## 11. Performance Optimization

- [ ] Use binary data (`ArrayBuffer`, `Buffer`) for media transfers
- [ ] Enable compression (`perMessageDeflate: true`)
- [ ] Throttle high-frequency events (e.g., cursor movement, typing)
- [ ] Debounce client-side event emits
- [ ] Avoid sending large payloads — paginate or chunk data
- [ ] Use `volatile.emit()` for non-critical real-time data (drops if disconnected)
- [ ] Minimize the number of active listeners per socket
- [ ] Remove event listeners when no longer needed (`socket.off()`)

---

## 12. Monitoring & Debugging

- [ ] Enable Socket.IO debug logs (`DEBUG=socket.io* node server.js`)
- [ ] Set up Socket.IO Admin UI (`@socket.io/admin-ui`)
- [ ] Track active socket count with `io.engine.clientsCount`
- [ ] Monitor room membership size
- [ ] Log connect/disconnect events with timestamp and user info
- [ ] Set up Prometheus metrics with custom counters
- [ ] Monitor event latency with acknowledgement timestamps
- [ ] Alert on abnormal disconnection rate

---

## 13. Security

- [ ] Validate and sanitize all incoming event payloads
- [ ] Use a schema validation library (Zod, Joi) for event data
- [ ] Rate limit events per socket (e.g., max 10 messages/sec)
- [ ] Prevent message flooding with server-side throttling
- [ ] Use HTTPS/WSS in production (never plain HTTP)
- [ ] Do not expose internal server errors to the client
- [ ] Reject connections from disallowed origins
- [ ] Avoid storing sensitive data in `socket.data` beyond session scope
- [ ] Implement per-event authorization checks

---

## 14. Testing

### 🔹 Unit Testing

- [ ] Test event handlers in isolation
- [ ] Mock `socket` and `io` objects
- [ ] Test middleware functions independently

### 🔹 Integration Testing

- [ ] Spin up a real Socket.IO server in tests
- [ ] Connect a real client using `socket.io-client`
- [ ] Test full emit → receive → acknowledgement flow
- [ ] Test room join/leave behavior
- [ ] Test auth middleware with valid and invalid tokens

### 🔹 E2E Testing

- [ ] Use Playwright or Cypress with WebSocket support
- [ ] Simulate multi-client scenarios
- [ ] Test reconnection behavior
- [ ] Test behavior under high event frequency

---

## 15. Production Best Practices

- [ ] Use WSS (WebSocket Secure) with a valid TLS certificate
- [ ] Put Socket.IO server behind Nginx or a load balancer
- [ ] Enable sticky sessions if using HTTP long-polling
- [ ] Use PM2 or a process manager with cluster mode
- [ ] Set up health check endpoint for the HTTP server
- [ ] Gracefully close all sockets on server shutdown
- [ ] Drain connections before deploying new version
- [ ] Use environment variables for all config (port, Redis URL, JWT secret)
- [ ] Separate Socket.IO server from REST API server if traffic is high
- [ ] Document all custom events in a shared contract (server ↔ client)
- [ ] Version your event API for backward compatibility
- [ ] Monitor memory usage — Socket.IO can leak if listeners are not removed


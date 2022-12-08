# Ethan Winters `v2`
    Based on Express + discord.js and uses ethanwinters-cms for managing stuff.

## Bot Information

### Intents
- `GatewayIntentBits.Guilds`

### Environment Variables
- `EW_PORT` 
- `EW_DISCORD_APP_ID`
- `EW_DISCORD_TOKEN`

## Commands

### Namespaces
- Add a new namespace `cms-only`.
- List all namespaces.
- Show amount of credit used from pool.

### Servers
- List all servers in a namespace.
- Show amount of credit used from pool.
- Add a server to a namespace.
- Get current server status.
- Request server start.
- Stop server.
- Restart server.

### Users
- List all users in a namespace.
- Apply a cooldown to a user.
- Add a user to a namespace.
- Add a role to a namespace.
- Remove a user from a namespace.

### Global Credit Pool
- Show current credit pool.

## Description
Each 'namespace' will hold resources that can be managed using the bot. Example: a `yuzu` namespace will hold resources
related to that software. A user will have permissions based on namespaces, an admin will have permission for all of them.

A common resource in a namespace is a `server`, a server can be (requested, stopped, restarted); request is a command unlocked
to everyone in that namespace, it uses credits from a global credit pool and if the pool is under a threshold, only an admin
will be able to request a server. Stop and Restart is common commands and everyone in that namespace can use it.

A server will be automatically stopped if there's no http requests made in a custom time window (default 20 minutes) and
a custom cool down (default 5 min) is applied to the user that originally requested it.

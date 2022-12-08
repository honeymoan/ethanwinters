export function discordToken() {
  const token = process.env.EW_DISCORD_TOKEN;
  return token !== undefined ? token : "";
}

export function appPort() {
  const port = process.env.EW_PORT;
  return port !== undefined ? port : "";
}

export function discordId() {
  const id = process.env.EW_DISCORD_APP_ID;
  return id !== undefined ? id : "";
}

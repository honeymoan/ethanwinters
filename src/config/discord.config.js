import { Client, GatewayIntentBits, REST } from 'discord.js';

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

export function getClient() {
  return client;
}

export function getRestClient(token) {
  const rest = new REST({ version: '10' });
  rest.setToken(token);
  return rest;
}

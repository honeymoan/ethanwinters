import path from 'path';
import { pathToFileURL } from 'url';
import * as EnvironmentVariables from '../config/env.config.js';
import getLogger from '../config/logger.config.js';
import { createFilePath, readDirFromPath } from '../common/path.common.js';
import { getClient, getRestClient } from '../config/discord.config.js';
import { Collection, Routes } from 'discord.js';

const log = getLogger();
let client = getClient();

function registerCommandsRemote(json) {
  const token = EnvironmentVariables.discordToken();
  const discordId = EnvironmentVariables.discordId();
  const restClient = getRestClient(token);

  log.info(
    `Started refreshing ${client.commands.size} application slash commands.`
  );

  restClient
    .put(Routes.applicationCommands(discordId), {
      body: json
    })
    .then(() => log.info('Registered all slash commands successfully.'))
    .catch(log.error.bind(log));
}

export async function registerCommands() {
  let remoteJson = [];
  const folder = createFilePath('../commands');
  const files = readDirFromPath(folder);

  client.commands = new Collection();
  log.info(`Registering ${files.length} slash commands.`);

  for (const file of files) {
    const filePath = pathToFileURL(path.join(folder, file));
    const command = await import(filePath);

    client.commands.set(command.data.name, command);
    remoteJson.push(command.data.toJSON());
    log.info(`Registered "${command.data.name}" slash command.`);
  }

  registerCommandsRemote(remoteJson);
}

export async function registerEvents() {
  const folder = createFilePath('../events');
  const files = readDirFromPath(folder);

  client.commands = new Collection();
  log.info(`Registering ${files.length} bot events.`);

  for (const file of files) {
    const filePath = pathToFileURL(path.join(folder, file));
    const event = await import(filePath);

    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }

    log.info(`Registered "${event.name}" bot event.`);
  }
}

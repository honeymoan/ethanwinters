import * as dotenv from "dotenv";
import express from "express";
import getLogger from "./src/config/logger.config.js";
import { getClient } from "./src/config/discord.config.js";
import * as EnvironmentVariables from "./src/config/env.config.js";
import * as LifecycleService from "./src/services/lifecycle.service.js";

dotenv.config();
const log = getLogger();
const app = express();
const port = EnvironmentVariables.appPort();
const token = EnvironmentVariables.discordToken();
const client = getClient();

LifecycleService.registerCommands();
LifecycleService.registerEvents();

app.listen(port, () => {
  log.info(`Ethan Winters API listening on ${port}.`);
});

client.login(token).then(() => {
  log.info(`Ethan Winters DISCORD BOT was logged in.`);
});

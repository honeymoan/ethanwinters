import { Events } from "discord.js";
import getLogger from "../config/logger.config.js";

const log = getLogger();

export const name = Events.ClientReady;
export const once = true;

export function execute(client) {
  log.info(`Ready! Logged in as ${client.user.tag}`);
}

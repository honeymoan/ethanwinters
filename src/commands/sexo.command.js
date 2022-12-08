import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("sexo")
  .setDescription("sexo bot legal top kwai");

export async function execute(interaction) {
  await interaction.reply("teste do getulio");
}

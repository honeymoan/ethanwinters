import { SlashCommandBuilder } from 'discord.js';
import { doc, setDoc } from 'firebase/firestore';
import getLogger from '../config/logger.config.js';
import { db } from '../services/firebase.service.js';
import { v4 as uuidv4 } from 'uuid';

const log = getLogger();

export const data = new SlashCommandBuilder()
  .setName('ares_add_user')
  .setDescription('Adiciona um usuário do discord ao Ares')
  .addUserOption((option) =>
    option
      .setName('user')
      .setDescription('Usuário a ser adicionado')
      .setRequired(true)
  )
  .addBooleanOption((option) =>
    option
      .setName('is_admin')
      .setDescription('Seta se o usuário é um admin Ares')
  );

export async function execute(interaction) {
  const user = interaction.options.getUser('user');
  const isAdmin = interaction.options.getBoolean('is_admin');
  const userUUID = uuidv4();

  try {
    await setDoc(doc(db, 'users', userUUID), {
      userId: user.id,
      username: user.username,
      isAdmin: isAdmin
    });
  } catch (e) {
    log.error('Error adding document: ', e);
  }

  await interaction.reply(`esse usuário é sexo ${user}, de código ${user.id}`);
}

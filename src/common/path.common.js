import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

export function readDirFromPath(path) {
  return fs.readdirSync(path).filter((file) => file.endsWith('.js'));
}

export function createFilePath(folder) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, folder);
}

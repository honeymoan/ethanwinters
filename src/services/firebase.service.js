import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import getLogger from '../config/logger.config.js';
import * as Environment from '../config/firebaseEnv.config.js';

const firebaseConfig = {
  authDomain: 'ethanwinters-bot.firebaseapp.com',
  projectId: 'ethanwinters-bot',
  storageBucket: 'ethanwinters-bot.appspot.com'
};

const log = getLogger();
export let db;

export function register() {
  log.info('Starting Firebase SDK and registering modules.');

  firebaseConfig.apiKey = Environment.apiKey();
  firebaseConfig.appId = Environment.appID();
  firebaseConfig.messagingSenderId = Environment.messagingSenderID();
  firebaseConfig.measurementId = Environment.messagingSenderID();

  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}

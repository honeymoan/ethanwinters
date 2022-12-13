export function apiKey() {
  const apiKey = process.env.EW_FIREBASE_APIKEY;
  return apiKey !== undefined ? apiKey : '';
}

export function messagingSenderID() {
  const id = process.env.EW_FIREBASE_MESSAGINGSENDERID;
  return id !== undefined ? id : '';
}

export function appID() {
  const id = process.env.EW_FIREBASE_APPID;
  return id !== undefined ? id : '';
}

export function measurementID() {
  const id = process.env.EW_FIREBASE_MEASUREMENTID;
  return id !== undefined ? id : '';
}

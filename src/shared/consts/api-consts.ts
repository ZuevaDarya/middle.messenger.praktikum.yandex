export const URLS = {
  BASE: 'https://ya-praktikum.tech/api/v2',
  RESOURCES: 'https://ya-praktikum.tech/api/v2/resources',
  WSS_CHATS: 'wss://ya-praktikum.tech/ws/chats',
};

export const HEADERS = {
  CT_APPLICATION_JSON: { 'Content-Type': 'application/json' },
  ACCEPT: { 'Accept': 'application/json' }
};

export const lOCAL_STORAGE = {
  isSignin: 'isSignin',
};

export enum TypesWebsocketMessage {
  Ping = 'ping',
  Pong = 'pong',
  Message = 'message',
  GetOld = 'get old',
}

export enum WebSocketActions {
  Open = 'open',
  Close = 'close',
  Message = 'message',
  Error = 'error',
}

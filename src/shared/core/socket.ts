import { TypesWebsocketMessage, WebSocketActions } from '../consts/api-consts';
import EventBus from './event-bus';

class Socket extends EventBus {
  private interval = 0;
  private timeout = 5 * 1000;
  private path: string;
  private socket?: WebSocket;

  constructor(path: string) {
    super();

    this.path = path;
    this.socket = new WebSocket(this.path);
  }

  private resetInterval() {
    this.interval = 0;
  }

  private onOpen(socket: WebSocket) {
    socket.addEventListener(WebSocketActions.Open, () => {
      console.log('Соединение установлено');
      this.emit(WebSocketActions.Open);
    })
  }

  private onMessage(socket: WebSocket) {
    socket.addEventListener(WebSocketActions.Message, event => {
      const data = JSON.parse(event.data);
      if (data.type === TypesWebsocketMessage.Pong) {
        return;
      }

      this.emit(WebSocketActions.Message, data);
    });
  }

  private onClose(socket: WebSocket) {
    socket.addEventListener(WebSocketActions.Close, event => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);

      this.emit(WebSocketActions.Close);
    });
  }

  private onPing() {
    this.interval = setInterval(() => {
      this.sendData({ type: TypesWebsocketMessage.Ping });
    }, this.timeout) as unknown as number;

    this.on(WebSocketActions.Close, () => {
      clearInterval(this.interval);
      this.resetInterval();
    });
  }

  sendData(data: unknown) {
    if (this.socket) {
      this.socket.send(JSON.stringify(data));
    } else {
      throw new Error('Данные не отправлены');
    }
  }

  private onEventListeners(socket: WebSocket) {
    this.onOpen(socket);
    this.onMessage(socket);
    this.onClose(socket);
  }

  openConnection() {
    this.onEventListeners(this.socket!);
    this.onPing();

    return new Promise<void>(resolve => {
      this.on(WebSocketActions.Open, () => resolve());
    });
  }

  close() {
    this.socket?.close();
  }
}

export default Socket;

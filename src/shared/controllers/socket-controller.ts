import { TypesWebsocketMessage, URLS, WebSocketActions } from '../consts/api-consts';
import { MessageType } from '../types';
import Socket from '../core/socket';
import store from '../core/store';

class SocketController {
  private chats: { chatId: number, socket: Socket }[] = [];

  get currentChat() {
    return store.getState().currentChat;
  }

  get userInfo() {
    return store.getState().user;
  }

  findChatIndex(chatId: number) {
    return this.chats.findIndex(chat => chat.chatId === chatId);
  }

  getPrivious(chatId: number) {
    const idx = this.findChatIndex(chatId);
    this.chats[idx].socket.sendData({ type: TypesWebsocketMessage.GetOld, content: '0' });
  }

  sendMessage(chatId: number, message: string) {
    const idx = this.findChatIndex(chatId);
    this.chats[idx].socket.sendData({ type: TypesWebsocketMessage.Message, content: message });
  }

  closeAllChatsSocket() {
    if (this.chats.length) {
      [...this.chats].forEach(chat => chat.socket.close());
    }
  }

  private setMessage(chatId: number, messages: MessageType | []) {
    const oldMessages = store.getState().messages?.[chatId] || [];
    let newMessages: MessageType[] = [];

    if (Array.isArray(messages)) {
      newMessages = messages;
    } else {
      newMessages.push(messages);
    }

    store.setState(`chats.${chatId}`, newMessages.concat(oldMessages));
  }

  private async connectToSocket(chatId: number, userId: number, token: string) {
    try {
      const webSocket = new Socket(`${URLS.WSS_CHATS}${userId}/${chatId}/${token}`);
      this.chats.push({ chatId, socket: webSocket });

      await webSocket.openConnection();

      webSocket.on(WebSocketActions.Message, event => this.setMessage(chatId, event as MessageType));
      webSocket.on(WebSocketActions.Close, () => {
        const idx = this.findChatIndex(chatId);
        this.chats.splice(idx, 1);
      });
    } catch (error) {
      throw new Error(String(error));
    }
  }

  async open(chatId: number, token: string) {
    if (this.findChatIndex(chatId)) {
      return;
    }

    await this.connectToSocket(chatId, this.userInfo.id, token);
    this.getPrivious(chatId);
  }
}

export default new SocketController();

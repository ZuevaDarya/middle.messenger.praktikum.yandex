import { ChatType, MessageType, UserType } from '../types';
import { TypesWebsocketMessage, URLS, WebSocketActions } from '../consts/api-consts';
import ChatController from './chat-controller';
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

  private getPrevious(chatId: number) {
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

    ChatController.getChatUserById(chatId);

    const chats = store.getState().chats;
    const chatIdInArray = chats!.findIndex(chat => chat.id === chatId);
    const chatUsers = store.getState().currentChatUsers;

    if (chatUsers?.length) {
      const lastNewMessage = newMessages[0];
      const senderUser = chatUsers?.filter(user => user.id === lastNewMessage.user_id)[0];

      if (chatIdInArray > -1) {
        const lastMessage = {
          ...chats![chatIdInArray].last_message,
          content: lastNewMessage.content,
          time: lastNewMessage.time,
          user: {
            ...chats![chatIdInArray].last_message!.user,
            display_name: senderUser.display_name
          } as UserType
        }

        const chatWithLastMsg = { ...chats![chatIdInArray], last_message: lastMessage };
        chats![chatIdInArray] = chatWithLastMsg as ChatType;
        store.setState('chats', chats);
      }
    }

    store.setState(`messages.${chatId}`, newMessages.concat(oldMessages));
  }

  private async connectToSocket(chatId: number, userId: number, token: string) {
    try {
      const webSocket = new Socket(`${URLS.WSS_CHATS}/${userId}/${chatId}/${token}`);
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
    if (this.chats.find(chat => chat.chatId === chatId)) {
      return;
    }

    await this.connectToSocket(chatId, this.userInfo.id, token);
    this.getPrevious(chatId);
  }
}

export default new SocketController();

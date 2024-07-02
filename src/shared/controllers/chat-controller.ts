import chatApi from '../api/chat-api';
import { ChatType } from '../types';
import socketController from './socket-controller';
import store from '../core/store';

class ChatController {
  private isResponseSuccess(response: XMLHttpRequest) {
    return response.status >= 200 && response.status <= 300;
  }

  async getUserChats() {
    try {
      const response = await chatApi.getUserChats();

      if (this.isResponseSuccess(response)) {
        const chats = JSON.parse(response.response);

        if (chats.length) {
          chats.map(async (chat: ChatType) => {
            const token = JSON.parse(await this.getChatToken(chat.id)).token;
            await socketController.open(chat.id, token);
          });

          store.setState('chats', chats);
        }
      }
    } catch (error) {
      throw new Error(String(error));
    }
  }

  async createChat(title: string) {
    try {
      await chatApi.createChat(title);
    } catch (error) {
      alert('Чат не был создан! Попробуйте создать чат еще раз!');
    }
  }

  async deleteChatById(chatId: number) {
    try {
      const response = await chatApi.deleteChatById(chatId);

      if (this.isResponseSuccess(response)) {
        store.setState('currentChat', null);
      } else {
        throw JSON.parse(response.response).reason;
      }

      await this.getUserChats();
    } catch (error) {
      alert(error);
    }
  }

  async getChatUserById(chatId: number) {
    try {
      const usersInfo = (await chatApi.getChatUserById(chatId)).response;
      store.setState('currentChatUsers', JSON.parse(usersInfo));
    } catch (error) {
      throw new Error(String(error));
    }
  }

  async getCountNewMessagesInChat(chatId: number) {
    try {
      await chatApi.getChatUserById(chatId);
    } catch (error) {
      throw new Error(String(error));
    }
  }

  async uploadChatAvatar(data: FormData) {
    try {
      const response = await chatApi.uploadChatAvatar(data);

      if (this.isResponseSuccess(response)) {
        const currentChat = JSON.parse(response.response);
        store.setState('currentChat', currentChat);

        const chats = store.getState().chats;
        const chatIdInArray = chats!.findIndex(chat => chat.id === currentChat.id)

        if (chatIdInArray > -1) {
          chats![chatIdInArray] = { ...chats![chatIdInArray], ...currentChat };
          store.setState('chats', chats);
        }
      }
    } catch (error) {
      alert('Файл слишком большой!');
    }
  }

  async addUsersToChat(users: number[], chatId: number) {
    try {
      await chatApi.addUsersToChat(users, chatId);
    } catch (error) {
      throw new Error(String(error));
    }
  }

  async deleteUsersFromChat(users: number[], chatId: number) {
    try {
      await chatApi.deleteUsersFromChat(users, chatId);
    } catch (error) {
      throw new Error(String(error));
    }
  }

  async getChatToken(chatId: number) {
    return (await chatApi.getChatToken(chatId)).response;
  }

  setCurrentChat(chat: ChatType) {
    store.setState('currentChat', chat);
  }
}

export default new ChatController();

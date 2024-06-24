import chatApi from '../api/chat-api';
import { ChatType } from '../types';
import socketController from './socket-controller';
import store from '../core/store';

class ChatController {
  async getUserChats() {
    try {
      const response = (await chatApi.getUserChats()).response;
      const chats = JSON.parse(response);

      if (chats.length) {
        chats.forEach(async (chat: ChatType) => {
          const token = await this.getChatToken(chat.id);
          await socketController.open(chat.id, token as unknown as string)
        });
      }

      store.setState('chats', chats);
    } catch (error) {
      throw new Error(String(error));
    }
  }

  async createChat(title: string) {
    try {
      await chatApi.createChat(title);
      await this.getUserChats();
    } catch (error) {
      alert('Чат не был создан! Попробуйте создать чат еще раз!');
      throw new Error(String(error));
    }
  }

  async deleteChatById(chatId: number) {
    try {
      const response = await chatApi.deleteChatById(chatId);

      if (response) {
        store.setState('currentChat', null);
      }

      await this.getUserChats();
    } catch (error) {
      throw new Error(String(error));
    }
  }

  async getChatUserById(chatId: number) {
    try {
      const usersInfo = (await chatApi.getChatUserById(chatId)).response;
      store.setState('currentChatUsers', usersInfo);
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

  async uploadChatAvatar(chatId: number, avatar: unknown) {
    try {
      const response = await chatApi.uploadChatAvatar(chatId, avatar);

      if (response) {
        store.setState('user.avatar', avatar);
      }
    } catch (error) {
      throw new Error(String(error));
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
}

export default new ChatController();

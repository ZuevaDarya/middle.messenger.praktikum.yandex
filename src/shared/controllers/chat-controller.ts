import chatApi from '../api/chat-api';
import { ChatType } from '../types';
import Router from '../router/router';
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
      const response = await chatApi.createChat(title);

      if (this.isResponseSuccess(response)) {
        alert('Чат доваблен!');
        Router.go(Router.currentRoute);
      } else {
        throw JSON.parse(response.response).reason;
      }
    } catch (error) {
      alert(`Чат не был создан! Попробуйте создать чат еще раз! ${error}`);
    }
  }

  async deleteChatById(chatId: number) {
    try {
      const response = await chatApi.deleteChatById(chatId);

      if (this.isResponseSuccess(response)) {
        alert('Чат удален!');
        store.setState('currentChat', null);
        Router.go(Router.currentRoute);
      } else {
        throw JSON.parse(response.response).reason;
      }

      await this.getUserChats();
    } catch (error) {
      alert(`Чат не был удален! Попробуйте удалить чат еще раз! ${error}`);
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
      const response = await chatApi.addUsersToChat(users, chatId);

      if (this.isResponseSuccess(response)) {
        alert('Пользователь добавлен в чат!');
      } else {
        throw JSON.parse(response.response).reason;
      }
    } catch (error) {
      alert(error);
    }
  }

  async deleteUsersFromChat(users: number[], chatId: number) {
    try {
      const response = await chatApi.deleteUsersFromChat(users, chatId);

      if (this.isResponseSuccess(response)) {
        const currentChatUsers = store.getState().currentChatUsers;
        const currentChatUserUpdate = users.map(userIdTODelete => (
          currentChatUsers!.filter(user => user.id !== userIdTODelete)
        ));

        alert('Пользователь удален из чата!');
        store.setState('currentChatUsers', currentChatUserUpdate[0]);
        Router.go(Router.currentRoute);
      } else {
        throw JSON.parse(response.response).reason;
      }
    } catch (error) {
      alert(error);
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

import { BaseAPI } from './base-api';

class ChatAPI extends BaseAPI {
  constructor() {
    super({ path: '/chats' });
  }

  getUserChats() {
    return this.get('');
  }

  createChat(title: string) {
    return this.post('', { title });
  }

  deleteChatById(chatId: number) {
    return this.delete('', { chatId });
  }

  getChatUserById(chatId: number) {
    return this.get(`${chatId}/users`);
  }

  getCountNewMessagesInChat(chatId: number) {
    return this.get(`new/${chatId}`);
  }

  uploadChatAvatar(chatId: number, avatar: unknown) {
    return this.put('avatar', { chatId, avatar });
  }

  addUsersToChat(users: number[], chatId: number) {
    return this.put('users', { users, chatId });
  }

  deleteUsersFromChat(users: number[], chatId: number) {
    return this.delete('users', { users, chatId });
  }

  getChatToken(chatId: number) {
    return this.post(`token/${chatId}`, {});
  }
}

export default new ChatAPI();

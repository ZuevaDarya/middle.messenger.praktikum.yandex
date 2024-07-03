import { UserPasswordType, UserProfileInfoType } from '../types';
import { BaseAPI } from './base-api';

class UserAPI extends BaseAPI {
  constructor() {
    super({ path: '/user' });
  }

  changeUserProfile(data: UserProfileInfoType) {
    return this.put('profile', data);
  }

  changeUserAvatar(data: FormData) {
    return this.put('profile/avatar', data, {});
  }

  changeUserPassord(data: UserPasswordType) {
    return this.put('password', data);
  }

  searchUserByLogin(login: string) {
    return this.post('search', { login });
  }

  getUserInfoById(userId: number) {
    return this.get(`${userId}`);
  }
}

export default new UserAPI();

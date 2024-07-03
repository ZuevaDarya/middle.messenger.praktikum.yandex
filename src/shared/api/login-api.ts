import { SigninType, SignupType } from '../types';
import { BaseAPI } from './base-api';

class LoginAPI extends BaseAPI {
  constructor() {
    super({ path: '/auth' });
  }

  signup(data: SignupType) {
    return this.post('signup', { ...data });
  }

  signin(data: SigninType) {
    return this.post('signin', { ...data });
  }

  logout() {
    return this.post('logout', {});
  }

  getUserInfo() {
    return this.get('user');
  }
}

export default new LoginAPI();

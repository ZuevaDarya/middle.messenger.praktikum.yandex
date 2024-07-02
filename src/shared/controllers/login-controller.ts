import { SigninType, SignupType } from '../types';
import { lOCAL_STORAGE } from '../consts/api-consts';
import loginApi from '../api/login-api';
import Router from '../router/router';
import { Routes } from '../consts/routes';
import socketController from './socket-controller';
import store from '../core/store';

class LoginController {
  get isUserLogout(): boolean {
    return Router.currentRoute === Routes.Login || Router.currentRoute === Routes.Registration;
  }

  get isPageError(): boolean {
    return Router.currentRoute === Routes.Error400 || Router.currentRoute === Routes.Error500;
  }

  private isResponseSuccess(response: XMLHttpRequest) {
    return response.status >= 200 && response.status <= 300;
  }

  async signin(data: SigninType) {
    try {
      const response = await loginApi.signin(data);

      if (this.isResponseSuccess(response)) {
        localStorage.setItem(lOCAL_STORAGE.isSignin, 'true');
        Router.go(Routes.Chats);
      } else {
        throw JSON.parse(response.response).reason;
      }
    } catch (error) {
      if (error === 'User already in system') {
        localStorage.setItem(lOCAL_STORAGE.isSignin, 'true');
        Router.go(Routes.Chats);
      } else {
        alert(error);
      }
    }
  }

  async signup(data: SignupType) {
    try {
      const response = await loginApi.signup(data);

      if (this.isResponseSuccess(response)) {
        localStorage.setItem(lOCAL_STORAGE.isSignin, 'true');
        Router.go(Routes.Chats);
      } else {
        throw JSON.parse(response.response).reason;
      }
    } catch (error) {
      if (error === 'User already in system') {
        localStorage.setItem(lOCAL_STORAGE.isSignin, 'true');
        Router.go(Routes.Chats);
      } else {
        alert(error);
      }
    }
  }

  async logout() {
    try {
      socketController.closeAllChatsSocket();

      const response = await loginApi.logout();
      if (this.isResponseSuccess(response)) {
        localStorage.setItem(lOCAL_STORAGE.isSignin, 'false');
        Router.go(Routes.Login);
      } else {
        throw JSON.parse(response.response).reason;
      }
    } catch (error) {
      alert(error);
    }
  }

  async getUserInfo() {
    try {
      const response = await loginApi.getUserInfo();

      if (this.isResponseSuccess(response)) {
        const userInfo = JSON.parse(response.response);
        store.setState('user', userInfo);

        return response.response;
      } else {
        throw JSON.parse(response.response).reason;
      }
    } catch (error) {
      alert(error);
    }
  }

  async start() {
    const currentUser = store.getState().user;
    const isUserExists = Object.values(currentUser).length;

    try {
      if (!isUserExists) {
        const response = await this.getUserInfo();

        if (response) {
          const user = store.getState().user;

          if (!user.reason) {
            if (this.isPageError || this.isUserLogout) {
              Router.go(Routes.Chats);
            }
          } else {
            Router.go(Routes.Login);
          }
        }
      }
    } catch (error) {
      Router.go(Routes.Login);
    }
  }
}

export default new LoginController();

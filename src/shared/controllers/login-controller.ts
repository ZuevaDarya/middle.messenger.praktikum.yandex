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
        alert('Вы не зарегистрированы!')
        Router.go(Routes.Login);
      }
    } catch (error) {
      throw new Error(String(error));
    }
  }

  async signup(data: SignupType) {
    try {
      const response = await loginApi.signup(data);

      if (this.isResponseSuccess(response)) {
        localStorage.setItem(lOCAL_STORAGE.isSignin, 'true');
        Router.go(Routes.Chats);
      } else {
        alert('Вы уже зарегистрированы!')
        Router.go(Routes.Registration);
      }
    } catch (error) {
      throw new Error(String(error));
    }
  }

  async logout() {
    try {
      socketController.closeAllChatsSocket();
      await loginApi.logout();
      localStorage.setItem(lOCAL_STORAGE.isSignin, 'false');
      Router.go(Routes.Login);
    } catch (error) {
      throw new Error(String(error));
    }
  }

  async getUserInfo() {
    try {
      const userInfoResponse = (await loginApi.getUserInfo()).response;
      const userInfo = JSON.parse(userInfoResponse);
      store.setState('user', userInfo);

      return userInfoResponse;
    } catch (error) {
      throw new Error(String(error));
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

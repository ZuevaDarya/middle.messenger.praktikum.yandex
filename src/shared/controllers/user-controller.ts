import { UserPasswordType, UserProfileInfoType } from '../types';
import Router from '../router/router';
import { Routes } from '../consts/routes';
import store from '../core/store';
import userApi from '../api/user-api';

class UserController {
  async changeUserProfile(userData: UserProfileInfoType) {
    try {
      const response = await userApi.changeUserProfile(userData);

      if (response) {
        const userData = JSON.parse(response.response);

        store.setState('user', userData);
        Router.go(Routes.Profile);
      }
    } catch (error) {
      throw new Error(String(error));
    }
  }

  async changeUserAvatar(avatar: FormData) {
    try {
      const response = await userApi.changeUserAvatar(avatar);

      if (response) {
        const userData = JSON.parse(response.response);

        store.setState('user', userData);
      }
    } catch (error) {
      throw new Error(String(error));
    }
  }

  async changeUserPassword(data: UserPasswordType) {
    try {
      const response = await userApi.changeUserPassord(data);

      if (response) {
        Router.go(Routes.Profile);
      } else {
        alert('Пароль не обновлен! Проверьте корректность введенных данных!');
      }

    } catch (error) {
      throw new Error(String(error));
    }
  }

  async searchUserByLogin(login: string) {
    try {
      return (await userApi.searchUserByLogin(login)).response;
    } catch (error) {
      throw new Error(String(error));
    }
  }

  async getUserInfoById(userId: number) {
    try {
      return (await userApi.getUserInfoById(userId)).response;
    } catch (error) {
      throw new Error(String(error));
    }
  }
}

export default new UserController();

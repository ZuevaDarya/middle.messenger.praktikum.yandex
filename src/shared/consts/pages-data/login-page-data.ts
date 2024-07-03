import { Routes } from '../routes';

export const LOGIN_PAGE_DATA = [
  {
    title: 'Логин',
    name: 'login',
    type: 'text'
  },
  {
    title: 'Пароль',
    name: 'password',
    type: 'password'
  }
];

export const LOGIN_PAGE_ITEMS = {
  button: {
    buttonClass: 'form__button',
    text: 'Авторизироваться'
  },
  link: {
    linkUrl: Routes.Registration,
    text: 'Нет аккаунта?'
  }
}


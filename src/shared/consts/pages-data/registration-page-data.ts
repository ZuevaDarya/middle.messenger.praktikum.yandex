import { Routes } from '../routes';

export const REGISTRATION_PAGE_DATA = [
  {
    title: 'Почта',
    type: 'email',
    name: 'email'
  },
  {
    title: 'Логин',
    type: 'text',
    name: 'login'
  },
  {
    title: 'Имя',
    type: 'text',
    name: 'first_name',
  },
  {
    title: 'Фамилия',
    type: 'text',
    name: 'second_name',
  },
  {
    title: 'Телефон',
    type: 'tel',
    name: 'phone',
  },
  {
    title: 'Пароль',
    type: 'password',
    name: 'password',
  },
  {
    title: 'Пароль (еще раз)',
    type: 'password',
    name: 'password_again',
  },
];

export const REGISTRATION_PAGE_ITEMS = {
  button: {
    buttonClass: 'form__button',
    text: 'Зарегистрироваться'
  },
  link: {
    linkUrl: Routes.Login,
    text: 'Войти?'
  }
};


import Router from '../../../shared/router/router';
import { Routes } from '../routes';

export const ERROR_PAGES_DATA = {
  error400: {
    code: '404',
    text: 'Вы можете вернуться на страницу с чатами по кнопке ниже',
    title: 'Упсс... Такая страница не найдена',
    button: {
      buttonClass: 'error__button',
      buttonText: 'Назад к чатам',
      events: {
        click: (e: MouseEvent) => {
          e.preventDefault();
          Router.go(Routes.Chats);
        }
      }
    }
  },
  error500: {
    code: '500',
    text: 'Вы можете вернуться на страницу с чатами по кнопке ниже',
    title: 'Мы уже фиксим!',
    button: {
      buttonClass: 'error__button',
      buttonText: 'Назад к чатам',
      events: {
        click: (e: MouseEvent) => {
          e.preventDefault();
          Router.go(Routes.Chats);
        }
      }
    }
  }
};



import Button from '../../components/button';
import Error from '../../components/error';
import Error500 from './error-500';
import Link from '../../components/link';
import Navigation from '../../components/navigation';

export const error500Page = new Error500('main', {
  navigation: new Navigation('nav', {
    lists: [
      new Link('a', { url: '', text: 'Логин', page: 'login' }),
      new Link('a', { url: '', text: 'Регистрация', page: 'registration' }),
      new Link('a', { url: '', text: 'Чат', page: 'chat' }),
      new Link('a', { url: '', text: 'Профиль', page: 'profile' }),
      new Link('a', { url: '', text: 'Изменить данные профиля', page: 'profileData' }),
      new Link('a', { url: '', text: 'Изменить пароль профиля', page: 'ProfilePassword' }),
      new Link('a', { url: '', text: 'Ошибка 404', page: 'error400' }),
      new Link('a', { url: '', text: 'Ошибка 500', page: 'error500' }),
    ]
  }),
  error: new Error('div', {
    code: '500',
    text: 'Вы можете вернуться на страницу с чатами по кнопке ниже',
    title: 'Мы уже фиксим!',
    button: new Button('button', {
      attr: { class: 'error__button' },
      text: 'Назад к чатам',
      page: 'chat'
    })
  })
});




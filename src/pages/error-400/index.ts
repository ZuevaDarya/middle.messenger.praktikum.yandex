

import Button from '../../components/button';
import Error from '../../components/error';
import Error400 from './error-400';

export const error400Page = new Error400('main', {
  error: new Error('div', {
    code: '404',
    text: 'Вы можете вернуться на страницу с чатами по кнопке ниже',
    title: 'Упсс... Такая страница не найдена',
    button: new Button('button', {
      attr: { class: 'error__button' },
      text: 'Назад к чатам',
      page: 'chat'
    })
  })
});




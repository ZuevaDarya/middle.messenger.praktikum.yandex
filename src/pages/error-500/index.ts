

import Button from '../../components/button';
import Error from '../../components/error';
import Error500 from './error-500';

export const error500Page = new Error500('main', {
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




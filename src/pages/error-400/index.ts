

import Button from '../../components/button';
import { chatPage } from '../chat';
import Error from '../../components/error';
import Error400 from './error-400';
import { removeChildrenInRoot } from '../../shared/utils/remove-children-in-root';
import { render } from '../../shared/utils/render';

export const error400Page = new Error400('main', {
  error: new Error('div', {
    code: '404',
    text: 'Вы можете вернуться на страницу с чатами по кнопке ниже',
    title: 'Упсс... Такая страница не найдена',
    button: new Button('button', {
      attr: { class: 'error__button' },
      text: 'Назад к чатам',
      page: 'chat',
      events: {
        click: () => {
          removeChildrenInRoot('#app');
          render('#app', chatPage);
        }
      }
    })
  })
});




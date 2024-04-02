import Button from '../../components/button';
import { chatPage } from '../chat';
import Error from '../../components/error';
import Error500 from './error-500';
import { removeChildrenInRoot } from '../../shared/utils/remove-children-in-root';
import { render } from '../../shared/utils/render';

export const error500Page = new Error500('main', {
  error: new Error('div', {
    code: '500',
    text: 'Вы можете вернуться на страницу с чатами по кнопке ниже',
    title: 'Мы уже фиксим!',
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




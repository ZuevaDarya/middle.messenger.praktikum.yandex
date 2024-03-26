import { chatPage } from '../../pages/chat';
import { error400Page } from '../../pages/error-400';
import { error500Page } from '../../pages/error-500';
import Link from '../../components/link';
import { loginPage } from '../../pages/login';
import { profileDataPage } from '../../pages/profile-data';
import { profilePage } from '../../pages/profile';
import { profilePasswordPage } from '../../pages/profile-password';
import { registartionPage } from '../../pages/registration';
import { removeChildrenInRoot } from '../utils/remove-children-in-root';
import { render } from '../utils/render';

export const NAVIGATION = [
  new Link('a', {
    url: '#',
    text: 'Логин',
    events: {
      click: () => {
        removeChildrenInRoot('#app');
        render('#app', loginPage);
      }
    }
  }),
  new Link('a', {
    url: '#',
    text: 'Регистрация',
    events: {
      click: () => {
        removeChildrenInRoot('#app');
        render('#app', registartionPage);
      }
    }
  }),
  new Link('a', {
    url: '#',
    text: 'Чат',
    events: {
      click: () => {
        removeChildrenInRoot('#app');
        render('#app', chatPage);
      }
    }
  }),
  new Link('a', {
    url: '#',
    text: 'Профиль',
    events: {
      click: () => {
        removeChildrenInRoot('#app');
        render('#app', profilePage);
      }
    }
  }),
  new Link('a', {
    url: '#',
    text: 'Изменить данные профиля',
    events: {
      click: () => {
        removeChildrenInRoot('#app');
        render('#app', profileDataPage);
      }
    }
  }),
  new Link('a', {
    url: '#',
    text: 'Изменить пароль профиля',
    events: {
      click: () => {
        removeChildrenInRoot('#app');
        render('#app', profilePasswordPage);
      }
    }
  }),
  new Link('a', {
    url: '#',
    text: 'Ошибка 404',
    events: {
      click: () => {
        removeChildrenInRoot('#app');
        render('#app', error400Page);
      }
    }
  }),
  new Link('a', {
    url: '#',
    text: 'Ошибка 500',
    events: {
      click: () => {
        removeChildrenInRoot('#app');
        render('#app', error500Page);
      }
    }
  }),
];

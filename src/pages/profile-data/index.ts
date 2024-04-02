
import Button from '../../components/button';
import ProfileAvatar from '../../components/profile-avatar';
import ProfileCloseButton from '../../components/profile-close-button';
import ProfileData from './profile-data';
import ProfileInput from '../../components/profile-input';
import { profilePage } from '../profile';
import { removeChildrenInRoot } from '../../shared/utils/remove-children-in-root';
import { render } from '../../shared/utils/render';
import { validateFormData } from '../../shared/utils/validate-form-data';
import { validateSubmit } from '../../shared/utils/validate-submit';

export const profileDataPage = new ProfileData('div', {
  events: {
    submit: {
      event: (e: Event) => validateSubmit(e),
      querySelector: 'form'
    }
  },
  profileCloseButton: new ProfileCloseButton('div', {
    page: 'profile',
    events: {
      click: () => {
        removeChildrenInRoot('#app');
        render('#app', profilePage);
      }
    }
  }),
  profileAvatar: new ProfileAvatar('div', { src: '/img/profile-avatar.png', name: 'Иван' }),
  profileContentList: [
    new ProfileInput('div', {
      attr: { class: ['profile-item_border-green', 'before-profile'] },
      title: 'Имя',
      placeholder: 'Иван',
      name: 'first_name',
      type: 'text',
      events: {
        blur: {
          event: (e: Event) => validateFormData(e),
          querySelector: 'input'
        }
      }
    }),
    new ProfileInput('div', {
      attr: { class: ['profile-item_border-green', 'profile-item_with-margin'] },
      title: 'Фамилия',
      placeholder: 'Иванов',
      name: 'second_name',
      type: 'text',
      events: {
        blur: {
          event: (e: Event) => validateFormData(e),
          querySelector: 'input'
        }
      }
    }),
    new ProfileInput('div', {
      attr: { class: ['profile-item_border-green', 'before-email'] },
      title: 'Почта',
      placeholder: 'pochta@yandex.ru',
      name: 'email',
      type: 'email',
      events: {
        blur: {
          event: (e: Event) => validateFormData(e),
          querySelector: 'input'
        }
      }
    }),
    new ProfileInput('div', {
      attr: { class: ['profile-item_border-green', 'before-login'] },
      title: 'Логин',
      placeholder: 'ivanivanov',
      name: 'login',
      type: 'text',
      events: {
        blur: {
          event: (e: Event) => validateFormData(e),
          querySelector: 'input'
        }
      }
    }),
    new ProfileInput('div', {
      attr: { class: ['profile-item_border-green', 'before-chat-name'] },
      title: 'Имя в чате',
      placeholder: 'Иван',
      name: 'display_name',
      type: 'text',
      events: {
        blur: {
          event: (e: Event) => validateFormData(e),
          querySelector: 'input'
        }
      }
    }),
    new ProfileInput('div', {
      attr: { class: ['profile-item_border-green', 'before-phone'] },
      title: 'Телефон',
      placeholder: '+7 (909) 967 30 30',
      name: 'phone',
      type: 'tel',
      events: {
        blur: {
          event: (e: Event) => validateFormData(e),
          querySelector: 'input'
        }
      }
    }),
  ],
  button: new Button('button', {
    text: 'Сохранить',
    attr: { class: 'profile-data-button' }
  })
});


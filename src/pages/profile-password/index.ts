
import Button from '../../components/button';
import ProfileAvatar from '../../components/profile-avatar';
import ProfileCloseButton from '../../components/profile-close-button';
import ProfileInput from '../../components/profile-input';
import { profilePage } from '../profile';
import ProfilePassword from './profile-password';
import { removeChildrenInRoot } from '../../shared/utils/remove-children-in-root';
import { render } from '../../shared/utils/render';
import { validateFormData } from '../../shared/utils/validation-func/validate-form-data';
import { validateSubmit } from '../../shared/utils/validation-func/validate-submit';

export const profilePasswordPage = new ProfilePassword('div', {
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
      attr: { class: 'profile-item_border-green' },
      title: 'Старый пароль',
      placeholder: 'Старый пароль',
      name: 'oldPassword',
      type: 'password',
      events: {
        blur: {
          event: (e: Event) => validateFormData(e),
          querySelector: 'input'
        }
      }
    }),
    new ProfileInput('div', {
      attr: { class: 'profile-item_border-green' },
      title: 'Новый пароль',
      placeholder: 'Новый пароль',
      name: 'newPassword',
      type: 'password',
      events: {
        blur: {
          event: (e: Event) => validateFormData(e),
          querySelector: 'input'
        }
      }
    }),
    new ProfileInput('div', {
      attr: { class: 'profile-item_border-green' },
      title: 'Повторите новый пароль',
      placeholder: 'Повторите новый пароль',
      type: 'password',
      name: 'password_again',
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


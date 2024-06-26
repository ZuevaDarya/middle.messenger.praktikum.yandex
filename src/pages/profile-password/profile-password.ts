import {
  AVATAR_LOCAL_PATH,
  PROFILE_CHANGE_BUTTON,
  PROFILE_CHANGE_PASSWORD_ITEMS
} from '../../shared/consts/pages-data/profile-page-data';
import store, { StoreEvents } from '../../shared/core/store';
import Block from '../../shared/core/block';
import Button from '../../components/button';
import { getFormData } from '../../shared/utils/validation-func/get-form-data';
import LoginController from '../../shared/controllers/login-controller';
import ProfileAvatar from '../../components/profile-avatar';
import ProfileCloseButton from '../../components/profile-close-button';
import ProfileInput from '../../components/profile-input';
import profilePasswordTmpl from './profile-password.tmpl';
import Router from '../../shared/router/router';
import { Routes } from '../../shared/consts/routes';
import { URLS } from '../../shared/consts/api-consts';
import UserController from '../../shared/controllers/user-controller';
import { UserPasswordType } from '../../shared/types';
import { validateFormData } from '../../shared/utils/validation-func/validate-form-data';
import { validateSubmit } from '../../shared/utils/validation-func/validate-submit';

export default class ProfilePassword extends Block {
  constructor() {
    super('main', {
      profileCloseButton: new ProfileCloseButton({
        events: {
          click: (event: MouseEvent) => {
            event.preventDefault();
            Router.go(Routes.Profile)
          }
        }
      }),
      events: {
        submit: {
          event: (e: Event) => {
            e.preventDefault();

            const data = getFormData(e.target as HTMLFormElement) as unknown as UserPasswordType;

            if (validateSubmit(e)) {
              const { oldPassword, newPassword } = data;
              UserController.changeUserPassword({ oldPassword, newPassword });
              alert('Данные обновлены!');
              Router.go(Routes.Profile);
            }
          },
          querySelector: 'form'
        }
      },
      button: new Button({ ...PROFILE_CHANGE_BUTTON })
    });

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
      this.redefineInit();
    });
  }

  preRender() {
    this.removeChildrenInRoot();
    LoginController.start();
  }

  redefineInit() {
    const user = store.getState().user;

    if (user.avatar) {
      this.children['profileAvatar'] = new ProfileAvatar({
        name: user.first_name,
        src: `${URLS.RESOURCES}/${user.avatar}`
      });
    } else {
      this.children['profileAvatar'] = new ProfileAvatar({
        name: user.first_name,
        src: AVATAR_LOCAL_PATH
      });
    }

    this.lists['profileContentList'] = PROFILE_CHANGE_PASSWORD_ITEMS.map(
      item => new ProfileInput({
        ...item,
        events: {
          blur: {
            event: (e: Event) => validateFormData(e),
            querySelector: 'input'
          }
        }
      })
    );
  }

  redefineRender() {
    return profilePasswordTmpl;
  }
}

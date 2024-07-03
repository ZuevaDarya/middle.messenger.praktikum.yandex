import {
  AVATAR_LOCAL_PATH,
  PROFILE_CHANGE_BUTTON,
  PROFILE_USER_DATA
} from '../../shared/consts/pages-data/profile-page-data';
import store, { StoreEvents } from '../../shared/core/store';
import Block from '../../shared/core/block';
import Button from '../../components/button';
import { fileReader } from '../../shared/utils/file-reader';
import { getFormData } from '../../shared/utils/validation-func/get-form-data';
import LoginController from '../../shared/controllers/login-controller';
import Popup from '../../components/popup';
import { POPUPS_DATA } from '../../shared/consts/pages-data/popups-data';
import ProfileAvatar from '../../components/profile-avatar';
import ProfileCloseButton from '../../components/profile-close-button';
import profileDataTmpl from './profile-data.tmpl';
import ProfileInput from '../../components/profile-input';
import Router from '../../shared/router/router';
import { Routes } from '../../shared/consts/routes';
import { URLS } from '../../shared/consts/api-consts';
import UserController from '../../shared/controllers/user-controller';
import { UserProfileInfoType } from '../../shared/types';
import { validateFormData } from '../../shared/utils/validation-func/validate-form-data';
import { validateSubmit } from '../../shared/utils/validation-func/validate-submit';

export default class ProfileData extends Block {
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
    const fields = [
      user.first_name,
      user.second_name,
      user.email,
      user.login,
      user.display_name,
      user.phone
    ];

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

    this.lists['profileContentList'] = PROFILE_USER_DATA.map(
      (item, idx) => new ProfileInput({
        ...item,
        data: fields[idx],
        events: {
          blur: {
            event: (e: Event) => validateFormData(e),
            querySelector: 'input'
          }
        }
      })
    );

    this.props['events'] = {
      click: {
        event: (e: Event) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          e.stopPropagation();

          this.children['popup'] = new Popup({
            title: POPUPS_DATA.loadAvatar.title,
            buttonText: POPUPS_DATA.loadAvatar.buttonText,
            name: POPUPS_DATA.loadAvatar.name,
            type: POPUPS_DATA.loadAvatar.type,
            accept: POPUPS_DATA.loadAvatar.accept,
            events: {
              submit: {
                event: (e: Event) => {
                  e.preventDefault();
                  fileReader(e.target as HTMLFormElement);
                },
                querySelector: '.popup__form'
              }
            }
          });
        },
        querySelector: '.profile-avatar__container'
      } as unknown as EventListener
    }

    this.props['events'] = {
      submit: {
        event: (e: Event) => {
          e.preventDefault();

          const data = getFormData(e.target as HTMLFormElement) as unknown as UserProfileInfoType;

          if (validateSubmit(e)) {
            UserController.changeUserProfile(data);
            alert('Данные обновлены!');
            Router.go(Routes.Profile);
          }
        },
        querySelector: '.profile-content'
      } as unknown as EventListener
    }
  }

  redefineRender() {
    return profileDataTmpl;
  }
}


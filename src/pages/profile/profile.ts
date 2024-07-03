import {
  AVATAR_LOCAL_PATH,
  PROFILE_SETTINGS_DATA,
  PROFILE_USER_DATA
} from '../../shared/consts/pages-data/profile-page-data';
import store, { StoreEvents } from '../../shared/core/store';
import Block from '../../shared/core/block';
import { fileReader } from '../../shared/utils/file-reader';
import LoginController from '../../shared/controllers/login-controller';
import Popup from '../../components/popup';
import { POPUPS_DATA } from '../../shared/consts/pages-data/popups-data';
import ProfileAvatar from '../../components/profile-avatar';
import ProfileCloseButton from '../../components/profile-close-button';
import ProfileItem from '../../components/profile-item';
import profileTmpl from './profile.tmpl';
import Router from '../../shared/router/router';
import { Routes } from '../../shared/consts/routes';
import { URLS } from '../../shared/consts/api-consts';

export default class Profile extends Block {
  constructor() {
    super('main', {
      profileCloseButton: new ProfileCloseButton({
        events: {
          click: (event: MouseEvent) => {
            event.preventDefault();
            Router.go(Routes.Chats)
          },
        }
      }),
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
        src: `${URLS.RESOURCES}/${user.avatar}`,
        popup: this.children['popup'] as Block
      });
    } else {
      this.children['profileAvatar'] = new ProfileAvatar({
        name: user.first_name,
        src: AVATAR_LOCAL_PATH,
        popup: this.children['popup'] as Block
      });
    }

    this.lists['profileContentList'] = PROFILE_USER_DATA.map(
      (item, idx) => new ProfileItem({
        ...item,
        data: fields[idx]
      })
    );

    this.lists['profileSettingList'] = PROFILE_SETTINGS_DATA.map(item => new ProfileItem({ ...item }));

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
  }

  redefineRender() {
    return profileTmpl;
  }
}


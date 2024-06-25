import { PROFILE_SETTINGS_DATA, PROFILE_USER_DATA } from '../../shared/consts/pages-data/profile-page-data';
import store, { StoreEvents } from '../../shared/core/store';
import Block from '../../shared/core/block';
import LoginController from '../../shared/controllers/login-controller';
import ProfileAvatar from '../../components/profile-avatar';
import ProfileCloseButton from '../../components/profile-close-button';
import ProfileItem from '../../components/profile-item';
import profileTmpl from './profile.tmpl';

export default class Profile extends Block {
  constructor() {
    super('main', {
      profileCloseButton: new ProfileCloseButton(),
      profileAvatar: new ProfileAvatar({
        src: '/img/profile-avatar.png',
        name: 'Иван'
      }),
    });

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
      this.redefineInit();
    })
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

    this.lists['profileContentList'] = PROFILE_USER_DATA.map(
      (item, idx) => new ProfileItem({
        ...item,
        data: fields[idx]
      })
    );

    this.lists['profileSettingList'] = PROFILE_SETTINGS_DATA.map(item => new ProfileItem({ ...item }));
  }

  redefineRender() {
    return profileTmpl;
  }
}


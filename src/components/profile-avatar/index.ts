// import { AVATAR_LOCAL_PATH } from '../../shared/consts/pages-data/profile-page-data';
import Block from '../../shared/core/block';
import { IProfileAvatar } from '../../shared/types';
import profileAvatarTmpl from './profile-avatar';

export default class ProfileAvatar extends Block {
  constructor(props: IProfileAvatar) {
    super('div', {
      ...props,
      src: props.src,
      events: {
        click: (e: MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          //props.popup?.props['isDisplay'] = true;
          // this.children['popup'] = new Popup({
          //   title: POPUPS_DATA.loadAvatar.title,
          //   isDisplay: true,
          //   buttonText: POPUPS_DATA.loadAvatar.buttonText,
          //   name: POPUPS_DATA.loadAvatar.name,
          //   type: POPUPS_DATA.loadAvatar.type
          // })
        }
      }
    });
  }

  protected redefineInit() {

  }

  redefineRender() {
    return profileAvatarTmpl;
  }
}


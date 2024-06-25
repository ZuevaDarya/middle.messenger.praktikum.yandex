import Block from '../../shared/core/block';
import profileCloseButtonTmpl from './profile-close-button';
import Router from '../../shared/router/router';
import { Routes } from '../../shared/consts/routes';

export default class ProfileCloseButton extends Block {
  constructor() {
    super('div', {
      events: {
        click: (event: MouseEvent) => {
          event.preventDefault();
          Router.go(Routes.Chats)
        }
      }
    })
  }
  redefineRender() {
    return profileCloseButtonTmpl;
  }
}


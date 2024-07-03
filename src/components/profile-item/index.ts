import Block from '../../shared/core/block';
import { IProfileItem } from '../../shared/types';
import profileItemTmpl from './profile-item';

export default class ProfileItem extends Block {
  constructor(props: IProfileItem) {
    super('div', { ...props });
  }

  redefineRender() {
    return profileItemTmpl;
  }
}


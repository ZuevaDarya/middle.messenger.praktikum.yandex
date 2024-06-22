import Block from '../../shared/core/block';
import profileDataTmpl from './profile-data.tmpl';

export default class ProfileData extends Block {
  redefineRender() {
    return profileDataTmpl;
  }
}


import Block from '../../shared/utils/block';
import profileDataTmpl from './profile-data.tmpl';

export default class ProfileData extends Block {
  redefineRender() {
    return profileDataTmpl;
  }
}


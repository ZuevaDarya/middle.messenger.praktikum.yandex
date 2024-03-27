import Block from '../../shared/utils/block';
import profileInputTmpl from './profile-input';

export default class ProfileInput extends Block {
  redefineRender() {
    return profileInputTmpl;
  }
}


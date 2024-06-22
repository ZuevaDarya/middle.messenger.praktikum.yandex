import Block from '../../shared/core/block';
import profileInputTmpl from './profile-input';

export default class ProfileInput extends Block {
  redefineRender() {
    return profileInputTmpl;
  }
}


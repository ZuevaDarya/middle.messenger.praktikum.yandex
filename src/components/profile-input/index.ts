import Block from '../../shared/core/block';
import { IProfileInput } from '../../shared/types';
import profileInputTmpl from './profile-input';

export default class ProfileInput extends Block {
  constructor(props: IProfileInput) {
    super('div', {
      ...props,
      placeholder: props.data ? props.data: props.title ,
      value: props.data
    })
  }
  redefineRender() {
    return profileInputTmpl;
  }
}


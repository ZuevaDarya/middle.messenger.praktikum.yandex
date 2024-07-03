import Block from '../../shared/core/block';
import Button from '../button';
import formFooterTmpl from './form-footer';
import { IFormFooter } from '../../shared/types';
import Link from '../link';

export default class FormFooter extends Block {
  constructor(props: IFormFooter) {
    super('div', {
      button: new Button({
        buttonClass: props.buttonClass,
        buttonText: props.buttonText,
      }),
      link: new Link({
        url: props.linkUrl,
        text: props.linkText,
      })
    });
  }

  redefineRender() {
    return formFooterTmpl;
  }
}



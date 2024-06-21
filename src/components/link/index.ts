import Block from '../../shared/utils/block';
import { ILink } from '../../shared/types';
import linkTmpl from './link';
import Router from '../../shared/router/router';

export default class Link extends Block {
  constructor(props: ILink) {
    super('a', {
      ...props,
      events: {
        click: (e: MouseEvent) => {
          e.preventDefault();
          Router.go(props.url);
        }
      }
    });
  }

  redefineRender() {
    return linkTmpl;
  }
}


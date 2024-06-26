import Block from '../../shared/core/block';
import Error from '../../components/error';
import error400Tmpl from './error-400.tmpl';
import { ERROR_PAGES_DATA } from '../../shared/consts/pages-data/error-page-data';

export default class Error400 extends Block {
  constructor() {
    super('main', {
      error: new Error({ ...ERROR_PAGES_DATA.error400 }),
    });
  }
  redefineRender() {
    return error400Tmpl;
  }
}


import Block from '../../shared/core/block';
import Error from '../../components/error';
import error500Tmpl from './error-500.tmpl';
import { ERROR_PAGES_DATA } from '../../shared/consts/pages-data/error-page-data';

export default class Error500 extends Block {
  constructor() {
    super('main', {
      error: new Error({ ...ERROR_PAGES_DATA.error500 }),
    });
  }

  redefineRender() {
    return error500Tmpl;
  }
}


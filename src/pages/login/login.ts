import { LOGIN_PAGE_DATA, LOGIN_PAGE_ITEMS } from '../../shared/consts/login-page-data';
import Block from '../../shared/utils/block';
import InputField from '../../components/input-field';
import loginTmpl from './login.tmpl';
import PageContainer from '../../components/page-container';

export default class Login extends Block {
  constructor() {
    super('main', {
      pageContainer: new PageContainer(
        {
          text: 'Вход',
          formContentClass: 'login-form-content',
          list: LOGIN_PAGE_DATA.map(dataObj => new InputField({ ...dataObj })),
          buttonClass: LOGIN_PAGE_ITEMS.button.buttonClass,
          buttonText: LOGIN_PAGE_ITEMS.button.text,
          linkUrl: LOGIN_PAGE_ITEMS.link.linkUrl,
          linkText: LOGIN_PAGE_ITEMS.link.text
        }
      ),
    });
  }

  redefineRender() {
    return loginTmpl;
  }
}


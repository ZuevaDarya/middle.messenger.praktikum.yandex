import { LOGIN_PAGE_DATA, LOGIN_PAGE_ITEMS } from '../../shared/consts/pages-data/login-page-data';
import Block from '../../shared/core/block';
import { getFormData } from '../../shared/utils/validation-func/get-form-data';
import InputField from '../../components/input-field';
import loginController from '../../shared/controllers/login-controller';
import loginTmpl from './login.tmpl';
import PageContainer from '../../components/page-container';
import Router from '../../shared/router/router';
import { Routes } from '../../shared/consts/routes';
import { SigninType } from '../../shared/types';
import { validateSubmit } from '../../shared/utils/validation-func/validate-submit';

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
      events: {
        submit: (event: Event) => {
          const data = getFormData(event.target as HTMLFormElement) as unknown as SigninType;

          if (validateSubmit(event)) {
            loginController.signin(data);
          }
        },
        back: () => {
          Router.go(Routes.Registration);
        },
      }
    });
  }

  redefineRender() {
    return loginTmpl;
  }
}


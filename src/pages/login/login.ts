import { LOGIN_PAGE_DATA, LOGIN_PAGE_ITEMS } from '../../shared/consts/pages-data/login-page-data';
import Block from '../../shared/core/block';
import { getFormData } from '../../shared/utils/validation-func/get-form-data';
import InputField from '../../components/input-field';
import LoginController from '../../shared/controllers/login-controller';
import loginTmpl from './login.tmpl';
import PageContainer from '../../components/page-container';
import { SigninType } from '../../shared/types';
import { validateFormData } from '../../shared/utils/validation-func/validate-form-data';
import { validateSubmit } from '../../shared/utils/validation-func/validate-submit';

export default class Login extends Block {
  constructor() {
    super('main', {
      pageContainer: new PageContainer(
        {
          text: 'Вход',
          formContentClass: 'login-form-content',
          list: LOGIN_PAGE_DATA.map(dataObj => new InputField({
            ...dataObj, events: {
              blur: (e: Event) => validateFormData(e)
            }
          })),
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
            LoginController.signin(data);
          }
        },
      }
    });
  }

  preRender() {
    this.removeChildrenInRoot();
  }

  redefineRender() {
    return loginTmpl;
  }
}


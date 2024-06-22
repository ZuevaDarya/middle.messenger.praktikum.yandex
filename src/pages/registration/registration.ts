import { REGISTRATION_PAGE_DATA, REGISTRATION_PAGE_ITEMS } from '../../shared/consts/pages-data/registration-page-data';
import Block from '../../shared/core/block';
import { FORM_INPUT_NAMES } from '../../shared/consts/form-input-names';
import { getFormData } from '../../shared/utils/validation-func/get-form-data';
import InputField from '../../components/input-field';
import loginController from '../../shared/controllers/login-controller';
import PageContainer from '../../components/page-container';
import registrationTmpl from './registration.tmpl';
import Router from '../../shared/router/router';
import { Routes } from '../../shared/consts/routes';
import { SignupType } from '../../shared/types';
import { validateSubmit } from '../../shared/utils/validation-func/validate-submit';

export default class Registration extends Block {
  constructor() {
    super('main', {
      pageContainer: new PageContainer(
        {
          text: 'Регистрация',
          formContentClass: 'registration-form-content',
          list: REGISTRATION_PAGE_DATA.map(dataObj => new InputField({ ...dataObj })),
          buttonClass: REGISTRATION_PAGE_ITEMS.button.buttonClass,
          buttonText: REGISTRATION_PAGE_ITEMS.button.text,
          linkUrl: REGISTRATION_PAGE_ITEMS.link.linkUrl,
          linkText: REGISTRATION_PAGE_ITEMS.link.text
        }
      ),
      events: {
        submit: (event: Event) => {
          const data = getFormData(event.target as HTMLFormElement);
          delete data[FORM_INPUT_NAMES.passwordAgain];

          if (validateSubmit(event)) {
            loginController.signup(data as unknown as SignupType);
          }
        },
        back: () => {
          Router.go(Routes.Login);
        },
      }
    });
  }

  redefineRender() {
    return registrationTmpl;
  }
}


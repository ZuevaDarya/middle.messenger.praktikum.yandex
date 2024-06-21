import { REGISTRATION_PAGE_DATA, REGISTRATION_PAGE_ITEMS } from '../../shared/consts/registration-page-data';
import Block from '../../shared/utils/block';
import InputField from '../../components/input-field';
import PageContainer from '../../components/page-container';
import registrationTmpl from './registration.tmpl';

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
        }),
    });
  }

  redefineRender() {
    return registrationTmpl;
  }
}


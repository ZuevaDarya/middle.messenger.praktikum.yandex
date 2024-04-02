
import Button from '../../components/button';
import Form from '../../components/form';
import FormContent from '../../components/form-content';
import FormFooter from '../../components/form-footer';
import FormTitle from '../../components/form-title';
import Input from '../../components/input';
import InputField from '../../components/input-field';
import Link from '../../components/link';
import Login from './login';
import PageContainer from '../../components/page-container';
import { registartionPage } from '../registration';
import { removeChildrenInRoot } from '../../shared/utils/remove-children-in-root';
import { render } from '../../shared/utils/render';
import { validateFormData } from '../../shared/utils/validate-form-data';
import { validateSubmit } from '../../shared/utils/validate-submit';

export const loginPage = new Login('main', {
  pageContainer: new PageContainer('div', {
    pageContent: [
      new FormTitle('h1', { text: 'Вход' }),
      new Form('form', {
        events: {
          submit: (e: Event) => validateSubmit(e)
        },
        formContent: new FormContent('div', {
          attr: { class: 'login-form-content' },
          lists: [
            new InputField('input', {
              title: 'Логин',
              input: new Input('input', {
                type: 'text',
                name: 'login',
                placeholder: 'Логин',
                events: {
                  blur: (e: Event) => validateFormData(e)
                }
              }),
            }),
            new InputField('input', {
              title: 'Пароль',
              input: new Input('input', {
                type: 'password',
                name: 'password',
                placeholder: 'Пароль',
                events: {
                  blur: (e: Event) => validateFormData(e)
                }
              }),
            }),
          ]
        }),
        formFooter: new FormFooter('div', {
          button: new Button('button', {
            attr: { class: 'form__button' },
            text: 'Авторизироваться',
            page: 'chat'
          }),
          link: new Link('a', {
            url: '#',
            text: 'Нет аккаунта?',
            page: 'registration',
            events: {
              click: () => {
                removeChildrenInRoot('#app');
                render('#app', registartionPage);
              }
            }
          })
        })
      })
    ]
  }),
});



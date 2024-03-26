
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

export const loginPage = new Login('main', {
  pageContainer: new PageContainer('div', {
    pageContent: [
      new FormTitle('h1', { text: 'Вход' }),
      new Form('form', {
        formContent: new FormContent('div', {
          attr: { class: 'login-form-content' },
          lists: [
            new InputField('input', {
              title: 'Логин',
              input: new Input('input', { type: 'text', name: 'login', placeholder: 'Логин' })
            }),
            new InputField('input', {
              title: 'Пароль',
              input: new Input('input', { type: 'password', name: 'password', placeholder: 'Пароль' })
            }),
          ]
        }),
        formFooter: new FormFooter('div', {
          button: new Button('button', {
            attr: { class: 'form__button' },
            text: 'Авторизироваться',
            page: 'chat'
          }),
          link: new Link('a', { url: '', text: 'Нет аккаунта?', page: 'registration' })
        })
      })
    ]
  }),
});





import Button from '../../components/button';
import Form from '../../components/form';
import FormContent from '../../components/form-content';
import FormFooter from '../../components/form-footer';
import FormTitle from '../../components/form-title';
import Input from '../../components/input';
import InputField from '../../components/input-field';
import Link from '../../components/link';
import Navigation from '../../components/navigation';
import PageContainer from '../../components/page-container';
import Registration from './registration';

export const registartionPage = new Registration('main', {
  navigation: new Navigation('nav', {
    lists: [
      new Link('a', { url: '', text: 'Логин', page: 'login' }),
      new Link('a', { url: '', text: 'Регистрация', page: 'registration' }),
      new Link('a', { url: '', text: 'Чат', page: 'chat' }),
      new Link('a', { url: '', text: 'Профиль', page: 'profile' }),
      new Link('a', { url: '', text: 'Изменить данные профиля', page: 'profileData' }),
      new Link('a', { url: '', text: 'Изменить пароль профиля', page: 'ProfilePassword' }),
      new Link('a', { url: '', text: 'Ошибка 404', page: 'error400' }),
      new Link('a', { url: '', text: 'Ошибка 500', page: 'error500' }),
    ]
  }),
  pageContainer: new PageContainer('div', {
    pageContent: [
      new FormTitle('h1', { text: 'Регистрация' }),
      new Form('form', {
        formContent: new FormContent('div', {
          attr: { class: 'registration-form-content' },
          lists: [
            new InputField('input', {
              title: 'Почта',
              input: new Input('input', { type: 'email', name: 'email', placeholder: 'Почта' })
            }),
            new InputField('input', {
              title: 'Логин',
              input: new Input('input', { type: 'text', name: 'login', placeholder: 'Логин' })
            }),
            new InputField('input', {
              title: 'Имя',
              input: new Input('input', { type: 'text', name: 'first_name', placeholder: 'Имя' })
            }),
            new InputField('input', {
              title: 'Фамилия',
              input: new Input('input', { type: 'text', name: 'second_name', placeholder: 'Фамилия' })
            }),
            new InputField('input', {
              title: 'Телефон',
              input: new Input('input', { type: 'tel', name: 'phone', placeholder: 'Телефон' })
            }),
            new InputField('input', {
              title: 'Пароль',
              input: new Input('input', { type: 'password', name: 'password', placeholder: 'Пароль' })
            }),
            new InputField('input', {
              title: 'Пароль (еще раз)',
              input: new Input('input', { type: 'password', name: 'password', placeholder: 'Пароль (еще раз)' })
            }),
          ]
        }),
        formFooter: new FormFooter('div', {
          button: new Button('button', {
            attr: { class: 'form__button' },
            text: 'Зарегистрироваться',
            page: 'chat'
          }),
          link: new Link('a', { url: '', text: 'Войти', page: 'login' })
        })
      })
    ]
  }),
});



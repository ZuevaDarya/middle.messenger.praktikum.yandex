import * as Components from '../src/components';
import * as Pages from '../src/pages';
import Handlebars from 'handlebars';

type Page = {
  [key: string] : unknown[];
}

const pages: Page = {
  'login': [Pages.Login],
  'registration': [Pages.Registration],
  'chat': [Pages.Chat],
  'profile': [Pages.Profile],
  'profileData': [Pages.ProfileData],
  'profilePassword': [Pages.ProfilePassword]
};

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  const [source, args] = pages[page];
  const handlebarsFunct = Handlebars.compile(source);

  document.body.innerHTML = handlebarsFunct(args);
}

document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', (e: MouseEvent) => {
  const page = (e.target as Element)?.getAttribute('page');

  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});

Handlebars.registerHelper('chat-list', () => [
    { name: 'Иван Иванов', senderName: 'Вы', message: 'стикер', time: '12:30'},
    { name: 'Макс', senderName: 'Вы', message: 'До завтра!', time: '17:00' },
    { name: 'Киноклуб', senderName: 'Вы', message: 'стикер', time: '21:05'},
    { name: 'Елена Половинкина', message: 'Можно на сегодня или завтра. Ты как?', time: 'Пн', numMessage: '3' },
    { name: 'Анна Блая', message: 'Изображение', time: 'Пн', numMessage: '2' },
    { name: 'Design Destroyer', message: 'В 2008 году художник Jon Rafman  начал собирать...', time: '1 Мая 2020'}
]);
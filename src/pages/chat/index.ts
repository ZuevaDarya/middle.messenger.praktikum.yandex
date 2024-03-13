import './chat.scss';
import Handlebars from 'handlebars';
export { default as Chat } from './chat.hbs?raw';

Handlebars.registerHelper('chat-list', () => [
  { name: 'Иван Иванов', senderName: 'Вы', message: 'стикер', time: '12:30' },
  { name: 'Макс', senderName: 'Вы', message: 'До завтра!', time: '17:00' },
  { name: 'Киноклуб', senderName: 'Вы', message: 'стикер', time: '21:05' },
  { name: 'Елена Половинкина', message: 'Можно на сегодня или завтра. Ты как?', time: 'Пн', numMessage: '3' },
  { name: 'Анна Блая', message: 'Изображение', time: 'Пн', numMessage: '2' },
  { name: 'Design Destroyer', message: 'В 2008 году художник Jon Rafman  начал собирать...', time: '1 Мая 2020' }
]);

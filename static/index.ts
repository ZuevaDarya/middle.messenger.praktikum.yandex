import { loginPage } from '../src/pages/login';
import { render } from '../src/shared/utils/render';
render('#app', loginPage);

//import * as Components from '../src/components';
// import Handlebars from 'handlebars';
// import { pages } from '../src/shared/consts/pages';

// Object.entries(Components).forEach(([name, component]) => {
//   Handlebars.registerPartial(name, component);
// });

// function navigate(page: string) {
//   const [source, args] = pages[page];
//   const handlebarsFunct = Handlebars.compile(source);

//   document.body.innerHTML = handlebarsFunct(args);
// }

// document.addEventListener('DOMContentLoaded', () => navigate('login'));

// document.addEventListener('click', (e: MouseEvent) => {
//   const page = (e.target as Element)?.getAttribute('page');

//   if (page) {
//     navigate(page);

//     e.preventDefault();
//     e.stopImmediatePropagation();
//   }
// });

// const page = new Page('main', { buttonText: 'button' });
// const container = document.getElementById('app')!;

// container.append(page.getElement()!)


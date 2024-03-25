//import Handlebars from 'handlebars';
//import { pages } from '../src/shared/consts/pages';

//import { loginPage } from '../src/pages/login';
//import { registartionPage } from '../src/pages/registration';
//import { error400Page } from '../src/pages/error-400';
//import { error500Page } from '../src/pages/error-500';
//import { profilePage } from '../src/pages/profile';
//import { profileDataPage } from '../src/pages/profile-data';
//import { profilePasswordPage } from '../src/pages/profile-password';
import { chatPage } from '../src/pages/chat';
import { render } from '../src/shared/utils/render';

//render('#app', loginPage);
//render('#app', registartionPage);
//render('#app', error400Page);
//render('#app', error500Page);
//render('#app', profilePage);
//render('#app', profileDataPage);
//render('#app', profilePasswordPage);
render('#app', chatPage);
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


import { loginPage } from '../src/pages/login';
import Navigation from '../src/components/navigation';
import { NAVIGATION } from '../src/shared/consts/navigation';
import { render } from '../src/shared/utils/render';

render('#app', loginPage);
render('#app', new Navigation('nav', {list: NAVIGATION }));

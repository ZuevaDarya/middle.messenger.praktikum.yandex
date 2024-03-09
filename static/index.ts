import * as Components from '../src/components';
import * as Pages from '../src/pages';
import Handlebars from 'handlebars';

type Page = {
  [key: string] : unknown[];
}

const pages: Page = {
  'login': [Pages.Login]
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


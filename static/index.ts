import Block from '../src/shared/utils/block';
//import * as Components from '../src/components';

type Props = {
  events?: Record<string, EventListener>;
  attributes?: Record<string, string>;
  [key: string | symbol]: unknown;
}
//import { pages } from '../src/shared/consts/pages';

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

class Button extends Block {
  constructor(tagName ='button', props: Props) {
    super(
      tagName,
      {
        ...props,
        events: {
          click: () => console.log('event')
        }
      }
    )
  }

  redefineRender() {
    return '<button>{{text}}</button>';
  }
}

class Input extends Block {
  constructor(tagName='input', props: Props) {
    super(
      tagName,
      {
        ...props,
        events: {
          blur: () => this.validate(),
        },
        attr: {
          class: 'fake'
        }
      }
    )
  }

  redefineRender() {
      return '<input />'
  }

  validate() {
    console.log('blur');
  }
}

class Page extends Block {
  constructor(tagName = 'div', props: Props) {
    super(
      tagName,
      {
      ...props, //{buttonText: 'Button'}
      button: new Button('button', { text: props.buttonText }),
      input: new Input('input', {
        label: 'input',
        // onChange: (value) => {
        //   this.setProps({buttonText: value})
        // }
      }),
    })
  }

  // redefineComponentDidUpdate(oldProps: Props, newProps: Props) {
  //     if (oldProps.buttonText !== newProps.buttonText) {
  //       this.children.button.setProps({ text: newProps.buttonText });
  //     }
  //     return true;
  //}

  override redefineRender() {
      return '<div>{{{ button }}} {{{ input }}}</div>'
  }
}

const page = new Page('main', {buttonText: 'button'});
const container = document.getElementById('app')!;

container.append(page.getElement()!)


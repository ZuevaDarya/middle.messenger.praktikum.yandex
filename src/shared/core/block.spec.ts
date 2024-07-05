import Block from './block';
import { expect } from 'chai';
import { IBlockProps } from '../types';
import sinon from 'sinon';

describe('Компонент Block', () => {
  const template = `
    <div data-name="test-block">{{text}}</div>
  `;

  class mockBlock extends Block {
    constructor(props: IBlockProps) {
      super('div', {
        ...props,
      });
    }

    redefineRender() {
      return template;
    }
  }

  it('должен корректно обрабатывать события events', () => {
    const events = {
      click: () => { },
      submit: () => { },
    }

    const block = new mockBlock({
      events
    });

    expect(block.props.events).to.deep.equal(events);
  });

  it('должен рендерить текст, переданный в пропсы в соответсвии с шаблоном', () => {
    const block = new mockBlock({
      text: 'Test',
    });

    const mainComponent = document.querySelector('main');
    mainComponent?.append(block.getElement() as HTMLElement);

    const testComponnet = mainComponent?.querySelector('div[data-name="test-block"]')

    expect(testComponnet?.innerHTML).to.include('Test');
  });

  it('должен корректно обновлять исходные свойства компонента', () => {
    const block = new mockBlock({
      text: 'Test',
      events: {
        click: () => { }
      }
    });

    block.setProps({
      events: {
        blur: () => { }
      }
    });

    expect(block.props.events).to.contains.keys('blur');
  });

  it('должен запускать хук componentDidUpdate при обновлении свойств компонента', () => {
    const block = new mockBlock({
      text: 'Test',
      events: {
        click: () => { }
      }
    });

    const spyFunc = sinon.spy(block, 'redefineComponentDidUpdate');

    block.setProps({
      events: {
        blur: () => { }
      }
    });
    expect(spyFunc.calledOnce).to.eq(true);
  });
});

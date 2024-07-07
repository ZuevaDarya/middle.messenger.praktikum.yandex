import Block from '../core/block';
import { expect } from 'chai';
import Router from './router';

describe('Роутер', () => {
  class MockBlock extends Block {
    redefineRender(): string {
      return `
        <div>Test</div>
      `;
    }
  }

  it('должен создавать экземпляр роута (route) по маршруту /', () => {
    const route = Router.use('/', MockBlock);
    expect(route).to.eq(Router);
  });

  it('должен создавать при старте страницу по маршруту /', () => {
    Router.use('/', MockBlock).start();
    expect(window.history.length).to.eq(1);
  });

  it('должен вернуться назад на страницу', () => {
    Router.use('/', MockBlock).start();
    Router.back();
    expect(window.history.length).to.eq(1);
  });

  it('должен перейти вперед на страницу', () => {
    Router.use('/', MockBlock).start();
    Router.forward();
    expect(window.history.length).to.eq(1);
  })

  it('должен перейти по маршруту /sign-up и создать страницу', () => {
    Router.use('/sign-up', MockBlock).start();
    Router.go('/sign-up');
    expect(window.location.pathname).to.eq('/sign-up');
  });

  it('должен возвращать корректный путь текущего роута', () => {
    Router.use('/sign-up', MockBlock);
    expect(Router.currentRoute).to.eq('/sign-up');
  });
});

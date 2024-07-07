import Sinon, { SinonFakeXMLHttpRequest } from 'sinon';
import { expect } from 'chai';
import HTTPTransport from './HTTPTransport';
import { Method } from '../consts/query-methods';

describe('HTTP Transport', () => {
  const xhr = Sinon.useFakeXMLHttpRequest();
  const http = new HTTPTransport();
  let fakeRequest: SinonFakeXMLHttpRequest | null = null;

  beforeEach(() => {
    xhr.onCreate = (request: SinonFakeXMLHttpRequest) => {
      fakeRequest = request;
    };
  });

  afterEach(() => {
    fakeRequest = null;
  });

  it('должен отправлять GET-запрос при вызове метода .get()', () => {
    http.get('');
    expect(fakeRequest?.method).to.eq(Method.Get);
  });

  it('должен корректно формировать query-параметры при GET-запросе', () => {
    const data = { a: '1', b: '2' };

    http.get('', { data });
    expect(fakeRequest?.url).to.include('?a=1&b=2');
  });

  it('должен отправлять PUT-запрос при вызове метода .put()', () => {
    const data = { users: ['1'], chatId: 0 };

    http.put('/users', { data });
    expect(fakeRequest?.method).to.eq(Method.Put);
  });

  it('должен отправлять POST-запрос при вызове метода .post()', () => {
    const data = { title: 'new chat' };

    http.post('', { data });
    expect(fakeRequest?.method).to.eq(Method.Post);
  });

  it('должен отправлять DELETE-запрос при вызове метода .delete()', () => {
    const data = { users: ['1'], chatId: 0 };

    http.delete('/users', { data });
    expect(fakeRequest?.method).to.eq(Method.Delete);
  });
});

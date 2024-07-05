import { JSDOM } from 'jsdom';
import 'mock-local-storage';
import sinon from 'sinon';

const jsdom = new JSDOM('<main></main>', {
  url: 'http://localhost:3000',
});

global.document = jsdom.document;
global.DocumentFragment = jsdom.window.DocumentFragment;
global.window = jsdom.window;
Object.defineProperty(window, 'localStorage', {
  value: global.localStorage
});

global.XMLHttpRequest = sinon.useFakeXMLHttpRequest();

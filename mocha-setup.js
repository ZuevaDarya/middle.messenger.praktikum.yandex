import { JSDOM } from 'jsdom';
import sinon from 'sinon';

const jsdom = new JSDOM('<main></main>', {
  url: 'http://localhost:3000',
});

global.window = jsdom.window;
global.document = jsdom.document;
global.FormData = jsdom.window.FormData;

global.XMLHttpRequest = sinon.FakeXMLHttpRequest();

import { Method } from '../consts/query-methods';
import { queryStringify } from '../utils/query-stringify';

type Options = {
  method: Method;
  data?: Record<string, unknown>;
  headers?: Record<string, string>
  timeout?: number;
}

type InitOptions = Omit<Options, 'method'>;

export default class HTTPTransport {
  get(url: string, options: InitOptions = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: Method.Get }, options.timeout);
  }

  post(url: string, options: InitOptions = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: Method.Post }, options.timeout);
  }

  put(url: string, options: InitOptions = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: Method.Put }, options.timeout);
  }

  delete(url: string, options: InitOptions = {}): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: Method.Delete }, options.timeout);
  }

  request(url: string, options: Options = {method: Method.Get}, timeout = 5000): Promise<XMLHttpRequest> {
    const { data, method, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (method === Method.Get && data) {
        url = `${url}${queryStringify(data)}`;
      }

      xhr.open(method, url);

      if (headers) {
        Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key]);
        });
      }

      xhr.timeout = timeout;

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === Method.Get || method === Method.Delete || !data) {
        xhr.send();
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
      }
    });
  }
}

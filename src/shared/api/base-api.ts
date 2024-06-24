import { HEADERS, URLS } from '../consts/api-consts';
import HTTPTransport from '../services/HTTPTransport';

export class BaseAPI {
  private http: HTTPTransport;
  private baseUrl: string;
  private headers: Record<string, string>;

  constructor({ path }: Record<string, string>) {
    this.http = new HTTPTransport();
    this.baseUrl = `${URLS.BASE}${path}`;
    this.headers = {
      ...HEADERS.CT_APPLICATION_JSON,
      ...HEADERS.ACCEPT
    };
  }

  get(url: string) {
    return this.http.get(`${this.baseUrl}/${url}`, { headers: this.headers });
  }

  post(url: string, data: Record<string, unknown>) {
    return this.http.post(`${this.baseUrl}/${url}`, { headers: this.headers, data });
  }

  put(url: string, data: Record<string, unknown>, headers?: Record<string, string>) {
    return this.http.put(`${this.baseUrl}/${url}`, {
      headers: headers ? headers : this.headers,
      data
    });
  }

  delete(url: string, data: Record<string, unknown>) {
    return this.http.delete(`${this.baseUrl}/${url}`, { headers: this.headers, data });
  }
}

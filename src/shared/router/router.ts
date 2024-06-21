import Block from '../utils/block';
import Route from './route';

const APP_QUERY = '#app';

class Router {
  private static __instance: Router;

  private _currentRoute: Route | null = null;
  private routes: Route[] = [];
  private history = window.history;

  private readonly rootQuery: string = '';

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.rootQuery = rootQuery;
    Router.__instance = this;
  }

  get currentRoute() {
    return window.location.pathname;
  }

  use(pathname: string, block: typeof Block): Router {
    const route = new Route(pathname, block, { rootQuery: this.rootQuery });

    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = (event: PopStateEvent) => {
      const currentTarget = event.currentTarget as Window;
      this.onRoute(currentTarget.location.pathname);
    };

    this.onRoute(window.location.pathname);
  }

  getRoute(pathname: string): Route | undefined {
    return this.routes.find(route => route.match(pathname));
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this.onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  private onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }
}

export default new Router(APP_QUERY);

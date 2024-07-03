import Block from '../core/block';
import isEqual from '../utils/is-equal';
import { PlainObject } from '../types';
import { render } from '../utils/render';

type Props = { rootQuery: string };

class Route {
  private readonly blockClass!: typeof Block;
  private pathname?: string;
  private block: Block | null;
  private readonly props!: Props;

  constructor(pathname: string, componentClass: typeof Block, props: Props) {
    this.pathname = pathname;
    this.blockClass = componentClass;
    this.block = null;
    this.props = props;
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this.pathname = pathname;
      this.render();
    }
  }

  getPath(): string {
    return <string>this.pathname;
  }

  leave() {
    if (this.block) {
      this.block.hide();
      this.block = null;
    }
  }

  match(pathname: string): boolean {
    return isEqual(pathname as unknown as PlainObject, this.pathname as unknown as PlainObject);
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass();
      this.block.preRender();
      render(this.props.rootQuery, this.block);
      return;
    }

    this.block.show();
  }
}

export default Route;

import Block from '../utils/block';

type Props = { rootQuery: string };

class Route {
  private readonly blockClass!: typeof Block;
  private pathname?: string;
  private block: Block | null;
  private readonly props!: Props;

  constructor(pathname: string, view: typeof Block, props: Props) {
    this.pathname = pathname;
    this.blockClass = view;
    this.block = null;
    this.props = props;
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this.pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this.block) {
      this.block.hide();
    }
  }

  match(pathname: string): boolean {
    return isEqual(pathname, <string>this.pathname);
  }

  render() {
    if (!this.block) {
      console.log(this.block, typeof this.blockClass)

      this.block = new this.blockClass();
      getRoot(this.props.rootQuery, this.block);
      return;
    }

    this.block.show();
  }
}

function isEqual(lhs: string, rhs: string): boolean {
  return lhs === rhs;
}

function getRoot(query: string, block: Block) {
  const root = document.querySelector(query);

  if (root) {
    root.textContent = block.getElement() as unknown as string;
  }

  return root;
}

export default Route;

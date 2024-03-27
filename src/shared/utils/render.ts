import Block from './block';

export function render(selectorName: string, block: Block) {
  const element = document.querySelector(selectorName);
  element?.appendChild(block.getElement() as Node);
  block.dispatchComponentDidMount();
  return element;
}

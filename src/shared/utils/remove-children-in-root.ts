export function removeChildrenInRoot(selectorName: string) {
  const element = document.querySelector(selectorName);
  const nav = element?.querySelector('nav');

  const childrens = element?.children;
  const arr = [...(childrens as HTMLCollection)];

  arr.map(item => item !== nav ? element?.removeChild(item) : '');
}

import Block from '../../shared/utils/block';
import pageContainerTmpl from './page-container';
import { Props } from '../../shared/types';

export default class PageContainer extends Block {
  constructor(tagName = 'div', props: Props) {
    super(
      tagName,
      {
        ...props
      }
    )
  }

  redefineRender() {
    return pageContainerTmpl;
  }
}

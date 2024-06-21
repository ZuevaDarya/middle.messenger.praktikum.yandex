import Block from '../../shared/utils/block';
import Form from '../form';
import FormTitle from '../form-title';
import { IPageContainer } from '../../shared/types';
import pageContainerTmpl from './page-container';

export default class PageContainer extends Block {
  constructor(props: IPageContainer) {
    super('div', {
      pageContent: [
        new FormTitle({ text: props.text }),
        new Form({...props})
      ]
    });
  }

  redefineRender() {
    return pageContainerTmpl;
  }
}

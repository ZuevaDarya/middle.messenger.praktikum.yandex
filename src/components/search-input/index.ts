import Block from '../../shared/utils/block';
import searchInputTmpl from './search-input';

export default class SearchInput extends Block {
  redefineRender() {
    return searchInputTmpl;
  }
}


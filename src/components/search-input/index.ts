import Block from '../../shared/core/block';
import searchInputTmpl from './search-input';

export default class SearchInput extends Block {
  redefineRender() {
    return searchInputTmpl;
  }
}


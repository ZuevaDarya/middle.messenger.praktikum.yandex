import Block from '../../shared/core/block';
import { CHAT_SEND_INPUT_DATA } from '../../shared/consts/pages-data/chat-page-data';
import searchInputTmpl from './search-input';
import { validateFormData } from '../../shared/utils/validation-func/validate-form-data';

export default class SearchInput extends Block {
  constructor() {
    super('input', {
      ...CHAT_SEND_INPUT_DATA,
      events: {
        blur: (e: Event) => validateFormData(e)
      }
    })
  }

  redefineRender() {
    return searchInputTmpl;
  }
}


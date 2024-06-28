import Block from '../../shared/core/block';
import ChatButton from '../chat-button';
import chatSendMessageBlockTmpl from './chat-send-mesage-block';
import SearchInput from '../search-input';
import { validateSubmit } from '../../shared/utils/validation-func/validate-submit';

export default class ChatSendMessageBlock extends Block {
  constructor() {
    super('form', {
      chatButtonAddFile: new ChatButton({ attr: { class: 'chat-button__add-file-btn' } }),
      chatButtonSendMsg: new ChatButton({ attr: { class: 'chat-button__send-message-btn' } }),
      searchInput: new SearchInput(),
      events: {
        submit: (e: Event) => validateSubmit(e)
      }
    })
  }

  redefineRender() {
    return chatSendMessageBlockTmpl;
  }
}


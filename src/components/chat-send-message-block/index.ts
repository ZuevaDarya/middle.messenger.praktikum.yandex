import store, { StoreEvents } from '../../shared/core/store';
import Block from '../../shared/core/block';
import ChatButton from '../chat-button';
import chatSendMessageBlockTmpl from './chat-send-mesage-block';
import SearchInput from '../search-input';
import SocketController from '../../shared/controllers/socket-controller';
import { validateSubmit } from '../../shared/utils/validation-func/validate-submit';

export default class ChatSendMessageBlock extends Block {
  constructor() {
    super('form', {
      chatButtonAddFile: new ChatButton({ attr: { class: 'chat-button__add-file-btn' } }),
      chatButtonSendMsg: new ChatButton({ attr: { class: 'chat-button__send-message-btn' } }),
      searchInput: new SearchInput(),
    })

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    });
  }

  redefineInit() {
    const currentChat = store.getState().currentChat;

    this.props['events'] = {
      submit: (e: Event) => {
        if (validateSubmit(e)) {
          const messageValue = (document.getElementById('searchInput') as HTMLInputElement).value;

          if (messageValue) {
            SocketController.sendMessage(currentChat!.id, messageValue);
          }
        }
      }
    }
  }

  redefineRender() {
    return chatSendMessageBlockTmpl;
  }
}


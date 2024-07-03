import Block from '../../shared/core/block';
import changeTimeFormat from '../../shared/utils/change-time-format';
import chatMessagesTmpl from './chat-messages';
import Message from '../message';
import store from '../../shared/core/store';

export default class ChatMessages extends Block {
  constructor() {
    super('div', {});
  }

  redefineInit() {
    const currentChat = store.getState().currentChat;
    const user = store.getState().user;
    const messages = store.getState().messages!;
    const currentChatMessages = messages[currentChat!.id];

    if (currentChatMessages.length) {
      this.lists['messages'] = currentChatMessages.map(message => {
        if (message.user_id === user.id) {
          return new Message({
            text: message.content,
            time: changeTimeFormat(message.time),
            className: 'message_right'
          });
        } else {
          return new Message({
            text: message.content,
            time: changeTimeFormat(message.time),
          });
        }
      }).reverse();
    }
  }

  redefineRender() {
    return chatMessagesTmpl;
  }
}


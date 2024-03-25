import './chat-send-message-block.scss';

const chatSendMessageBlockTmpl = `
  <div class="chat-send-message">
    {{{ chatButtonAddFile }}}
    <input type="text" name="message" class="chat-send-message__input" placeholder="Сообщение">
    {{{ chatButtonSendMsg }}}
  </div>
`;

export default chatSendMessageBlockTmpl;

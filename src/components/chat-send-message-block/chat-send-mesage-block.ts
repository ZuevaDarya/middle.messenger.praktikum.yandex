import './chat-send-message-block.scss';

const chatSendMessageBlockTmpl = `
  <div class="chat-send-message">
    {{{ chatButton }}}
    {{> ChatButton className="chat-button__add-file-btn"}}
    <input type="text" name="message" class="chat-send-message__input" placeholder="Сообщение">
    {{{ chatButton }}}
    {{> ChatButton className="chat-button__send-message-btn"}}
  </div>
`;

export default chatSendMessageBlockTmpl;

import './chat-send-message-block.scss';

const chatSendMessageBlockTmpl = `
  <form class="chat-send-message">
    {{{ chatButtonAddFile }}}
    {{{ searchInput }}}
    {{{ chatButtonSendMsg }}}
  </form>
`;

export default chatSendMessageBlockTmpl;

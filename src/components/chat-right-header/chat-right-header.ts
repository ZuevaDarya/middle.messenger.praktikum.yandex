import './chat-right-header.scss';

const chatRightHeaderTmpl = `
  <div class="chat-header chat-right-header">
    <div class="chat-right-header__col">
      {{{ chatAvatar }}}
      {{{ chatTitle }}}
    </div>
    <button class="chat-right-header__settings-btn"></button>
  </div>
`;

export default chatRightHeaderTmpl;

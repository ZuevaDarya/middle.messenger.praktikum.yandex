import './chat.scss';

const chatTmpl = `
  <div class="chat-page-main">
    <div class="chat-container">
      <div class="chat-left-container">
        <div class="chat-header chat-left-header">
          <div class="chat-left-header__profile">
            {{{ avatar }}}
            {{{ chatHeaderLink }}}
          </div>

          {{{ chatLeftFunctions }}}
        </div>

        <div class="chat-left-content custom-scroll">
          {{{ chatList }}}
        </div>
      </div>

      <div class="chat-right-container">
        <div class="chat-header chat-right-header">
          <div class="chat-right-header__col">
            {{{ chatAvatar }}}
            {{{ chatTitle }}}
          </div>

          <button class="chat-right-header__settings-btn"></button>
        </div>

        <div class="messages custom-scroll">
          <span class="messages__day">{{{day}}}</span>
          <div>
            {{{ messages }}}
          </div>
        </div>

        {{{ chatSendMessageBlock }}}
      </div>
    </div>
  </div>
`;

export default chatTmpl;

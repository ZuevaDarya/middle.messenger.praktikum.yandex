import './chat.scss';

const chatTmpl = `
  <div class="chat-page-main">
    <div class="chat-container">
      {{{ popup }}}
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
        {{{ chatNotice }}}
        {{{ chatRightHeader }}}
        {{{ chatMessages }}}
        {{{ chatSendMessageBlock }}}
      </div>
    </div>
  </div>
`;

export default chatTmpl;

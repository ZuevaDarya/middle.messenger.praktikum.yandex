import './chat-left-functions.scss';

const chatLeftFunctionsTmpl = `
  <div class='chat-left-functions'>
    {{{ addChatButton }}}
    <form class='chat-left-functions__search'>
      <input type='search' class='chat-left-functions__search-input' placeholder='Поиск' />
      <button class='chat-left-functions__search-button'></button>
    </form>
  </div>
`;

export default chatLeftFunctionsTmpl;

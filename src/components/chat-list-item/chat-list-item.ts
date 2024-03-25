import './chat-list-item.scss';

const chatListItemTmpl = `
  <div class="chat-list-item">
    <div class="chat-list-item__col">
      {{{ avatar }}}

      <div class="chat-list-item__content">
        {{{ chatTitle }}}
        {{{ chatListMessage }}}
      </div>
    </div>

    <div class="chat-list-item__right">
      <span class="chat-list-item__time">{{time}}</span>
      {{#if numMessage}}
        <span class="chat-list-item__num-message">{{numMessage}}</span>
      {{/if}}
    </div>
  </div>
`;

export default chatListItemTmpl;

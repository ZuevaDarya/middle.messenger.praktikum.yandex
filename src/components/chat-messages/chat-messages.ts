import './chat-messages.scss';

const chatMessagesTmpl = `
  <div class="messages custom-scroll">
    {{#if showDay}}
      <span class="messages__day">{{{day}}}</span>
    {{/if}}
    <div class="messages__list">
      {{{ messages }}}
    </div>
  </div>
`;

export default chatMessagesTmpl;

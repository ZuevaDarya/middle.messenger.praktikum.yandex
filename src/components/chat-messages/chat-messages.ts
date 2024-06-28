import './chat-messages.scss';

const chatMessagesTmpl = `
  <div class="messages custom-scroll">
    <span class="messages__day">{{{day}}}</span>
    <div>
      {{{ messages }}}
    </div>
  </div>
`;

export default chatMessagesTmpl;

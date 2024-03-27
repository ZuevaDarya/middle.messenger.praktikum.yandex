import './chat-list-item-message.scss';

const chatListItemMessageTmpl = `
  <p class='chat-list-item-message'>
    {{#if senderName}}
      <span class='chat-list-item-message chat-list-item-message_fw-bold'>
        {{senderName}}:
      </span>
    {{/if}}

    {{message}}
  </p>
`;

export default chatListItemMessageTmpl;

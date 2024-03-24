import './chat-button.scss';

const chatButtonTmpl = `
  <button class="{{#if className}} {{className}} {{/if}} chat-button"></button>
`;

export default chatButtonTmpl;

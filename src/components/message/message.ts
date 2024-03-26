import './message.scss'

const messageTmpl = `
  <div class="message">
    {{#if text}}
      <p>{{text}}</p>
    {{/ if}}

    {{#if src}}
      <img src="{{src}}" alt="Изображение" />
    {{/ if}}

    <span class="message__time">{{time}}</span>
  </div>
`;

export default messageTmpl;

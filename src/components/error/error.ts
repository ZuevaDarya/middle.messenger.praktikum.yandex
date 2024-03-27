import './error.scss';

const errorTmpl = `
  <div class="error">
    <h1 class="error__code">{{code}}</h1>
    <p class="error__title">{{title}}</p>
    <p class="error__text">{{text}}</p>
    {{{ button}}}
  </div>
`;

export default errorTmpl;

import './input-field.scss';

const inputFieldTmpl = `
  <div class="input-field">
    {{{ input }}}
    <label class="input-field__label">{{title}}</label>
  </div>
`;

export default inputFieldTmpl;

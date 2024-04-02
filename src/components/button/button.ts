import './button.scss';

const buttonTmpl = `
  <button 
    type="submit" 
    class="button"
    page="{{page}}"
  >
    {{ text }}
  </button>
`;

export default buttonTmpl;

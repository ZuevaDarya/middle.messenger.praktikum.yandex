import './popup.scss'

const popupTmpl = `
  {{#if isDisplay}}
    <div class='popup popup_ds'>
      <div class='popup__container'>
        <span class='popup__close'></span>
        {{{formTitle}}}
        <form class='popup__form'>
          {{{inputField}}}
          {{{button}}}
        </form>
      </div>
    </div>
  {{/if}}
`;

export default popupTmpl;

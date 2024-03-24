import './profile-item.scss';

const profileItemTmpl = `
<div 
  class="{{#if className}} {{className}} {{/if}} profile-item"
  page="{{page}}"
  >
  <span class="profile-item__title">{{title}}</span>
  {{#if data}}
    <span class="profile-item__data">{{data}}</span>
  {{/if}}
</div>
`;

export default profileItemTmpl;

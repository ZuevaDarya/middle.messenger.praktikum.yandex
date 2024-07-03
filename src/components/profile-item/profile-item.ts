import './profile-item.scss';

const profileItemTmpl = `
<div class="profile-item">
  <span class="profile-item__title">{{title}}</span>
  {{#if data}}
    <span class="profile-item__data">{{data}}</span>
  {{/if}}
</div>
`;

export default profileItemTmpl;

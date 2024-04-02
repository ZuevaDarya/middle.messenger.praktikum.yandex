import './profile-input.scss';
import '../profile-item/profile-item.scss';

const profileInputTmpl = `
  <div class="profile-item" page="{{page}}">
    <span class="profile-item__title">{{title}}</span>
    <input class="profile-item__input" type="{{type}}" name="{{name}}" placeholder="{{placeholder}}">
  </div>
`;

export default profileInputTmpl;

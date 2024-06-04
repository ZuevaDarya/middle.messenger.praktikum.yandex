import './profile-input.scss';
import '../profile-item/profile-item.scss';

const profileInputTmpl = `
  <div class="profile-edit-item" page="{{page}}">
    <label class="profile-edit-item__title">{{title}}
      <input class="profile-item__input" type="{{type}}" name="{{name}}" placeholder="{{placeholder}}">
    </label>
  </div>
`;

export default profileInputTmpl;

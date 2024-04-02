import './profile.scss';

const profileTmpl = `
  <div class="profile-container">
    <div class="profile">
      {{{ profileCloseButton }}}
      {{{ profileAvatar }}}

      <div class="profile-content">
        {{{ profileContentList }}}
      </div>

      <div class="profile__settings">
        {{{ profileSettingList }}}
      </div>
    </div>
  </div>
`;

export default profileTmpl;

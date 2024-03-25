import '../profile/profile.scss';
import '../profile-data/profile-data.scss';

const profilePasswordTmpl = `
  <div class="profile-container">
    {{{ navigation }}}

    <div class="profile">
      {{{ profileCloseButton }}}
      {{{ profileAvatar }}}

      <form class="profile-content">
        {{{ profileContentList }}}     
        {{{ button }}}
      </form>
    </div>
  </div>
`;

export default profilePasswordTmpl;

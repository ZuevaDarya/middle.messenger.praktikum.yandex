import './profile-data.scss';
import '../profile/profile.scss';

const profileDataTmpl = `
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

export default profileDataTmpl;

import './profile-avatar.scss'

const profileAvatarTmpl = `
  <div class='profile-avatar'>
    <div class='profile-avatar__container'>
      <span class='profile-avatar__background'></span>
      <img src='{{src}}' alt='Аватар пользователя' class='profile-avatar__img' />
      <span class='profile-avatar__text'>Поменять аватар</span>
    </div>
    <p class='profile-avatar__user-name'>{{name}}</p>
  </div>
`;

export default profileAvatarTmpl;

import Chat from '../src/pages/chat/chat';
import Error400 from '../src/pages/error-400/error-400';
import Error500 from '../src/pages/error-500/error-500';
import Login from '../src/pages/login/login';
import Profile from '../src/pages/profile/profile';
import ProfileData from '../src/pages/profile-data/profile-data';
import ProfilePassword from '../src/pages/profile-password/profile-password';
import Registration from '../src/pages/registration/registration';
import Router from '../src/shared/router/router';
import { Routes } from '../src/shared/consts/routes';

Router
  .use(Routes.Login, Login)
  .use(Routes.Registration, Registration)
  .use(Routes.Chats, Chat)
  .use(Routes.Profile, Profile)
  .use(Routes.ProfileData, ProfileData)
  .use(Routes.ProfilePassword, ProfilePassword)
  .use(Routes.Error400, Error400)
  .use(Routes.Error500, Error500)
  .start();

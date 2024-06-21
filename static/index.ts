import Login from '../src/pages/login/login';
import Registration from '../src/pages/registration/registration';
import Router from '../src/shared/router/router';
import { Routes } from '../src/shared/consts/routes';

Router
  .use(Routes.Login, Login)
  .use(Routes.Registration, Registration)
  .start();

document.addEventListener('DOMContentLoaded', () => Router.go(Routes.Login));

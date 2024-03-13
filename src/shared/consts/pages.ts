import * as Pages from '../../pages';

type Page = {
  [key: string] : unknown[];
}

export const pages: Page = {
  'login': [Pages.Login],
  'registration': [Pages.Registration],
  'chat': [Pages.Chat],
  'profile': [Pages.Profile],
  'profileData': [Pages.ProfileData],
  'profilePassword': [Pages.ProfilePassword],
  'error400': [Pages.Error400],
  'error500': [Pages.Error500]
};

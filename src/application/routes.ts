import { lazy } from 'react';

import { URLS } from 'common/constants/urls';

const SearchPage = lazy(() => import('pages/SearchPage'));
const RepositoryPage = lazy(() => import('pages/RepositoryPage'));

export const ROUTES = [
  {
    path: URLS.search,
    Component: SearchPage,
    exact: true
  },
  {
    path: URLS.repositoryPage,
    Component: RepositoryPage,
    exact: true
  }
];

import React, { Suspense } from 'react';
import { setContext } from '@apollo/client/link/context';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import { createRoot } from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ViewportProvider } from 'common/hooks/useViewport';

import { ROUTES } from './routes';
import { store } from '../store';

const container = document.getElementById('root');
const root = container && createRoot(container);

const ACCESS_KEY = import.meta.env.VITE_SOME_KEY;

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: `Bearer ${ACCESS_KEY}`,
  },
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          search: relayStylePagination(['query']),
        },
      },
    },
  }),
});

const Application = () => (
  <React.StrictMode>
    <Provider store={store}>
      <ViewportProvider>
        <BrowserRouter>
          <ApolloProvider client={client}>
            <Suspense>
              <Routes>
                {ROUTES.map((route) => (
                  <Route key={route.path} {...route} />
                ))}
              </Routes>
            </Suspense>
          </ApolloProvider>
        </BrowserRouter>
      </ViewportProvider>
    </Provider>
  </React.StrictMode>
);

root?.render(<Application />);

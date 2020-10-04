import React from 'react';
import { CookiesProvider } from 'react-cookie';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createGlobalStyle } from 'styled-components';

import { COLORS } from './constants';
import LandingPage from './pages/LandingPage/LandingPage';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

const GlobalStyle = createGlobalStyle`
  html body {
    background-color: ${COLORS.DARK_GREEN};
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    padding: 0;
    margin: 0;

    @font-face {
      font-family: "Open Sans";
      src: local("Open Sans") url("./assets/open-sans/OpenSans-Regular.ttf") format("truetype");
    }
  }
`;

function App () {
  return (
    <ApolloProvider client={client}>
      <CookiesProvider>
        <GlobalStyle />
        <LandingPage />
      </CookiesProvider>
    </ApolloProvider>
  );
}

export default App;

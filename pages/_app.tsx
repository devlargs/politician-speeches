import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '@components/Header';
import client from '@graphql/client';
import { AppProps } from 'next/app';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  </ApolloProvider>
);

export default App;

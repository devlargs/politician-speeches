import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '@components/Header';
import client from '@graphql/client';
import { usePoliticians } from '@store/usePoliticians';
import { AppProps } from 'next/app';
import { FC, useEffect } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const loadPoliticians = usePoliticians((e) => e.loadPoliticians);

  useEffect(() => {
    loadPoliticians();
  }, []);

  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Header />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default App;

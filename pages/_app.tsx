import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import AddPoliticianModal from '@components/AddPoliticianModal';
import Header from '@components/Header';
import client from '@graphql/client';
import { usePoliticians } from '@store/usePoliticians';
import theme from '@theme/index';
import { AppProps } from 'next/app';
import { FC, useEffect } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const loadPoliticians = usePoliticians((e) => e.loadPoliticians);

  useEffect(() => {
    loadPoliticians();
  }, []);

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <AddPoliticianModal />
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default App;

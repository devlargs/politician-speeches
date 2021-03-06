import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://politicians-speeches-api.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default client;

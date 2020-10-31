import { ApolloClient, InMemoryCache } from '@apollo/client';
import Settings from './settings';

export default new ApolloClient({
  uri: `${Settings.API_DOMAIN}/graphql`,
  cache: new InMemoryCache(),
});

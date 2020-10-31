import { ApolloProvider } from '@apollo/client';
import apolloClient from '../src/config/apollo-client';
import { AppProps } from 'next/app';
import '../styles/styles.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;

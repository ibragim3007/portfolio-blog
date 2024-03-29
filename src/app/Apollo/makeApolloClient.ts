import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { TOKEN_STRING } from '../../shared/constants/LocalStorageStrings';

const makeApolloClient = () => {
  const httpLink = new HttpLink({
    uri: 'https://portfolio-blog-backend-chi.vercel.app/graphql',
  });

  const token = localStorage.getItem(TOKEN_STRING) as string;

  const authLink = setContext((_, { headers }) => {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      headers: {
        ...headers,
        authorization: token ? token : '',
      },
    };
  });

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: cache,
  });

  return client;
};

export default makeApolloClient;

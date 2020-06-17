import { ApolloProvider } from '@apollo/react-hooks'
import { Provider } from 'react-redux'
import { useStore } from '../src/lib/redux'
import { useApollo } from '../src/lib/apollo'
import '../src/styles/tailwind.css'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  )
}

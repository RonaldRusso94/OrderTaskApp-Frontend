import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from "react-redux";
import { useStore } from "../src/lib/redux";
import { useApollo } from "../src/lib/apollo";
import { fetchUser } from "../src/services/AuthService";
import "../src/styles/tailwind.css";
import UserContext from "../src/components/auth/UserContext";

const MyApp = ({ Component, pageProps, user }) => {

  return (
      <UserContext.Provider value={{ user }}>
        <Component user={user} {...pageProps} />
      </UserContext.Provider>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const { Component } = ctx;
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const result = await fetchUser(ctx);
  // gives page access to their props and the current authed user(if there is one)
  return { ...result, pageProps };
};

export default MyApp
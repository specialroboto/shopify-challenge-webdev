import React, { Component } from 'react';
// require('dotenv').config();
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';
import { ApolloProvider } from "react-apollo";

import AppHeader from "./components/AppHeader.js";
import AppMain from "./components/AppMain.js";

import './App.css';

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  // Set the authorization token from .env file
  const token = process.env.REACT_APP_GITHUB_API_KEY;

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache()
});


// const getSearchQuery = gql`
// {
//   search(query: "shopify", type: REPOSITORY, first: 10) {
//     nodes {
//       ... on Repository {
//         nameWithOwner
//         primaryLanguage {
//           name
//         }
//         releases(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) {
//           nodes {
//             tag {
//               name
//             }
//           }
//         }
//       }
//     }
//   }
// }`


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <AppHeader />
          <AppMain />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

// purecomponent vs stateless function compoents
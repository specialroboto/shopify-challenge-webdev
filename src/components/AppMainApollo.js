import React, { Component } from 'react';

import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

import SearchSection from "./SearchSection.js";
import FavoriteSection from "./FavoriteSection.js";

const getSearchQuery = gql`
{
  search(query: "shopify", type: REPOSITORY, first: 10) {
    nodes {
      ... on Repository {
        nameWithOwner
        primaryLanguage {
          name
        }
        releases(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) {
          nodes {
            tag {
              name
            }
          }
        }
      }
    }
  }
}`

class AppMain extends Component {
  render() {
    console.log(this.props)
    return (
      <main class="flex-row">
        <SearchSection />
        <FavoriteSection />
      </main>
    );
  }
}

export default graphql(getSearchQuery)(AppMain);

// Todo figure out if apollo is worth using.
// One single api call bound to a button might not worth the overhead?

// look into skip  https://github.com/Akryum/vue-apollo/issues/36

// or https://www.howtographql.com/react-apollo/7-filtering-searching-the-list-of-links/
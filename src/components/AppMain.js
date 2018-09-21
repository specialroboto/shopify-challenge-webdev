import React, { Component } from 'react';

import SearchSection from "./SearchSection.js";
import FavoriteSection from "./FavoriteSection.js";


class AppMain extends Component {

  constructor() {
    super();

    this.state = {
      favorites: []
    }
  }

  render() {
    return (
      <main class="flex-row">
        <SearchSection />
        <FavoriteSection />
      </main>
    );
  }
}

export default AppMain;

// look into skip  https://github.com/Akryum/vue-apollo/issues/36

// or https://www.howtographql.com/react-apollo/7-filtering-searching-the-list-of-links/
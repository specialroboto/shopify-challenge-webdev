import React, { Component } from 'react';
import SearchSection from "./SearchSection.js";
import FavoriteSection from "./FavoriteSection.js";

class AppMain extends Component {
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
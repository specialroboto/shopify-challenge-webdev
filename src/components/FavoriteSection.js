import React, { Component } from 'react';
import ResultsTable from "./ResultsTable.js";

class SearchSection extends Component {

  constructor() {
    super();
    this.state = {
      favorites: [],
      favoritesNameList: []
    }
  }

  render() {
    return (
      <div class="section" id="favorite-section">
        {this.props.favorites.length > 0 && <ResultsTable data={this.props.favorites} removeFavorite={this.props.removeFavorite} table="favorite" />}
      </div>
    );
  }
}

export default SearchSection;
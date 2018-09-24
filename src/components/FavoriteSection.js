import React, { Component } from 'react';
import ResultsTable from "./ResultsTable.js";

class FavoriteSection extends Component {

  render() {
    return (
      <div className="section" id="favorite-section">
        {this.props.favorites.length > 0 && <ResultsTable data={this.props.favorites} removeFavorite={this.props.removeFavorite} table="favorite" />}
      </div>
    );
  }
}

export default FavoriteSection;
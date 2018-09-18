import React, { Component } from 'react';
import ResultsTable from "./ResultsTable.js";

class SearchSection extends Component {
  render() {
    return (
      <div class="section" id="favorite-section">
        <ResultsTable table="favorite" />
      </div>
    );
  }
}

export default SearchSection;
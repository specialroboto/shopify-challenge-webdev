import React, { Component } from 'react';
import SearchBar from "./SearchBar.js";
import ResultsTable from "./ResultsTable.js";

class SearchSection extends Component {
  render() {
    return (
      <div class="section">
        <SearchBar />
        <ResultsTable table="search" />
      </div>
    );
  }
}

export default SearchSection;
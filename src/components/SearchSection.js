import React, { Component } from 'react';

import SearchBar from "./SearchBar.js";
import ResultsTable from "./ResultsTable.js";
import StatusMessage from "./StatusMessage.js";

class SearchSection extends Component {

  displaySearchResults() {
    // Returns appropriate status message or displays search result table
    if (this.props.search === null) {
      return <StatusMessage text="Perform your search in the search bar above" />
    } else if (this.props.search && this.props.search.data === null && this.props.search.hasOwnProperty("errors")) {
      return <StatusMessage text="Error: Something has happened. Please try again." />
    } else if (this.props.search && this.props.search.data.search.nodes.length === 0) {
      return <StatusMessage text="Sorry no results were found" />
    } else if (this.props.search && this.props.search.data.search.nodes.length > 0) {
      return <ResultsTable data={this.props.search.data.search.nodes} table="search" addFavorite={this.props.addFavorite} favoritesList={this.props.favoritesList} />
    }
  }

  render() {
    return (
      <div class="section">
        <SearchBar performSearch={this.performSearch} clearSearch={this.props.clearSearch} searchToState={this.props.searchToState} />
        {this.displaySearchResults()}
      </div>
    );
  }
}

export default SearchSection;
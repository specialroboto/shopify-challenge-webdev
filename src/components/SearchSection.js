import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from "./SearchBar.js";
import ResultsTable from "./ResultsTable.js";

class SearchSection extends Component {

  constructor() {
    super();

    this.state = {data: null}

    this.performSearch = this.performSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  async performSearch(searchVal) {

    // const query = `
    //   {
    //     search(query: ${searchVal}, type: REPOSITORY, first: 10) {
    //       nodes {
    //         ... on Repository {
    //           nameWithOwner
    //           primaryLanguage {
    //             name
    //           }
    //           releases(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) {
    //             nodes {
    //               tag {
    //                 name
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }`

    const query = `{ search(query: "${searchVal}", type: REPOSITORY, first: 10) { nodes { ... on Repository { id nameWithOwner primaryLanguage { name } releases(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) { nodes { tag { name } } } } } } }`

    let response = await axios({
      url: "https://api.github.com/graphql",
      method: "post",
      headers: {
        // "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`},
      data: {
        query: query
      }
    })
    // .then(
    //   res => console.log(res)
    // )

    console.log(response)

    this.setState({data: response.data})
  }

  clearSearch() {
    this.setState({data: null});
  }

  displaySearchResults() {

    if (this.state.data === null) {
      return "Perform your search in the search bar above"
    } else if (this.state.data && this.state.data.data === null && this.state.data.hasOwnProperty("errors")) {
      return "Error: Something has happened"
    } else if (this.state.data && this.state.data.data.search.nodes.length === 0) {
      return "Sorry no search results"
    } else if (this.state.data && this.state.data.data.search.nodes.length > 0) {
      return <ResultsTable data={this.state.data.data} table="search" />
    }

  }

  render() {
    return (
      <div class="section">
        <SearchBar performSearch={this.performSearch} clearSearch={this.clearSearch} />
        {this.displaySearchResults()}
      </div>
    );
  }
}

export default SearchSection;
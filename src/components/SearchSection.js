import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from "./SearchBar.js";
import ResultsTable from "./ResultsTable.js";

class SearchSection extends Component {

  constructor() {
    super();

    this.state = { search: null }

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

    // const query = `{ search(query: "${searchVal}", type: REPOSITORY, first: 10) { nodes { ... on Repository { id nameWithOwner primaryLanguage { name } releases(first: 1, orderBy: {field: CREATED_AT, direction: DESC}) { nodes { name tag { name } } } } } } }`


    const query = `{ search(query: "${searchVal}", type: REPOSITORY, first: 10) { nodes { ... on Repository { id nameWithOwner primaryLanguage { name } releases(first: 3 , orderBy: {field: CREATED_AT, direction: DESC}) { nodes { name tag { name } } } } } } }`

    let response = await axios({
      url: "https://api.github.com/graphql",
      method: "post",
      headers: {
        // "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`
      },
      data: {
        query: query
      }
    })
    // .then(
    //   res => console.log(res)
    // )

    console.log(response)

    this.setState({ search: response.data })
  }

  clearSearch() {
    this.setState({ search: null });
  }

  displaySearchResults() {

    if (this.state.search === null) {
      return "Perform your search in the search bar above"
    } else if (this.state.search && this.state.search.data === null && this.state.search.hasOwnProperty("errors")) {
      return "Error: Something has happened"
    } else if (this.state.search && this.state.search.data.search.nodes.length === 0) {
      return "Sorry no search results"
    } else if (this.state.search && this.state.search.data.search.nodes.length > 0) {
      return <ResultsTable data={this.state.search.data.search.nodes} table="search" addFavorite={this.props.addFavorite} favoritesList={this.props.favoritesList} />
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
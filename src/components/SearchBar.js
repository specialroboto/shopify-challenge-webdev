import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {search: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.performSearch = this.performSearch.bind(this);
  }

  handleKeyPress(e) {
    // key="Enter" or charCode=13
    if (e.key === "Enter" && e.target.value !== "") {
      this.handleSubmit(e);
    }
  }

  handleChange(e) {
    this.setState({search: e.target.value});

    if (e.target.value === "") {
      this.props.clearSearch();
    }
  }

  handleSubmit() {
    this.performSearch(this.state.search);
  }

  async performSearch(searchVal) {

    // Graphql query string
    const query = `{ search(query: "${searchVal}", type: REPOSITORY, first: 10) { nodes { ... on Repository { id nameWithOwner primaryLanguage { name } releases(first: 1 , orderBy: {field: CREATED_AT, direction: DESC}) { nodes { name tag { name } } } } } } }`

    let response = await axios({
      url: "https://api.github.com/graphql",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`
      },
      data: {
        query: query
      }
    })

    console.log(response)
    this.props.searchToState(response.data);
  }

  render() {
    return (
      <div id="search-bar">
        <input id="search-input" type="text" value={this.state.search} onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
        <input id="search-button" type="button" value="Search" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default SearchBar;
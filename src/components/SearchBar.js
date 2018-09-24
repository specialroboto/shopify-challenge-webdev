import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {searchVal: ""};

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
    this.setState({searchVal: e.target.value});

    if (e.target.value === "") {
      this.props.clearSearch();
    }
  }

  removeInvalidChars(string) {
    // Double quote and backslash seems to be the only character that causes an error, more testing might be needed
    // Alternatively could add live validation to handleChange, but this method does not seem to alter search results and bothers the user less
    return string.replace(/[\\"]/g, " ");
  }

  handleSubmit() {
    this.performSearch(this.state.searchVal);
  }

  async performSearch(searchVal) {

    let cleanSearchVal = this.removeInvalidChars(searchVal);

    // Graphql query string
    const query = `{ search(query: "${cleanSearchVal}", type: REPOSITORY, first: 10) { nodes { ... on Repository { id nameWithOwner primaryLanguage { name } releases(first: 1 , orderBy: {field: CREATED_AT, direction: DESC}) { nodes { tag { name } } } } } } }`

    // Looked into using Apollo for Graphql but not sure if it was worth the overhead exspecially for such a simple use
    // The main reason for choosing to go with the Graphql api was in order to minimize the number of request needed
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
        <input id="search-input" type="text" value={this.state.searchVal} onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
        <input id="search-button" type="button" value="Search" onClick={this.handleSubmit} />
      </div>
    );
  }
}

export default SearchBar;
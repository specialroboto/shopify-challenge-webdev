import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {search: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleKeyPress(e) {
    // key="Enter" or charCode=13
    if (e.key === "Enter") {
      this.handleSubmit(e);
    }
  }

  handleChange(e) {
    this.setState({search: e.target.value});

    if (e.target.value === "") {
      this.props.clearSearch();
    }
  }

  handleSubmit(e) {
    this.props.performSearch(this.state.search);
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
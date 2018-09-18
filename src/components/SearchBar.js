import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();

  }

  handleKeyPress(e) {
    // key="Enter" or charCode=13
    // console.log(e);
    // console.log(e.charCode);
    console.log(e.key);
    // console.log(e.target.value);
    // console.log(e.nativeEvent.data);
    // console.log(e.target.value);
  }

  hangleChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div id="search-bar">
        <input id="search-input" type="text" value="" onKeyPress={this.handleKeyPress} onChange={this.hangleChange} />
        <input id="search-button" type="button" value="Search" />
      </div>
    );
  }
}

export default SearchBar;
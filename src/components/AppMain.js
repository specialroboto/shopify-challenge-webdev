import React, { Component } from 'react';

import SearchSection from "./SearchSection.js";
import FavoriteSection from "./FavoriteSection.js";


class AppMain extends Component {

  constructor() {
    super();

    this.state = {
      search: null,
      favorites: [],
      favoritesList: []
    }

    this.searchToState = this.searchToState.bind(this);
    this.clearSearch = this.clearSearch.bind(this);

    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
  }

  searchToState(searchData) {
    this.setState({ search: searchData })
  }

  clearSearch() {
    this.setState({ search: null });
  }

  addFavorite(node) {
    let { favorites, favoritesList } = this.state;

    favorites.push(node);
    favoritesList.push(node.id);

    this.setState({
      favorites: favorites,
      favoritesList: favoritesList
    });
  }

  removeFavorite(index, id) {
    let { favorites, favoritesList } = this.state;

    favorites.splice(index, 1);
    favoritesList.splice(index, 1);

    this.setState({
      favorites: favorites,
      favoritesList: favoritesList
    });
  }

  render() {
    return (
      <main class="flex-row">
        <SearchSection search={this.state.search} favoritesList={this.state.favoritesList} addFavorite={this.addFavorite} searchToState={this.searchToState} clearSearch={this.clearSearch} />
        <FavoriteSection favorites={this.state.favorites} removeFavorite={this.removeFavorite} />
      </main>
    );
  }
}

export default AppMain;
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
    console.log(this.changeHMtoArray())
    return (
      <main class="flex-row">
        <SearchSection search={this.state.search} favoritesList={this.state.favoritesList} addFavorite={this.addFavorite} searchToState={this.searchToState} clearSearch={this.clearSearch} />
        <FavoriteSection favorites={this.state.favorites} removeFavorite={this.removeFavorite} />
      </main>
    );
  }
}

export default AppMain;

// look into skip  https://github.com/Akryum/vue-apollo/issues/36

// or https://www.howtographql.com/react-apollo/7-filtering-searching-the-list-of-links/
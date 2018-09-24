import React, { Component } from 'react';

import SearchSection from "./SearchSection.js";
import FavoriteSection from "./FavoriteSection.js";


class AppMain extends Component {

  constructor() {
    super();

    this.state = {
      search: null,
      fav: {},
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
    let { fav, favorites, favoritesList } = this.state;
    fav[node.id]= node;
    favorites.push(node);
    favoritesList.push(node.id);
    this.setState({
      fav: fav,
      favorites: favorites,
      favoritesList: favoritesList
    });
    console.log(this.state.fav,this.state.favorites, this.state.favoritesList)
  }

  removeFavorite(index, id) {
    let { fav, favorites, favoritesList } = this.state;

    delete fav[id];

    favorites.splice(index, 1);
    favoritesList.splice(index, 1);

    this.setState({
      favorites: favorites,
      favoritesList: favoritesList
    });
  }

  // TODO: Decide on which data structure to use. Array vs Hashmap?
  changeHMtoArray() {
    return this.state.favoritesList.map(id => {
      return this.state.fav[id]
    })
  }

  render() {
    console.log(this.changeHMtoArray())
    return (
      <main class="flex-row">
        <SearchSection search={this.state.search} favoritesList={this.state.favoritesList} addFavorite={this.addFavorite} searchToState={this.searchToState} clearSearch={this.clearSearch} />
        <FavoriteSection xfavorites={this.state.favorites} favorites={this.changeHMtoArray()} removeFavorite={this.removeFavorite} />
      </main>
    );
  }
}

export default AppMain;

// look into skip  https://github.com/Akryum/vue-apollo/issues/36

// or https://www.howtographql.com/react-apollo/7-filtering-searching-the-list-of-links/
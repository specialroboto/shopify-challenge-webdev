import React, { Component } from 'react';

import SearchSection from "./SearchSection.js";
import FavoriteSection from "./FavoriteSection.js";


class AppMain extends Component {

  constructor() {
    super();

    this.state = {
      fav: {},
      favorites: [],
      favoritesList: [],
      search: null
    }

    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
    // this.changeData = this.changeData.bind(this);
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
    console.log(this.state.favorites, this.state.favoritesList)
  }

  removeFavorite(index) {
    let { favorites, favoritesList } = this.state;

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
        <SearchSection favoritesList={this.state.favoritesList} addFavorite={this.addFavorite} />
        <FavoriteSection xfavorites={this.state.favorites} favorites={this.changeHMtoArray()} removeFavorite={this.removeFavorite} />
      </main>
    );
  }
}

export default AppMain;

// look into skip  https://github.com/Akryum/vue-apollo/issues/36

// or https://www.howtographql.com/react-apollo/7-filtering-searching-the-list-of-links/
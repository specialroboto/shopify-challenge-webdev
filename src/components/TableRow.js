import React, { Component } from 'react';

class TableRow extends Component {

  addButton() {
    return (<a href="#!" onClick={() => this.props.addFavorite(this.props.repo)}>Add</a>);
  }

  removeButton() {
    return (<a href="#!" onClick={() => this.props.removeFavorite(this.props.index, this.props.repo.id)}>Remove</a>);
  }

  displayButton(table, id) {
    // Returns either a Add button or Remove button depending on value passed into table prop
    if (table === "search" && !this.props.favoritesList.includes(id)) {
      return this.addButton();
    } else if (table === "favorite") {
      return this.removeButton();
    }
  }

  render() {
    const { id, nameWithOwner, primaryLanguage, releases } = this.props.repo;
    const table = this.props.table;
    return (
      <tr>
        <td>
          <a className="name-link" href={`https://www.github.com/${nameWithOwner}`}>{nameWithOwner}</a>
        </td>
        <td>
          {/* Somtimes repos don't have a primary language */}
          {primaryLanguage && primaryLanguage.name}
        </td>
        <td>
          {/* releases.nodes[0] check is because some search results return an array with single value of null, example search amazon */}
          {/* releases.nodes[0].tag check is because some search results return tag with a value of null, example search "bla" repo:"PaperAirplane-Dev-Team/BlackLight" */}
          {/* https://medium.com/javascript-inside/safely-accessing-deeply-nested-values-in-javascript-99bf72a0855a */}
          {releases.nodes.length > 0 && releases.nodes[0] && releases.nodes[0].tag ? releases.nodes[0].tag.name : "-"}
        </td>
        <td>
          {/* {table === "search" && !this.props.favoritesList.includes(id) && this.addButton()}
          {table === "favorite" && this.removeButton()} */}
          {this.displayButton(table, id)}
        </td>
      </tr>
    );
  }
}

export default TableRow;
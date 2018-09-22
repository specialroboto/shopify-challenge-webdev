import React, { Component } from 'react';

class TableRow extends Component {
  constructor() {
    super();
  }

  addButton() {
    return (<a onClick={() => this.props.addFavorite(this.props.repo)}>Add</a>);
  }

  removeButton() {
    return (<a onClick={() => this.props.removeFavorite(this.props.index)}>Remove</a>);
  }

  render() {
    const { id, nameWithOwner, primaryLanguage, releases } = this.props.repo;
    const table = this.props.table;
    return (
      <tr>
        <td>
          <a href={`https://www.github.com/${nameWithOwner}`}>{nameWithOwner}</a>
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
          {table === "search" && !this.props.favoritesList.includes(id) && this.addButton()}
          {table === "favorite" && this.removeButton()}
        </td>
      </tr>
    );
  }
}

export default TableRow;
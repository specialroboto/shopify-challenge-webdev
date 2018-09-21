import React, { Component } from 'react';

class TableRow extends Component {
  constructor() {
    super();
  }

  addButton() {
    return "add"
  }

  removeButton() {
    return "remove"
  }

  render() {
    const { nameWithOwner, primaryLanguage, releases } = this.props.repo;
    const table = this.props.table;
    return (
      <tr>
        <td>
          <a href={`https://www.github.com/${nameWithOwner}`}>{nameWithOwner}</a>
        </td>
        <td>
          {primaryLanguage && primaryLanguage.name}
        </td>
        <td>
          {/* releases.nodes[0] check is because some search results return an array with single value of null, example search amazon */}
          {releases.nodes.length > 0 && releases.nodes[0] ? releases.nodes[0].tag.name : "-"}
        </td>
        <td>
          {table === "search" && this.addButton()}
          {table === "favorite" && this.removeButton()}
        </td>
      </tr>
    );
  }
}

export default TableRow;
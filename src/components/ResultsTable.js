import React, { Component } from 'react';
import TableRow from "./TableRow";

class ResultsTable extends Component {
  render() {
    return (
      <table class="result-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Language</th>
            <th>Latest tag</th>
            <th className="add-remove-col" ></th>
          </tr>
        </thead>
        <tbody>
          {this.props.data && this.props.data.map((repo, index) => {
            return (
              <TableRow repo={repo} index={index} table={this.props.table} key={repo.id} addFavorite={this.props.addFavorite} removeFavorite={this.props.removeFavorite} favoritesList={this.props.favoritesList} />
            )
          })}
        </tbody>
      </table>
    );
  }
}

export default ResultsTable;
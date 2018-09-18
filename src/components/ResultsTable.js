import React, { Component } from 'react';
import testData from './testData.json';
import TableRow from "./TableRow";

class ResultsTable extends Component {
  render() {
    return (
      <table id="search-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Language</th>
            <th>Latest tag</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {testData.data.search.nodes.map((repo, i) => {
            return (
              <TableRow repo={repo} table={this.props.table} />
            )
          })}
        </tbody>
      </table>
    );
  }
}

export default ResultsTable;
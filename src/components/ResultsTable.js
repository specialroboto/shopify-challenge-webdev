import React, { Component } from 'react';
import testData from './testData.json';
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.data && this.props.data.search.nodes.map((repo, i) => {
            return (
              <TableRow repo={repo} table={this.props.table} key={repo.id}/>
            )
          })}
        </tbody>
      </table>
    );
  }
}

export default ResultsTable;
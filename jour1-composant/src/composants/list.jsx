import React, { Component } from "react";

class List extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ul>
          <li>Lundi</li>
          <li className="badge badge-success">Mardi</li>
          <li>Mercredi</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default List;

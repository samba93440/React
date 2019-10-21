import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="card-header">Menu</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Link to="/admin/posts">Gestion des articles</Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/users">Gestion des users</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;

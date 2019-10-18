import React from "react";

const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Compteur &nbsp;
        <span className="badge badge-primary m-2">+{props.total}</span>
        <span className="badge badge-success m-2">{props.toto}</span>
        <span className="badge badge-danger m-2">-{props.tata}</span>
      </a>
    </nav>
  );
};

export default Navbar;

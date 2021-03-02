import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="mb-auto">
        <h3 className="masthead-brand">
          <i className="nes-icon coin is-large"> </i> Yaniv Hershkowitz
        </h3>
        <nav className="nav nav-masthead justify-content-center">
          <Link className="nav-link active" to="/">
            <a>home</a>
          </Link>
          <Link className="nav-link active" to="/portfolio">
            <a>portfolio</a>
          </Link>
          <Link className="nav-link active" to="/cv">
            <a>cv</a>
          </Link>
          <Link className="nav-link active" to="/contact">
            <a>contact</a>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;

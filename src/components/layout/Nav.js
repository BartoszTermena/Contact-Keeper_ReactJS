import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Nav = () => {
  return (
    <nav className="nav-wrapper blue">
      <Link to="/" className="brand-logo left">
        <i className="material-icons logo-icon">contacts</i>
        Contact Keeper
      </Link>
      <SignedInLink />
      <SignedOutLinks />
    </nav>
  );
};

export default Nav;

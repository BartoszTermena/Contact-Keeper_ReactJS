import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Nav = () => {
  return (
    <nav className="nav-wrapper blue">
      <Link to="/" className="brand-logo left">
        <i className="fas fa-id-card-alt" />
        Contact Keeper
      </Link>
      <SignedInLink />
      <SignedOutLinks />
    </nav>
  );
};

export default Nav;

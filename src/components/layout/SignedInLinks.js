import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/" onClick={props.signOut}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating blue darken-2">
          NN
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);

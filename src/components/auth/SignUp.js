import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

const SignUp = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    };
    props.signUp(newUser);
  };
  const { auth, authError } = props;
  if (auth.uid) return <Redirect to="/" />;
  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={email => setEmail(email.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={password => setPassword(password.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={firstName => setFirstName(firstName.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastName => setLastName(lastName.target.value)}
          />
        </div>
        <div className="input-field">
          <button
            onClick={handleSubmit}
            className="btn pink lighten-1 z-depth-0"
          >
            Sign Up
          </button>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

const SignIn = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    let user = {
      email,
      password
    };
    props.signIn(user);
  };
  const { auth } = props;
  if (auth.uid) return <Redirect to="/" />;
  return (
    <div className="container dashboard">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={e => handleChangeEmail(e)} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={e => handleChangePassword(e)}
          />
        </div>
        <div className="input-field center">
          <button onClick={handleSubmit} className="btn blue">
            Login
          </button>
          <div className="red-text center">
            {props.authError ? <p>{props.authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

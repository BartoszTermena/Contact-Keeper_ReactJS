import React, { Fragment } from "react";
import FormContact from "./FormContact";
import Contacts from "./Contacts";
import { connect } from "react-redux";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import Loader from "../layout/loader/Loader";
import NoContacts from "./NoContacts";

const Dashboard = props => {
  const { contacts, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (!isLoaded(contacts)) {
    return (
      <Fragment>
        <div className="loader-dashboard">
          <Loader />
        </div>
      </Fragment>
    );
  }
  if (isEmpty(contacts)) {
    return (
      <Fragment>
        <div className="row dashboard">
          <div className="col s12 m5">
            <FormContact />
          </div>
          <div className="col s12 m6 offset-m1">
            <NoContacts />
          </div>
        </div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <div className="row dashboard">
        <div className="col s12 m5">
          <FormContact />
        </div>
        <div className="col s12 m6 offset-m1">
          <Contacts contacts={contacts} />
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    contacts: state.firestore.ordered.contacts
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    if (!props.auth.uid) return [];
    return [
      { collection: "contacts", where: [["authorId", "==", props.auth.uid]] }
    ];
  })
)(Dashboard);

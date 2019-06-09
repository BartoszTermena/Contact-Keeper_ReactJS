import React, { Fragment } from "react";
import FormContact from "./FormContact";
import Contacts from "./Contacts";
import { connect } from "react-redux";

const Dashboard = props => {
  const { contacts } = props;
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
    contacts: state.contact.contacts
  };
};

export default connect(mapStateToProps)(Dashboard);

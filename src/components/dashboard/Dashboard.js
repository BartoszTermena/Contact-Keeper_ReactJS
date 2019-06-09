import React, { Fragment } from "react";
import FormContact from "./FormContact";
import Contacts from "./Contacts";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="row dashboard">
        <div className="col s12 m6">
          <FormContact />
        </div>
        <div className="col s12 m5 offset-m1">
          <Contacts />
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;

import React, { Fragment } from "react";
import moment from "moment";

const ContactSummary = ({ contact }) => {
  const { id, name, email, phone, type, createdAt } = contact;
  return (
    <Fragment>
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">
            {name}
            <span className="card-status">{type}</span>
          </span>
          <p>
            <i className="tiny material-icons">email</i> {email}
          </p>
          <p>
            <i className="tiny material-icons">local_phone</i> {phone}
          </p>
          <p className="grey-text">
            Created at: {moment(createdAt.toDate().toString()).calendar()}
          </p>
        </div>
        <div className="card-action">
          <a>Edit</a>
          <a>Delete</a>
        </div>
      </div>
    </Fragment>
  );
};
export default ContactSummary;

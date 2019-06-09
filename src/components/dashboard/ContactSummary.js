import React, { Fragment } from "react";

const ContactSummary = () => {
  return (
    <Fragment>
      <div class="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">
            Jeff Jackson
            <span className="card-status">professional</span>
          </span>
          <p>
            <i className="tiny material-icons">email</i> jeff@gmail.com
          </p>
          <p>
            <i className="tiny material-icons">local_phone</i> +48 534-932-586
          </p>
          <p className="grey-text">3rd September, 2am</p>
        </div>
        <div class="card-action">
          <a href="#">Edit</a>
          <a href="#">Delete</a>
        </div>
      </div>
    </Fragment>
  );
};
export default ContactSummary;

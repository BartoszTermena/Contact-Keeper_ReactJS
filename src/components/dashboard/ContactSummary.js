import React, { Fragment, useState } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { deleteContact } from "../../store/actions/contactActions";

const ContactSummary = ({ contact, deleteContact }) => {
  const { id, name, email, phone, type, createdAt } = contact;

  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <Fragment>
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">
            {name}
            <span className="card-status">{type}</span>
          </span>
          <p className="contact-label">
            <i className="tiny material-icons">email</i>
            {!edit ? email : <input />}
          </p>
          <p className="contact-label">
            <i className="tiny material-icons">local_phone</i> {phone}
          </p>
          <p className="grey-text">
            Created at: {moment(createdAt.toDate().toString()).calendar()}
          </p>
        </div>
        <div className="card-action">
          <a className="btn-action" onClick={() => handleEdit()}>
            Edit
          </a>
          <a className="btn-action" onClick={() => deleteContact(id)}>
            Delete
          </a>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: contactId => dispatch(deleteContact(contactId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ContactSummary);

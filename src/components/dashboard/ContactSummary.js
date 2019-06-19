import React, { Fragment, useState } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { deleteContact, editContact } from "../../store/actions/contactActions";

const ContactSummary = ({ contact, deleteContact, editContact }) => {
  const { id, name, email, phone, type, createdAt } = contact;

  const [edit, setEdit] = useState(false);
  const [editEmail, setEditEmail] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editType, setEditType] = useState("");

  const isEnabled =
    editEmail.length > 0 && editPhone.length > 0 && editType.length > 0;

  const handleSubmit = e => {
    e.preventDefault();
    const updatedContact = {
      name,
      email: editEmail,
      phone: editPhone,
      type: editType,
      createdAt
    };
    editContact(id, updatedContact);
    handleEdit();
  };
  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <Fragment>
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">
            {name}
            <span className="card-status">
              {!edit ? (
                type
              ) : (
                <Fragment>
                  <label className="edit-radio-btn">
                    <input
                      className="with-gap"
                      name="group1"
                      type="radio"
                      onChange={() => setEditType("Personal")}
                    />
                    <span>Personal</span>
                  </label>

                  <label className="edit-radio-btn">
                    <input
                      className="with-gap"
                      name="group1"
                      type="radio"
                      onChange={() => setEditType("Professional")}
                    />
                    <span>Professional</span>
                  </label>
                </Fragment>
              )}
            </span>
          </span>
          <p className="contact-label">
            <i className="tiny material-icons">email</i>
            {!edit ? (
              email
            ) : (
              <input
                placeholder="email"
                onChange={e => setEditEmail(e.target.value)}
                className="edit-input"
              />
            )}
          </p>
          <p className="">
            <i className="tiny material-icons">local_phone</i>
            {!edit ? (
              phone
            ) : (
              <input
                placeholder="(Format: 123-456-789) "
                onChange={e => setEditPhone(e.target.value)}
                className="edit-input"
              />
            )}
          </p>
          <p className="grey-text">
            Created at: {moment(createdAt.toDate().toString()).calendar()}
          </p>
        </div>
        <div className="card-action">
          {!edit ? (
            <Fragment>
              <button
                className="waves-effect blue darken-2 btn"
                onClick={() => handleEdit()}
              >
                Edit
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <button
                disabled={!isEnabled}
                className="waves-effect blue darken-2 btn "
                onClick={e => handleSubmit(e)}
              >
                Submit
              </button>
            </Fragment>
          )}

          <button
            className="waves-effect blue darken-2 btn"
            onClick={() => deleteContact(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: contactId => dispatch(deleteContact(contactId)),
    editContact: (contactId, contact) =>
      dispatch(editContact(contactId, contact))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ContactSummary);

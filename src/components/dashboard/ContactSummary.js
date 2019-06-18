import React, { Fragment, useState } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { deleteContact, editContact } from "../../store/actions/contactActions";

const ContactSummary = ({ contact, deleteContact }) => {
  const { id, name, email, phone, type, createdAt } = contact;

  const [edit, setEdit] = useState(false);
  const [editEmail, setEditEmail] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editType, setEditType] = useState("");

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
                      className=""
                      name="group1"
                      type="radio"
                      onChange={() => setEditType("Personal")}
                    />
                    <span>Personal</span>
                  </label>

                  <label className="edit-radio-btn">
                    <input
                      className=""
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
              <a className="btn-action" onClick={() => handleEdit()}>
                Edit
              </a>
            </Fragment>
          ) : (
            <Fragment>
              <a className="btn-action" onClick={e => handleSubmit(e)}>
                Submit
              </a>
            </Fragment>
          )}

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
    deleteContact: contactId => dispatch(deleteContact(contactId)),
    editContact: (contactId, contact) =>
      dispatch(editContact(contactId, contact))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ContactSummary);

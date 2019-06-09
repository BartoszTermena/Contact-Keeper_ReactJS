import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const FormContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+48");
  const [radio, setRadio] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: name,
      email: email,
      phone: phone,
      radio: radio
    };
    console.log(contact);
  };
  return (
    <div>
      <form className="white" onSubmit={onSubmit}>
        <h5 className="grey-text text-darken-3 center">Add Contact</h5>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={name => setName(name.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={email => setEmail(email.target.value)}
          />
        </div>
        <div className="input-field">
          <PhoneInput
            placeholder="Enter phone number"
            country="PL"
            value={phone}
            onChange={phone => setPhone(phone)}
          />
        </div>
        <div className="input-field">
          <div>
            <label className="radio-btn">
              <input
                className="with-gap"
                name="group1"
                type="radio"
                onChange={() => setRadio("Personal")}
              />
              <span>Personal</span>
            </label>

            <label className="radio-btn">
              <input
                className="with-gap"
                name="group1"
                type="radio"
                onChange={() => setRadio("Professional")}
              />
              <span>Professional</span>
            </label>
          </div>
        </div>
        <div className="input-field center">
          <button className="btn blue" onClick={onSubmit}>
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContact;

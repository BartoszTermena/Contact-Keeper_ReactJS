import React from "react";
import ContactSummary from "./ContactSummary";

const Contacts = ({ contacts }) => {
  return (
    <div className="contact-list section">
      {contacts &&
        contacts.map(contact => {
          return <ContactSummary contact={contact} />;
        })}
    </div>
  );
};

export default Contacts;

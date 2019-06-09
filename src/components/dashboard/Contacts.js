import React from "react";
import ContactSummary from "./ContactSummary";

const Contacts = () => {
  return (
    <div className="contact-list section">
      <ContactSummary />
      <ContactSummary />
      <ContactSummary />
    </div>
  );
};

export default Contacts;

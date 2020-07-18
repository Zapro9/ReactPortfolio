import React from 'react';
import Form from "../../components/Form";
import "./Contact.css";

class Contact extends React.Component {
  render(){
    return (
      <>
        <Form/>
        <div className="contactMe">
              <h2 className="contactHeader">
                Contact Information
              </h2>
              <p className="contactName">
                Zachary Proctor
              </p>
              <p className="contactNum">
                (281)352-4057
              </p>
              <p className="contactEmail">
                Z.proctor@hotmail.com
              </p>
          </div>
      </>
    );
  }
}

export default Contact;
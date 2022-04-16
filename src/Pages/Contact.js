import React, { Fragment, useRef } from "react";
import "./Contact.css";
const Contact = () => {
  const nameRef = useRef("");
  const mailRef = useRef("");
  const phnoRef = useRef("");
  const msgRef  =  useRef("");


  const submitHandler = async (event) => {
    event.preventDefault();
    const Contacts = {
      name: nameRef.current.value,
      email: mailRef.current.value,
      phno: phnoRef.current.value,
      msg:  msgRef.current.value,
    };
    
    const response = await fetch(
      "https://react-http-21f21-default-rtdb.firebaseio.com/Contacts.json",
      {
        method: "POST",
        body: JSON.stringify(Contacts),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <Fragment>
      <h1 style={{ fontFamily: "Times New Roman", textAlign: "center" }}>
        Contact us
      </h1>
      <form className="container" onSubmit={submitHandler}>
        <div className="form">
          <div className="formdetails">
            <label>Name</label>
            <input type="text" ref={nameRef} />
          </div>
          <br />
          <div className="formdetails">
            <label>Email</label>
            <input
              type="email"
              ref={mailRef}
            />
          </div>
          <div className="formdetails">
            <label>Phone no</label>
            <input type="number" ref={phnoRef} />
          </div>
          <div className="">
            <label className="msglabel">Message</label>
            <textarea
              className="msginput" ref={msgRef}
            ></textarea>
          </div>
          <div>
            <button className="Contactbutton"> submit</button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Contact;

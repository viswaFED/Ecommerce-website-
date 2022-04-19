import React, { Fragment, useRef } from "react";
import classes from "./Contact.module.css";
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
      <form  onSubmit={submitHandler}>
        <div className={classes.contact}>
        <div className={classes.control}>
            <label>Name</label>
            <input type="text" ref={nameRef} />
          </div>
          <br />
          <div className={classes.control}>
            <label>Email</label>
            <input
              type="email"
              ref={mailRef}
            />
          </div>
          <div className={classes.control}>
            <label>Phone no</label>
            <input type="number" ref={phnoRef} />
          </div>
          <div className={classes.control}>
            <label className="msglabel">Message</label>
            <textarea
               ref={msgRef}
            ></textarea>
          </div>
          <div >
            <button className={classes.toggle} > submit</button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Contact;

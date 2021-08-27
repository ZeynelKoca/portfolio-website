import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import emailjs from "emailjs-com"
import data from "../data.js"

const Contact = () => {
  const [status, setStatus] = useState("");

  function sendEmail(e) {
    setStatus("Processing..");
    e.preventDefault();

    emailjs.sendForm('service_njs1e2l', 'template_7o9x2ft', e.target, 'user_A0TYilXGUenl9WWFcHixg')
      .then((result) => {
          console.log(result.text);
          setStatus("Successfully sent your message")
      }, (error) => {
          console.log(error.text);
          setStatus("Oops.. Something went wrong");
      });

    e.target.reset();
  }

  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <Fade bottom cascade delay={100}>
            <h1>Contact</h1>
            <a href={`mailto:${data.contactEmail}`}>{data.contactEmail}</a>
          </Fade>

          <Fade bottom cascade delay={100}>
            <form className="contact-form" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              <label htmlFor="form-name">Name</label>
              <input type="text" name="name" id="form-name" />
              <label htmlFor="form-email">Email *</label>
              <input type="email" name="user_email" id="form-email" required />
              <label htmlFor="form-message">Message *</label>
              <textarea name="message" required id="form-message" />
              <input type="submit" value="Send" className="form-send" />
            </form>
          </Fade>

          <h4>{status}</h4>

        </div>
      </div>
    </div>
  )
}

export default Contact
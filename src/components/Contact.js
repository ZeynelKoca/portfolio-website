import React, { useState } from "react"
import { Fade } from "react-awesome-reveal"
import emailjs from "@emailjs/browser"
import data from "../data.js"

const Contact = () => {
  const [status, setStatus] = useState("");

  function sendEmail(e) {
    setStatus("Processing..");
    e.preventDefault();

    emailjs.sendForm('service_5cqev69', 'template_7o9x2ft', e.target, 'user_A0TYilXGUenl9WWFcHixg')
      .then((result) => {
          console.log(result.text);
          setStatus("Successfully sent your message")
      }, (error) => {
          console.log(error.text);
          setStatus("Oops.. Something went wrong. Contact me directly through my email: zeynel.koca@outlook.com");
      });

    e.target.reset();
  }

  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <Fade triggerOnce direction="up" cascade>
            <h1>Contact</h1>
            <a href={`mailto:${data.contactEmail}`}>{data.contactEmail}</a>
          </Fade>

          <Fade triggerOnce direction="up" cascade delay={100}>
            <form className="contact-form" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              <label htmlFor="form-name">Name</label>
              <input type="text" name="name" id="form-name" />
              <label htmlFor="form-email">Email *</label>
              <input type="email" name="user_email" id="form-email" required />
              <label htmlFor="form-message">Message *</label>
              <textarea name="message" required id="form-message" style={{height: "200px"}} />
              <input type="submit" value="Send" className="form-send" />
            </form>
          </Fade>

          <h4 style={{textAlign: "center"}}>{status}</h4>

        </div>
      </div>
    </div>
  )
}

export default Contact
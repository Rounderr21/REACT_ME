import './contact.scss';
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const reForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        reForm.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form
        ref={reForm}
        onSubmit={sendEmail}
        className="--form-control --card"
      >
        <div className="input-group">
        <input
          type="text"
          placeholder="Full Name"
          name="User_name"
          required
        />
        </div>
        <div className='input-group'>
        <input type="Email" placeholder="Email" name="User_email" required />
        </div>
        <div className='input-group'>
        <input type="text" placeholder="Subject" name="Subject" required />
        </div>
        <div className="input-group">
        <textarea
          name="message"
          placeholder="Message"
          cols="30"
          rows="10"
        ></textarea>
        </div>
        <div className="input-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
import React, { useState } from 'react';
import './contact.scss';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('All fields are required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    const formData = { name, email, message };
    try {
      const response = await fetch('http://localhost:3001/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent!');
        // Handle success, e.g., show a success message
      } else {
        console.log(response);
        // Handle errors
      }
    } catch (error) {
      console.log(error);
      // Handle errors
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        </div>
        <div className="input-group">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            required
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div className="input-group">
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required></textarea>
        </div>
        <div className="input-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
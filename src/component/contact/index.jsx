import React from 'react';
import './style.css'; // Import CSS for styling

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2>Contact us</h2>
      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label>First name</label>
            <input type="text" placeholder="First name" />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input type="text" placeholder="Last name" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email *</label>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="📞 Phone" />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Message *</label>
          <textarea placeholder="Message" rows="5" required></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;

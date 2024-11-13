"use client";

import React from 'react'
import './style.css';  // Import custom CSS
const page = () => {
  return (
    <section className="contact-section">
  <div className="contact-container">
    {/* Map Section */}
    <div className="map-container">
      <iframe
        className="map-iframe"
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.233240749432!2d67.01935457391797!3d24.92412304270991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fecd7dfa167%3A0x9719dc79e76d4cce!2s5b%201%2C%2016%20Nazimabad%20No.%205%2C%20Block%205%20Block%205%20A%20Block%205%20Nazimabad%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2074600%2C%20Pakistan!5e0!3m2!1sen!2s!4v1730985051327!5m2!1sen!2s"
      />
      <div className="map-details">
        <div className="details-section">
          <h2 className="details-title">Address</h2>
          <p className="details-text">5B 1/16 Nazimabad no 5 Karachi no 18</p>
        </div>
        <div className="details-section">
          <h2 className="details-title">Email</h2>
          <a className="details-link">m.rohanmirza2007@email.com</a>
          <h2 className="details-title" style={{ marginTop: '16px' }}>Phone</h2>
          <p className="details-text">03361395949</p>
        </div>
      </div>
    </div>

    {/* Form Section */}
    <div className="form-container">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        name="contact-form"
      >
        <h2 className="form-title">Contact Us:-</h2>
        <p className="form-description">Feel Free to Contact</p>
        <input
          type="hidden"
          name="access_key"
          value="800f4f22-b37e-4912-bc95-39b761eefc04"
        />
        <input type="text" name="Name" placeholder="Name" className="form-input" />
        <input type="text" name="Email" placeholder="Email" className="form-input" />
        <input type="text" name="Phone Number" placeholder="Phone Number" className="form-input" />
        <textarea
          name="Message"
          placeholder="Your Message"
          className="form-textarea"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  </div>
</section>

  )
}

export default page

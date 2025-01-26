import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-description">
          Have any questions or inquiries? Feel free to reach out!
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your message..." required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>

        <div className="contact-info">
          <div>
            <i className="fa-solid fa-phone"></i>
            <p>+234 813 0164 483</p>
          </div>
          <div>
            <i className="fa-solid fa-envelope"></i>
            <p>ayoakeni64@gmail.com</p>
          </div>
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <p>10 ajijola anobi St., iyana-ipaja, Lagos Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
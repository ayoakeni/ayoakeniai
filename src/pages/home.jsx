import React from "react";
import img from "../assets/images/me2.jpg"

const HomePage = () => {
  return (
    <section className="home">
      <div className="heropage">
        {/* Text Section */}
        <div className="textInfo">
          <span>You are welcome!</span>
          <h2>
            <strong>A</strong>rtificial Intelligence
          </h2>
          <p>
          Empowering the future, one innovation at a time. Where ideas meet intelligence, possibilities become limitless, dreams are transformed into reality, and technology shapes a brighter tomorrow.
          </p>

          {/* Social Media Handles */}
          <div className="handles">
            <a href="https://web.facebook.com/ayo.akeni/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com/ayoakeni/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://x.com/ayoakeni_edits" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://linkedin.com/in/ayowunmi-akeni-489999289" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="imghome">
          <img src={img} alt="Ayowunmi Akeni" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;

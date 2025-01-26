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
            <strong>A</strong>i Submission Assignments Hover all best
          </h2>
          <p>
            I make and edit short videos 📷 (Social media editor) Front end developer ¤ web developer 👨‍💻 Dm for your website building.
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

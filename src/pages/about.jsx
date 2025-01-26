import React from "react";
import img from "../assets/images/me.jpg"

const About = () => {
  const education = [
    {
      date: "2018 - 2021",
      title: "Computer Science",
      institution: "Lagos State University of Science and Technology",
      description: "Computer science entails the study of computation, information, and automation.",
    },
    {
      date: "2024 - Current",
      title: "Computer Science",
      institution: "Yaba College of Technology",
      description: "Computer science entails the study of computation, information, and automation.",
    },
  ];

  const experience = [
    {
      date: "2023 - Current",
      title: "QA Engineer",
      institution: "Teeya Cooperation",
      description:
        "I assess functionality, quality, and usability to ensure products meet standards and deliver a positive user experience.",
    },
    {
      date: "2023 - Current",
      title: "Frontend Developer",
      institution: "Teeya Cooperation",
      description:
        "I build out the user interface for functionality, ensuring a user-friendly and navigable experience.",
    },
  ];

  return (
    <div className="vg-page page-about">
      {/* About Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 py-3">
            <div className="img-place">
              <img src={img} alt="Ayoakeni" />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <h1 className="fw-light text-center text-md-left">Ayowunmi Akeni</h1>
            <h5 className="fg-theme mb-3 text-center text-md-left">
              Frontend Developer, Video Editing & Product Testing
            </h5>
            <p className="text-muted">
              Hello. I'm Ayoakeni, a frontend developer, a video editor, and a quality assurance officer. I have a great passion for tech.
            </p>
            <ul className="theme-list">
              <li><b>From:</b> Ekiti, Nigeria.</li>
              <li><b>Lives In:</b> Lagos, Nigeria.</li>
              <li><b>Department:</b> Computer Science</li>
              <li><b>Matric:</b> F/HD/23/3210009</li>
              <li><b>Level:</b> Hnd1</li>
              <li><b>Gender:</b> Male</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container py-5">
        <h1 className="text-center fw-normal">My Skills</h1>
        <div className="row py-3">
          <div className="col-md-6">
            <div className="px-lg-3">
              <h4>Coding & Technical Skills</h4>
              {[
                { skill: "JavaScript", value: 75 },
                { skill: "HTML", value: 95 },
                { skill: "CSS", value: 90 },
                { skill: "React.js", value: 90 },
                { skill: "Product Testing", value: 85 },
              ].map(({ skill, value }, idx) => (
                <div className="progress-wrapper" key={idx}>
                  <span className="caption">{skill}</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${value}%` }}
                      aria-valuenow={value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {value}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <div className="px-lg-3">
              <h4>Design Skills</h4>
              <div className="progress-wrapper">
                <span className="caption">Video Editing</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    75%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education and Experience Section */}
      <div className="container pt-5">
        <div className="row">
          {/* Education */}
          <div className="col-md-6">
            <h2 className="fw-normal">Education</h2>
            <ul className="timeline mt-4 pr-md-5">
              {education.map((item, idx) => (
                <li key={idx}>
                  <div className="title">{item.date}</div>
                  <div className="details">
                    <h5>{item.title}</h5>
                    <small className="fg-theme">{item.institution}</small>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div className="col-md-6">
            <h2 className="fw-normal">Experience</h2>
            <ul className="timeline mt-4 pr-md-5">
              {experience.map((item, idx) => (
                <li key={idx}>
                  <div className="title">{item.date}</div>
                  <div className="details">
                    <h5>{item.title}</h5>
                    <small className="fg-theme">{item.institution}</small>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

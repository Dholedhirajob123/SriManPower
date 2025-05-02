import React from "react";
// import aboutImg from "../images/about.jpg";
// import teamImg from "../images/team.jpg";
// import missionImg from "../images/mission.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      {/* Hero Banner */}
      <div className="about-hero">
        <div className="container">
          <h1>About Sri Man Power</h1>
          <p>Your trusted partner in workforce solutions since 2010</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        {/* Company Overview */}
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, Sri Man Power has grown from a local recruitment agency to a
              comprehensive workforce solutions provider serving clients across multiple
              industries. With our headquarters in Chennai, we've successfully placed over
              10,000 professionals in rewarding careers.
            </p>
            <p>
              Our journey has been guided by a simple principle: to bridge the gap between
              talented professionals and organizations that need their skills. Today, we're
              proud to be recognized as one of the most reliable manpower providers in
              Southern India.
            </p>
          </div>
          <div className="about-image">
            {/* <img src={aboutImg} alt="Sri Man Power office" /> */}
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="mission-vision">
          <div className="mission-card">
            {/* <img src={missionImg} alt="Our Mission" /> */}
            <div className="card-content">
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional workforce solutions through innovative recruitment
                strategies, while maintaining the highest standards of integrity and
                professionalism.
              </p>
            </div>
          </div>
          <div className="vision-card">
            <div className="card-content">
              <h3>Our Vision</h3>
              <p>
                To become the most trusted human capital partner for businesses across
                India by 2025, recognized for our commitment to quality and ethical
                practices.
              </p>
            </div>
            {/* <img src={teamImg} alt="Our Vision" /> */}
          </div>
        </div>

        {/* Core Values */}
        <div className="core-values">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Integrity</h3>
              <p>We conduct business with honesty and transparency</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>People First</h3>
              <p>Our candidates and clients are at the heart of everything we do</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>We constantly evolve to meet changing workforce needs</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>Excellence</h3>
              <p>We strive for the highest quality in all our services</p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="leadership">
          <h2>Our Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Rajesh Kumar</h3>
              <p>Founder & CEO</p>
              <p>20+ years in HR solutions</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Priya Sharma</h3>
              <p>Director - Operations</p>
              <p>Specializes in workforce management</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Vikram Patel</h3>
              <p>Head - Recruitment</p>
              <p>Expert in talent acquisition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
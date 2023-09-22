import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-row">
          <img src="res-logo.png" alt="icon" className="navbar-logo" />
          <div className="navbar-logo-text">Tasty Treat</div>
          <div className="navbar-logo-text-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad
            et est, fugiat repudiandae neque illo delectus commodi magnam
          </div>
        </div>
        <div className="footer-row" style={{ marginLeft: "-10px" }}>
          <div className="navbar-logo-text">Delivery Time</div>
          <div className="footer-text">
            <p style={{ marginBottom: "5px" }}>Sunday - Thursday</p>
            <p style={{ marginTop: "5px" }}>10:00am - 11:00pm</p>
          </div>
          <div className="footer-text">
            <p style={{ marginBottom: "5px" }}>Friday - Saturday</p>
            <p style={{ marginTop: "5px" }}>Off Day</p>
          </div>
        </div>

        <div className="footer-row" style={{ marginLeft: "-250px" }}>
          <div className="navbar-logo-text">Contact</div>
          <div className="footer-text" style={{ marginBottom: "20px" }}>
            Location: ZindaBazar, Sylhet-3100, Bangladesh
          </div>
          <div className="footer-text" style={{ marginBottom: "10px" }}>
            Phone: 1234567892
          </div>
          <div className="footer-text">Email : example@gmail.com</div>
        </div>

        <div className="footer-row">
          <div className="navbar-logo-text">Newsletter</div>
          <div className="footer-text" style={{ marginBottom: "20px" }}>
            Subscribe our newsletter
          </div>
          <div className="subscribe-input">
            <input
              type="text"
              placeholder="Enter Email here"
              style={{
                backgroundColor: "transparent",
                border: "2px solid #333",
                borderRadius: "5px",
                padding: "10px",
                marginRight: "10px",
                flex: "1",
                color: "white",
              }}
            />
            <button
              style={{
                background: "#dd2127",
                borderRadius: "5px",
                padding: "10px",
                marginRight: "10px",
                flex: "1",
                color: "white",
              }}
            >
              Subscribe
            </button>
          </div>
          <div className="footer-social">
            <div className="social-links">
              <div className="footer-text">Follow :</div>
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/facebook-new.png"
                alt="facebook-new"
              />
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="linkedin"
              />
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/youtube-play.png"
                alt="youtube-play"
              />
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/github--v1.png"
                alt="github--v1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-column">
        <p>
          Copyright - 2022, website made by Authiselvi Meenakshi Ganesan. All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

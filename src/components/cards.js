import React from "react";
import { Link } from "react-router-dom";
import reliveLogo from "../assets/tv.svg";
import relivePreview from "../assets/cta0.png";
import aboutLogo from "../assets/lamp.svg";
import aboutPreview from "../assets/aboutHero.png";
import "./cards.css";

const AffiliateCards = () => {
  return (
    <div className="affiliate-card-grid">
      <a
        className="affiliate-card affiliate-card--relive"
        href="https://www.youtube.com/@relivefreaksofnature/featured"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="affiliate-card__content">
          <img
            src={relivePreview}
            alt="Relive by Freaks of Nature"
            className="affiliate-card__logo"
            loading="lazy"
          />
          <p className="affiliate-card__description">
            Replay your favorite DJ sets anytime on our exclusive platform.
          </p>
        </div>
        {/* <div className="affiliate-card__media"> */}
        <div className="about-content-img">

          <img
            src={reliveLogo}
            alt="Relive platform preview"
            // className="affiliate-card__media-image"
            className="affiliate-card__logo-about"
            loading="lazy"
          />
        </div>
      </a>

      <Link to="/about" className="affiliate-card affiliate-card--about">
        <div className="affiliate-card__content about-content">
          <div className="about-content-text">
            <h3 className="affiliate-card__title">About Us</h3>
            <p className="affiliate-card__description">
              Would you like to know more about Freaks of Nature?
            </p>
          </div>
          <div className="about-content-img">
            <img
              src={aboutLogo}
              alt="About Freaks of Nature"
              className="affiliate-card__logo-about"
              loading="lazy"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AffiliateCards;

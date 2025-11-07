import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaBars, FaTimes, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import logo from '../assets/freakslogo.png';
import { Link } from 'react-router-dom';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState('Day Pass'); // Default active sub-item
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  // Update isMobile state on window resize
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const toggleDropdown = (event, linkName) => {
    if (isMobile) {
      event.preventDefault();
      // event.stopPropagation();
      setActiveDropdown((prev) => (prev === linkName ? null : linkName));
    }
  };
const handleDropdownLinkClick = (hash) => {
  handleLinkClick(); // Close dropdown

  // If already on Event or About page, manually update hash
  if (window.location.pathname === '/Event' || window.location.pathname === '/about') {
    // Force hash change
    window.location.hash = hash;
  }
};
  const handleMouseEnter = (linkName) => {
    if (!isMobile) {
      setActiveDropdown(linkName);
    }
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    if (isMobile) {
      setIsNavOpen(false);
    }
  };

  const handleLogoClick = () => {
    setActiveDropdown(null);

    // Always scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleMainNavLinkClick = () => {
    setActiveDropdown(null);
    // Scroll to top when clicking main nav links
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
    if (isMobile) {
      setIsNavOpen(false);
    }
  };

  return (
    <>
      <Navbar expand="lg" className="navbar-custom sticky-top">
        <Navbar.Brand as={Link} to="/" onClick={handleLogoClick}>
          <img src={logo} alt="Freaks of Nature" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav}>
          {isNavOpen ? <FaTimes className="close-icon" /> : <FaBars className="hamburger-icon" />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className={isNavOpen ? 'show' : ''}>
          <Nav className="navbar-center">
            {/* Freakyard Link */}
<div
  className={`nav-item-wrapper ${activeDropdown === 'Freakyard' ? 'active' : ''}`}
  onMouseEnter={() => handleMouseEnter('Freakyard')}
  onMouseLeave={handleMouseLeave}
>
  <Nav.Link
    as={Link}
    to="/Event"
    className={`nav-link ${activeDropdown === 'Freakyard' ? 'active-link' : ''}`}
    onClick={(event) => {
      toggleDropdown(event, 'Freakyard');
      handleMainNavLinkClick();
    }}
  >
    Freakyard
    <p className="dropdown-icon">
      <FaChevronDown />
    </p>
  </Nav.Link>
  {activeDropdown === 'Freakyard' && (
    <div className="dropdown-freakyard">
      {/* Day Pass Link */}
      <div
        className={`dropdown-item ${activeSubItem === 'Day Pass' ? 'active' : ''}`}
        onMouseEnter={() => setActiveSubItem('Day Pass')}
        onMouseLeave={() => setActiveSubItem(null)} 
      >
        <Link
          to="/Event#day-pass"
          className="dropdown-link"
          onClick={() => handleDropdownLinkClick('#day-pass')}
        >
          Day Pass
          {activeSubItem === 'Day Pass' && <FaArrowRight className="right-arrow" />}
        </Link>

        {/* Show the description for Day Pass if it's the active one */}
        {activeSubItem === 'Day Pass' && (
          <div className="dropdown-description day">
            <p className="description-title">Day Pass</p>
            <p className="description-subtitle">Access the full festival experience</p>
            <p className="description-subtitle">for a single day with amazing</p>
            <p className="description-subtitle">artists, food, and entertainment.</p>
            <p className="description-subtitle">Choose your perfect day!</p>
          </div>
        )}
      </div>

      {/* Weekly Pass Link */}
      <div
        className={`dropdown-item ${activeSubItem === 'Weekly Pass' ? 'active' : ''}`}
        onMouseEnter={() => setActiveSubItem('Weekly Pass')}
        onMouseLeave={() => setActiveSubItem(null)} 
      >
        <Link
          to="/Event#multi-day-pass"
          className="dropdown-link"
          onClick={() => handleDropdownLinkClick('#multi-day-pass')}
        >
          Weekly Pass
          {activeSubItem === 'Weekly Pass' && <FaArrowRight className="right-arrow" />}
        </Link>

        {/* Show the description for Weekly Pass if it's the active one */}
        {activeSubItem === 'Weekly Pass' && (
          <div className="dropdown-description week">
            <p className="description-title">Weekly Pass</p>
            <p className="description-subtitle">Get unlimited access to all</p>
            <p className="description-subtitle">festival days with our multi-day</p>
            <p className="description-subtitle">pass. Experience everything</p>
            <p className="description-subtitle">Freakyard has to offer!</p>
          </div>
        )}
      </div>

      {/* DJ Comp Link */}
      <div
        className={`dropdown-item ${activeSubItem === 'DJ Comp' ? 'active' : ''}`}
        onMouseEnter={() => setActiveSubItem('DJ Comp')}
        onMouseLeave={() => setActiveSubItem(null)}
      >
        <Link
          to="/Event#dj-comp"
          className="dropdown-link"
          onClick={() => handleDropdownLinkClick('#dj-comp')}
        >
          DJ Comp
          {activeSubItem === 'DJ Comp' && <FaArrowRight className="right-arrow" />}
        </Link>

        {/* Show the description for DJ Comp if it's the active one */}
        {activeSubItem === 'DJ Comp' && (
          <div className="dropdown-description djcomp">
            <p className="description-title">DJ Competition</p>
            <p className="description-subtitle">Join our exciting DJ competition</p>
            <p className="description-subtitle">and showcase your talent.</p>
            <p className="description-subtitle">Compete with the best and</p>
            <p className="description-subtitle">win amazing prizes!</p>
          </div>
        )}
      </div>

      {/* Affiliate Link */}
      <div
        className={`dropdown-item ${activeSubItem === 'Affiliate' ? 'active' : ''}`}
        onMouseEnter={() => setActiveSubItem('Affiliate')}
        onMouseLeave={() => setActiveSubItem(null)}
      >
        <Link
          to="/Event#affiliate"
          className="dropdown-link"
          onClick={() => handleDropdownLinkClick('#affiliate')}
        >
          Affiliate
          {activeSubItem === 'Affiliate' && <FaArrowRight className="right-arrow" />}
        </Link>

        {/* Show the description for Affiliate if it's the active one */}
        {activeSubItem === 'Affiliate' && (
          <div className="dropdown-description affiliate0">
            <p className="description-title">Affiliate Program</p>
            <p className="description-subtitle">Partner with Freakyard and</p>
            <p className="description-subtitle">earn rewards by promoting</p>
            <p className="description-subtitle">our events to your audience.</p>
            <p className="description-subtitle">Join our network today!</p>
          </div>
        )}
      </div>

      {/* FAQ Link */}
      <div
        className={`dropdown-item ${activeSubItem === 'FAQ' ? 'active' : ''}`}
        onMouseEnter={() => setActiveSubItem('FAQ')}
        onMouseLeave={() => setActiveSubItem(null)} 
      >
        <Link
          to="/Event#faq"
          className="dropdown-link"
          onClick={() => handleDropdownLinkClick('#faq')}
        >
          FAQ
          {activeSubItem === 'FAQ' && <FaArrowRight className="right-arrow" />}
        </Link>

        {/* Show the description for FAQ if it's the active one */}
        {activeSubItem === 'FAQ' && (
          <div className="dropdown-description faqs">
            <p className="description-title">FAQ</p>
            <p className="description-subtitle">Find answers to commonly</p>
            <p className="description-subtitle">asked questions about tickets,</p>
            <p className="description-subtitle">the event, and policies.</p>
            <p className="description-subtitle">We're here to help!</p>
          </div>
        )}
      </div>
    </div>
  )}
</div>
            <div
              className={`nav-item-wrapper ${activeDropdown === 'Relive' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('Relive')}
              onMouseLeave={handleMouseLeave}
            >
              <Nav.Link
                as={Link}
                to="/relive"
                className={`nav-link ${activeDropdown === 'Relive' ? 'active-link' : ''}`}
                onClick={(event) => {
                  toggleDropdown(event, 'Relive');
                  handleMainNavLinkClick();
                }}
              >
                Relive
                <span className="dropdown-icon">
                  <FaChevronDown />
                </span>
              </Nav.Link>
              {activeDropdown === 'Relive' && (
                <div className="dropdown-relive">
                  <div className="dropdown-item">
                    <div className="dropdown-link-relive">
                       RELIVE
                        <p>Plan your ideal schedule, share top </p>
                        <p>artists with friends, and explore  </p>
                        <p>amazing food and entertainment.    </p>
                        <p>This app has everything you need!</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* About Us Link */}
            <div
              className={`nav-item-wrapper ${activeDropdown === 'About Us' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('About Us')}
              onMouseLeave={handleMouseLeave}
            >
              <Nav.Link
                as={Link}
                to="/about"
                className={`nav-link ${activeDropdown === 'About Us' ? 'active-link' : ''}`}
                onClick={(event) => {
                  toggleDropdown(event, 'About Us');
                  handleMainNavLinkClick();
                }}
              >
                About Us
                <span className="dropdown-icon">
                  <FaChevronDown />
                </span>
              </Nav.Link>
              {activeDropdown === 'About Us' && (
                <div className="dropdown-about">
                  {/* About Us Link */}
                  <div
                    className={`dropdown-item ${activeSubItem === 'About Us' ? 'active' : ''}`}
                    onMouseEnter={() => setActiveSubItem('About Us')}
                    onMouseLeave={() => setActiveSubItem(null)}
                  >
                    <Link
                      to="/about#about-us"
                      className="dropdown-link"
                      onClick={() => handleDropdownLinkClick('#about-us')}
                    >
                      About Us
                      {activeSubItem === 'About Us' && <FaArrowRight className="right-arrow" />}
                    </Link>

                    {/* Show the description for About Us if it's the active one */}
                    {activeSubItem === 'About Us' && (
                      <div className="dropdown-description ab">
                        <p className="description-title">About Us</p>
                        <p className="description-subtitle">Plan your ideal schedule, </p>
                        <p className="description-subtitle">share top artists with friends, </p>
                        <p className="description-subtitle">and explore amazing food and </p>
                        <p className="description-subtitle">entertainment. This app has </p>
                        <p className="description-subtitle">everything you need!</p>
                      </div>
                    )}
                 </div>

                 {/* Freak Squad Link */}
                 <div
                    className={`dropdown-item ${activeSubItem === 'Freak Squad' ? 'active' : ''}`}
                    onMouseEnter={() => setActiveSubItem('Freak Squad')}
                    onMouseLeave={() => setActiveSubItem(null)}
                  >
                    <Link
                      to="/about#freak-squad"
                      className="dropdown-link"
                      onClick={() => handleDropdownLinkClick('#freak-squad')}
                    >
                      Freak Squad
                      {activeSubItem === 'Freak Squad' && <FaArrowRight className="right-arrow" />}
                    </Link>

                    {/* Show the description for Freak Squad if it's the active one */}
                    {activeSubItem === 'Freak Squad' && (
                      <div className="dropdown-description freak-squad">
                        <p className="description-title">Freak Squad</p>
                        <p className="description-subtitle">Plan your ideal schedule, </p>
                        <p className="description-subtitle">share top artists with friends, </p>
                        <p className="description-subtitle">and explore amazing food and </p>
                        <p className="description-subtitle">entertainment. This app has </p>
                        <p className="description-subtitle">everything you need!</p>
                      </div>
                    )}
                 </div>

                 {/* Timeline Link */}
                 <div
                    className={`dropdown-item ${activeSubItem === 'Timeline' ? 'active' : ''}`}
                    onMouseEnter={() => setActiveSubItem('Timeline')}
                    onMouseLeave={() => setActiveSubItem(null)}
                  >
                    <Link
                      to="/about#timeline"
                      className="dropdown-link"
                      onClick={() => handleDropdownLinkClick('#timeline')}
                    >
                      Timeline
                      {activeSubItem === 'Timeline' && <FaArrowRight className="right-arrow" />}
                    </Link>

                    {/* Show the description for Timeline if it's the active one */}
                    {activeSubItem === 'Timeline' && (
                      <div className="dropdown-description timeline">
                        <p className="description-title">Timeline</p>
                        <p className="description-subtitle">Plan your ideal schedule, </p>
                        <p className="description-subtitle">share top artists with friends, </p>
                        <p className="description-subtitle">and explore amazing food and </p>
                        <p className="description-subtitle">entertainment. This app has </p>
                        <p className="description-subtitle">everything you need!</p>
                      </div>
                    )}
                 </div>
                  
                  {/* Partner With Us Link */}
                 <div
                    className={`dropdown-item ${activeSubItem === 'Partner With Us' ? 'active' : ''}`}
                    onMouseEnter={() => setActiveSubItem('Partner With Us')}
                    onMouseLeave={() => setActiveSubItem(null)}
                  >
                    <Link
                      to="/about#partner-with-us"
                      className="dropdown-link"
                      onClick={() => handleDropdownLinkClick('#partner-with-us')}
                    >
                      Partner With Us
                      {activeSubItem === 'Partner With Us' && <FaArrowRight className="right-arrow" />}
                    </Link>

                    {/* Show the description for Partner With Us if it's the active one */}
                    {activeSubItem === 'Partner With Us' && (
                      <div className="dropdown-description partner">
                        <p className="description-title">Partner With Us</p>
                        <p className="description-subtitle">Plan your ideal schedule, </p>
                        <p className="description-subtitle">share top artists with friends, </p>
                        <p className="description-subtitle">and explore amazing food and </p>
                        <p className="description-subtitle">entertainment. This app has </p>
                        <p className="description-subtitle">everything you need!</p>
                      </div>
                    )}
                 </div>
                  
                  {/* DJ Comp Link */}
                  <div
                    className={`dropdown-item ${activeSubItem === 'DJ Comp' ? 'active' : ''}`}
                    onMouseEnter={() => setActiveSubItem('DJ Comp')}
                    onMouseLeave={() => setActiveSubItem(null)}
                  >
                    <Link
                      to="/about#about-dj-comp"
                      className="dropdown-link"
                      onClick={() => handleDropdownLinkClick('#about-dj-comp')}
                    >
                      DJ Comp
                      {activeSubItem === 'DJ Comp' && <FaArrowRight className="right-arrow" />}
                    </Link>

                    {/* Show the description for DJ Comp if it's the active one */}
                    {activeSubItem === 'DJ Comp' && (
                      <div className="dropdown-description djcomp1">
                        <p className="description-title">DJ Comp</p>
                        <p className="description-subtitle">Plan your ideal schedule, </p>
                        <p className="description-subtitle">share top artists with friends, </p>
                        <p className="description-subtitle">and explore amazing food and </p>
                        <p className="description-subtitle">entertainment. This app has </p>
                        <p className="description-subtitle">everything you need!</p>
                      </div>
                    )}
                 </div>

                  {/* Affiliate Link */}
                 <div
                    className={`dropdown-item ${activeSubItem === 'Affiliate' ? 'active' : ''}`}
                    onMouseEnter={() => setActiveSubItem('Affiliate')}
                    onMouseLeave={() => setActiveSubItem(null)}
                  >
                    <Link
                      to="/about#about-dj-comp"
                      className="dropdown-link"
                      onClick={() => handleDropdownLinkClick('#about-dj-comp')}
                    >
                      Affiliate
                      {activeSubItem === 'Affiliate' && <FaArrowRight className="right-arrow" />}
                    </Link>

                    {/* Show the description for Affiliate if it's the active one */}
                    {activeSubItem === 'Affiliate' && (
                      <div className="dropdown-description affiliate01">
                        <p className="description-title">Affiliate</p>
                        <p className="description-subtitle">Plan your ideal schedule, </p>
                        <p className="description-subtitle">share top artists with friends, </p>
                        <p className="description-subtitle">and explore amazing food and </p>
                        <p className="description-subtitle">entertainment. This app has </p>
                        <p className="description-subtitle">everything you need!</p>
                      </div>
                    )}
                 </div>
                </div>
              )}
            </div>

            {/* Blog Link */}
            <div
              className={`nav-item-wrapper ${activeDropdown === 'Blog' ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('Blog')}
              onMouseLeave={handleMouseLeave}
            >
              <Nav.Link
                as={Link}
                to="/blog"
                className={`nav-link ${activeDropdown === 'Blog' ? 'active-link' : ''}`}
                onClick={(event) => {
                  toggleDropdown(event, 'Blog');
                  handleMainNavLinkClick();
                }}
              >
                Blog
                <p className="dropdown-icon">
                  <FaChevronDown />
                </p>
              </Nav.Link>
              {activeDropdown === 'Blog' && (
                <div className="dropdown-blog">
                   <div className="dropdown-item">
                    <div className="dropdown-link-relive">
                       BLOG
                        <p>Plan your ideal schedule, share top </p>
                        <p>artists with friends, and explore  </p>
                        <p>amazing food and entertainment.    </p>
                        <p>This app has everything you need!</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
        <div className="navbar-buttons">
           <Link to="/Event#tickets" className="b1">Buy Tickets</Link>
          <button className="b2">Learn More</button>
        </div>
      </Navbar>

      <style jsx>{`
        .navbar-custom {
          background: linear-gradient(360deg, #00000000, #000000);
          display: flex;
          justify-content: space-between;
          height: 124px;
          align-items: center;
        }

        .sticky-top {
          position: sticky;
          top: 0;
          z-index: 1020;
        }

        .navbar-logo {
          width: 124px;
          height: auto;
          margin-left: 50px;
        }

        .nav-link{
        padding: 18px 24px !important;
        }

        .navbar-nav .nav-link:hover {
          color: #FFBF00 !important; 
        }

        .navbar-center {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-grow: 1;
          margin-left: 120px;
        }

        .navbar-buttons {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-right: 50px;
        }

        .navbar-nav .nav-link {
          color: #fff !important;
          font-size: 20px;
          font-weight: 500;
          margin: 0;
          transition: color 0.3s ease;
          text-transform: uppercase;
        }

        .b1 {
          background-color: #ED196F;
          border-radius: 10px;
          border: 1px solid #000;
          text-transform: uppercase;
          padding: 10px 20px;
          color: white;
          font-size: 20px;
          font-weight: bold;
          box-shadow: 5px 5px 0px 0px #000;
        }

        .b2 {
          background-color: #FFBF00;
          border-radius: 10px;
          border: 1px solid #000;
          text-transform: uppercase;
          padding: 10px 20px;
          font-size: 20px;
          font-weight: bold;
          box-shadow: 5px 5px 0px 0px #000;
        }

        .dropdown-freakyard {
          position: absolute;
          top: 100%;
          left: 0%;
          background-color: rgb(0 0 0 / 80%);
          border-radius: 0px 20px 20px 20px;
          padding: 10px 24px;
          width: 562px;
          height: 250px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          z-index: 1050;
        }

        .dropdown-relive {
          position: absolute;
          top: 100%;
          left: -176px;
          background-color: rgb(0 0 0 / 80%);
          border-radius: 20px;
          padding: 50px 40px;
          width: 562px;
          height: 250px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          z-index: 1050;
        }

        .dropdown-about {
          position: absolute;
          top: 100%;
          left: -279px;
          background-color: rgb(0 0 0 / 80%);
          border-radius: 20px;
          padding: 10px 20px;
          width: 562px;
          height: 300px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          z-index: 1050;
        }

        .dropdown-blog {
          position: absolute;
          top: 100%;
          right: 0px;
          background-color: rgb(0 0 0 / 80%);
          border-radius: 20px 0px 20px 20px;
          padding: 50px 40px;
          width: 562px;
          height: 250px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          z-index: 1050;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          padding: 10px 0px 4px;
          position: relative;
          cursor: pointer;
          width: 154px;
          border-bottom: 2px solid #464646;
          color: #464646 !important;
        }

        .b{
          border-bottom: 0px !important;
        }

        .dropdown-link {
          color: #fff;
          font-size: 20px;
          font-weight: 500;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        .dropdown-link-relive{
          color: #fff;
          font-size: 27.45px;
          font-weight: bold;
          width: 134px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .dropdown-link-relive p{
          font-size: 14px;
          font-weight: normal;
          margin-bottom: 0;
          line-height: 18px;
        }

        .right-arrow {
          margin-left: 10px;
          color: #fff;
          font-size: 14px;
        }

        a{
        text-decoration: none;
        }

        .dropdown-description {
          display: flex;
          flex-direction: column;
          width: 273px;
          color: #fff;
          padding: 10px;
          animation: fadeIn 0.3s ease-in-out;
          position: absolute;
          left: 152%;
        }

          .day{
            top: 110%;
          }
          .week{
            top: 8%;
          }
          .djcomp{
            top: -98%;
          }
          .affiliate0{
            top: -200%;
          }
          .faqs {
            top: -300%;
          }    
           
          .ab{
            top: 142%;
          }
          .freak-squad{
            top: 50%;
          }
          .timeline{
            top: -58%;
          }
          .partner{
            top: -164%;
          }
          .djcomp1{
            top: -272%;
          }
          .affiliate01{
            top: -387%;
          }   


          

        .description-title {
          font-size: 27.45px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .description-subtitle {
          font-size: 14px;
          font-weight: normal;
          margin-bottom: 0;
          line-height: 16px;
        }

        .nav-item-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .nav-item-wrapper.active .nav-link {
          background-color: rgb(0 0 0 / 80%);
          color: #ffbf00;
          border-radius: 20px 20px 0 0;
          z-index: 1000;
          transition: all 0.3s ease-in-out;
        }

        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /*----------------Tab Responsive ------------*/
        @media (max-width: 1024px) {

          .navbar-logo {
            margin-left: 26px;
          }
          .navbar-custom {
            padding: 0px 0px;
          }
          .navbar-center {
            margin-left: 0px;
          }

          .navbar-nav .nav-link {
            font-size: 16px;
            margin: 10px 0;
          }
            .nav-link {
             padding: 0px 14px !important; 
            }

          .navbar-buttons {
            margin-right: 26px;
            gap: 10px;
          }  
        }

        @media (max-width: 880px) {
          .sticky-top {
            position: relative;
          }

          .navbar-toggler-icon {
            background-color: white;
          }

          .navbar-collapse {
            justify-content: flex-start;
            flex-basis: 0;
            flex-grow: 0;
            position: absolute;
            top: 0px;
            left: 0;
            width: 100%;
            background-color: #000;
            padding: 130px 40px 40px;
            border-radius: 0 0 20px 20px;
            /* max-height: 80vh;
            overflow-y: auto; */
          }

          .navbar-toggler {
            order: -1;
            margin-left: 10px;
            border: none;
            position: relative;
            z-index: 1;
          }

          .navbar-nav {
            align-items: flex-start;
            width: 100%;
          }

          .b2 {
            display: none;
          }

          .navbar-logo {
            margin-left: 80px;
            position: relative;
            z-index: 1;
          }

          .navbar-buttons {
            margin-right: 20px;
            position: relative;
            z-index: 1;
          }

          .hamburger-icon, .close-icon {
            font-size: 30px;
            color: white;
            position: relative;
            z-index: 1;
          }

          .hamburger-icon:hover, .close-icon:hover {
            color: #FFBF00;
          }

          .nav-item-wrapper {
            position: relative;
            width: 100%;
          }

          .navbar-center .dropdown-icon {
            display: block;
          }

          .nav-link {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 !important;
          }

          .navbar-nav .nav-link {
            font-size: 24px;
            border-bottom: 2px solid #FFFFFF38;
            width: 100%;
            line-height: 50px;
          }

          /* Mobile dropdown styles */
          .dropdown-freakyard,
          .dropdown-relive,
          .dropdown-about,
          .dropdown-blog {
            position: static;
            width: 100%;
            height: auto;
            border-radius: 0;
            padding: 10px 20px;
            margin-bottom: 10px;
            background-color: rgba(0, 0, 0, 0.5);
          }

          .dropdown-item {
            width: 100%;
            padding: 10px 0;
            border-bottom: 1px solid #464646;
          }

          .dropdown-link {
            font-size: 18px;
          }

          .dropdown-link-relive {
            font-size: 20px;
            width: 100%;
          }

          .dropdown-link-relive p {
            font-size: 14px;
          }

          .dropdown-description {
            display: none;
          }

          .right-arrow {
            display: none;
          }

          .nav-item-wrapper.active .nav-link {
            border-radius: 0;
            background-color: transparent;
          }

          .dropdown-icon {
            transition: transform 0.3s ease;
          }

          .nav-item-wrapper.active .dropdown-icon {
            transform: rotate(180deg);
          }
        }

        @media (max-width: 468px) {
          .navbar-logo {
            width: 91px;
            margin-left: 40px;
          }

          .navbar-custom {
            padding: 0px 5px;
          }

          .navbar-toggler {
            margin-left: 0px;
          }

          .b1 {
            padding: 5px 12px;
            font-size: 14px;
            border-radius: 5px;
            box-shadow: 2.46px 2.46px 0px 0px #000;
          }

          .navbar-collapse {
            padding: 130px 20px 30px;
          }

          .dropdown-description{
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaBars, FaTimes, FaChevronDown, FaArrowRight } from "react-icons/fa";
import logo from "../assets/freakslogo.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState("Day Pass"); // Default active sub-item
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close navbar on route change
  useEffect(() => {
    setIsNavOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    // Close any open dropdowns when toggling nav
    if (isNavOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (event, linkName) => {
    if (isMobile) {
      event.preventDefault();
      // event.stopPropagation();
      setActiveDropdown((prev) => (prev === linkName ? null : linkName));
    }
  };
  const handleDropdownLinkClick = (hash, event) => {
    // Close dropdown first
    setActiveDropdown(null);
    
    // Close mobile menu immediately (no delay)
    setIsNavOpen(false);

    // Extract hash from the link if not provided
    const linkElement = event?.currentTarget?.closest('a');
    const href = linkElement?.getAttribute('href') || '';
    const targetHash = hash || (href.includes('#') ? '#' + href.split('#')[1] : '');
    
    // Normalize paths for comparison (remove trailing slashes)
    // Note: React Router paths are case-sensitive, so we compare as-is
    const currentPath = window.location.pathname.replace(/\/$/, '');
    let targetPath = href.split('#')[0] || currentPath;
    // Handle relative paths (starting with /)
    if (targetPath.startsWith('/')) {
      targetPath = targetPath.replace(/\/$/, '');
    } else {
      // If relative path, use current path
      targetPath = currentPath;
    }
    
    if (targetPath === currentPath && targetHash) {
      // Same page navigation - prevent default and handle scroll
      if (event) {
        event.preventDefault();
      }
      
      // Update hash
      const hashValue = targetHash.replace('#', '');
      window.location.hash = hashValue;
      
      // Calculate header height properly
      // Desktop: 124px header
      // Mobile (≤880px): 124px header + countdown banner offset (54px) = 178px total
      // Extra small (≤468px): 124px header + countdown banner offset (40px) = 164px total
      const getHeaderOffset = () => {
        const width = window.innerWidth;
        if (width <= 468) {
          return 164; // 124px header + 40px banner offset
        } else if (width <= 880) {
          return 178; // 124px header + 54px banner offset
        } else {
          return 124; // Just header height on desktop
        }
      };
      
      // Handle special cases for tickets navigation
      // These hashes don't have direct element IDs, so scroll to tickets section instead
      if (hashValue === "tickets-multi-day-pass" || hashValue === "tickets-day-pass") {
        // Scroll to tickets section
        setTimeout(() => {
          const ticketsElement = document.getElementById("tickets");
          if (ticketsElement) {
            const headerOffset = getHeaderOffset();
            const elementPosition = ticketsElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          } else {
            // If tickets section not found, try again after a longer delay
            setTimeout(() => {
              const retryTicketsElement = document.getElementById("tickets");
              if (retryTicketsElement) {
                const headerOffset = getHeaderOffset();
                const elementPosition = retryTicketsElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }, 300);
          }
        }, 150);
      } else {
        // Scroll to element after a short delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(hashValue);
          if (element) {
            const headerOffset = getHeaderOffset();
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          } else {
            // If element not found, try again after a longer delay (for dynamic content)
            setTimeout(() => {
              const retryElement = document.getElementById(hashValue);
              if (retryElement) {
                const headerOffset = getHeaderOffset();
                const elementPosition = retryElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }, 300);
          }
        }, 150);
      }
    }
    // If navigating to different page, let React Router Link handle it naturally
  };
  const handleMouseEnter = (linkName) => {
    if (!isMobile) {
      setActiveDropdown(linkName);
    }
  };

  const handleLogoClick = () => {
    setActiveDropdown(null);

    // Always scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const handleMainNavLinkClick = () => {
    setActiveDropdown(null);
    // Scroll to top when clicking main nav links
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
          {isNavOpen ? (
            <FaTimes className="close-icon" />
          ) : (
            <FaBars className="hamburger-icon" />
          )}
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
         in={isNavOpen} //????/
        >
          <Nav className="navbar-center">
            {/* Freakyard Link */}
            <div
              className={`nav-item-wrapper ${
                activeDropdown === "Freakyard" ? "active" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("Freakyard")}
              onMouseLeave={handleMouseLeave}
            >
              <Nav.Link
                as={isMobile ? "div" : Link}
                to={isMobile ? undefined : "/Event"}
                className={`nav-link ${
                  activeDropdown === "Freakyard" ? "active-link" : ""
                }`}
                onClick={(event) => {
                  toggleDropdown(event, "Freakyard");
                  if (!isMobile) {
                    handleMainNavLinkClick();
                  }
                }}
              >
                Freakyard
                <p className="dropdown-icon">
                  <FaChevronDown />
                </p>
              </Nav.Link>
              {activeDropdown === "Freakyard" && (
                <div className="dropdown-freakyard">
                  {/* Day Pass Link */}
                  <div
                    className={`dropdown-item ${
                      activeSubItem === "Day Pass" ? "active" : ""
                    }`}
                    onMouseEnter={() => setActiveSubItem("Day Pass")}
                    onMouseLeave={() => setActiveSubItem(null)}
                  >
                    <Link
                      to={isMobile ? "/Event#day-pass" : "/Event#tickets-day-pass"}
                      className="dropdown-link"
                      onClick={(e) => {
                        if (!isMobile) {
                          // On desktop, navigate to tickets section and set Day Pass tab
                          handleDropdownLinkClick("#tickets-day-pass", e);
                        } else {
                          handleDropdownLinkClick("#day-pass", e);
                        }
                      }}
                    >
                      Day Pass
                      {activeSubItem === "Day Pass" && (
                        <FaArrowRight className="right-arrow" />
                      )}
                    </Link>

                    {/* Show the description for Day Pass if it's the active one */}
                    {activeSubItem === "Day Pass" && (
                      <div className="dropdown-description day">
                        <p className="description-title">Day Pass</p>
                        <p className="description-subtitle">
                          Access the full festival experience
                        </p>
                        <p className="description-subtitle">
                          for a single day with amazing
                        </p>
                        <p className="description-subtitle">
                          artists, food, and entertainment.
                        </p>
                        <p className="description-subtitle">
                          Choose your perfect day!
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Weekly Pass Link */}
                  <div
                    className={`dropdown-item ${
                      activeSubItem === "Weekly Pass" ? "active" : ""
                    }`}
                    onMouseEnter={() => setActiveSubItem("Weekly Pass")}
                    onMouseLeave={() => setActiveSubItem(null)}
                  >
                    <Link
                      to={isMobile ? "/Event#multi-day-pass" : "/Event#tickets-multi-day-pass"}
                      className="dropdown-link"
                      onClick={(e) => {
                        if (!isMobile) {
                          // On desktop, navigate to tickets section and set Multi-day Pass tab
                          handleDropdownLinkClick("#tickets-multi-day-pass", e);
                        } else {
                          handleDropdownLinkClick("#multi-day-pass", e);
                        }
                      }}
                    >
                      Weekly Pass
                      {activeSubItem === "Weekly Pass" && (
                        <FaArrowRight className="right-arrow" />
                      )}
                    </Link>

                    {/* Show the description for Weekly Pass if it's the active one */}
                    {activeSubItem === "Weekly Pass" && (
                      <div className="dropdown-description week">
                        <p className="description-title">Weekly Pass</p>
                        <p className="description-subtitle">
                          Get unlimited access to all
                        </p>
                        <p className="description-subtitle">
                          festival days with our multi-day
                        </p>
                        <p className="description-subtitle">
                          pass. Experience everything
                        </p>
                        <p className="description-subtitle">
                          Freakyard has to offer!
                        </p>
                      </div>
                    )}
                  </div>

                  {/* DJ Comp Link */}
                  <div
                    className={`dropdown-item ${
                      activeSubItem === "DJ Comp" ? "active" : ""
                    }`}
                    onMouseEnter={() => setActiveSubItem("DJ Comp")}
                    onMouseLeave={() => setActiveSubItem(null)}
                  >
                    <Link
                      to="/Event#dj-comp"
                      className="dropdown-link"
                      onClick={(e) => handleDropdownLinkClick("#dj-comp", e)}
                    >
                      DJ Comp
                      {activeSubItem === "DJ Comp" && (
                        <FaArrowRight className="right-arrow" />
                      )}
                    </Link>

                    {/* Show the description for DJ Comp if it's the active one */}
                    {activeSubItem === "DJ Comp" && (
                      <div className="dropdown-description djcomp">
                        <p className="description-title">DJ Competition</p>
                        <p className="description-subtitle">
                          Join our exciting DJ competition
                        </p>
                        <p className="description-subtitle">
                          and showcase your talent.
                        </p>
                        <p className="description-subtitle">
                          Compete with the best and
                        </p>
                        <p className="description-subtitle">
                          win amazing prizes!
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Affiliate Link */}
                  <div
                    className={`dropdown-item ${
                      activeSubItem === "Affiliate" ? "active" : ""
                    }`}
                    onMouseEnter={() => setActiveSubItem("Affiliate")}
                    onMouseLeave={() => setActiveSubItem(null)}
                  >
                    <Link
                      to="/Event#affiliate"
                      className="dropdown-link"
                      onClick={(e) => handleDropdownLinkClick("#affiliate", e)}
                    >
                      Affiliate
                      {activeSubItem === "Affiliate" && (
                        <FaArrowRight className="right-arrow" />
                      )}
                    </Link>

                    {/* Show the description for Affiliate if it's the active one */}
                    {activeSubItem === "Affiliate" && (
                      <div className="dropdown-description affiliate0">
                        <p className="description-title">Affiliate Program</p>
                        <p className="description-subtitle">
                          Partner with Freakyard and
                        </p>
                        <p className="description-subtitle">
                          earn rewards by promoting
                        </p>
                        <p className="description-subtitle">
                          our events to your audience.
                        </p>
                        <p className="description-subtitle">
                          Join our network today!
                        </p>
                      </div>
                    )}
                  </div>

                  {/* FAQ Link */}
                  <div
                    className={`dropdown-item ${
                      activeSubItem === "FAQ" ? "active" : ""
                    }`}
                    onMouseEnter={() => setActiveSubItem("FAQ")}
                    onMouseLeave={() => setActiveSubItem(null)}
                  >
                    <Link
                      to="/Event#faq"
                      className="dropdown-link"
                      onClick={(e) => handleDropdownLinkClick("#faq", e)}
                    >
                      FAQ
                      {activeSubItem === "FAQ" && (
                        <FaArrowRight className="right-arrow" />
                      )}
                    </Link>

                    {/* Show the description for FAQ if it's the active one */}
                    {activeSubItem === "FAQ" && (
                      <div className="dropdown-description faqs">
                        <p className="description-title">FAQ</p>
                        <p className="description-subtitle">
                          Find answers to commonly
                        </p>
                        <p className="description-subtitle">
                          asked questions about tickets,
                        </p>
                        <p className="description-subtitle">
                          the event, and policies.
                        </p>
                        <p className="description-subtitle">
                          We're here to help!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="nav-item-wrapper">
              <Nav.Link
                as={Link}
                to="/relive"
                className="nav-link"
                onClick={() => {
                  setActiveDropdown(null);
                  setIsNavOpen(false);
                  handleMainNavLinkClick();
                }}
              >
                Relive
              </Nav.Link>
            </div>
            {/* About Us Link */}
            <div
              className={`nav-item-wrapper ${
                activeDropdown === "About Us" ? "active" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("About Us")}
              onMouseLeave={handleMouseLeave}
            >
              <Nav.Link
                as={isMobile ? "div" : Link}
                to={isMobile ? undefined : "/about"}
                className={`nav-link ${
                  activeDropdown === "About Us" ? "active-link" : ""
                }`}
                onClick={(event) => {
                  toggleDropdown(event, "About Us");
                  if (!isMobile) {
                    handleMainNavLinkClick();
                  }
                }}
              >
                About Us
                <span className="dropdown-icon">
                  <FaChevronDown />
                </span>
              </Nav.Link>
              {activeDropdown === "About Us" && (
                <div className="dropdown-about">
                  {/* About Us Link */}
                  <div
                    className={`dropdown-item ${
                      activeSubItem === "About Us" ? "active" : ""
                    }`}
                    onMouseEnter={() => setActiveSubItem("About Us")}
                    onMouseLeave={() => setActiveSubItem(null)}
                  >
                    <Link
                      to="/about#about-us"
                      className="dropdown-link"
                      onClick={(e) => handleDropdownLinkClick("#about-us", e)}
                    >
                      About Us
                      {activeSubItem === "About Us" && (
                        <FaArrowRight className="right-arrow" />
                      )}
                    </Link>

                    {/* Show the description for About Us if it's the active one */}
                    {activeSubItem === "About Us" && (
                      <div className="dropdown-description ab">
                        <p className="description-title">About Us</p>
                        <p className="description-subtitle">
                          Plan your ideal schedule,{" "}
                        </p>
                        <p className="description-subtitle">
                          share top artists with friends,{" "}
                        </p>
                        <p className="description-subtitle">
                          and explore amazing food and{" "}
                        </p>
                        <p className="description-subtitle">
                          entertainment. This app has{" "}
                        </p>
                        <p className="description-subtitle">
                          everything you need!
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Freak Squad Link */}
                  <div
                    className={`dropdown-item ${
                      activeSubItem === "Freak Squad" ? "active" : ""
                    }`}
                    onMouseEnter={() => setActiveSubItem("Freak Squad")}
                    onMouseLeave={() => setActiveSubItem(null)}
                  >
                    <Link
                      to="/about#freak-squad"
                      className="dropdown-link"
                      onClick={(e) => handleDropdownLinkClick("#freak-squad", e)}
                    >
                      Freak Squad
                      {activeSubItem === "Freak Squad" && (
                        <FaArrowRight className="right-arrow" />
                      )}
                    </Link>

                    {/* Show the description for Freak Squad if it's the active one */}
                    {activeSubItem === "Freak Squad" && (
                      <div className="dropdown-description freak-squad">
                        <p className="description-title">Freak Squad</p>
                        <p className="description-subtitle">
                          Plan your ideal schedule,{" "}
                        </p>
                        <p className="description-subtitle">
                          share top artists with friends,{" "}
                        </p>
                        <p className="description-subtitle">
                          and explore amazing food and{" "}
                        </p>
                        <p className="description-subtitle">
                          entertainment. This app has{" "}
                        </p>
                        <p className="description-subtitle">
                          everything you need!
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Timeline Link */}
                  <div
                    className={`dropdown-item ${
                      activeSubItem === "Timeline" ? "active" : ""
                    }`}
                    onMouseEnter={() => setActiveSubItem("Timeline")}
                    onMouseLeave={() => setActiveSubItem(null)}
                  >
                    <Link
                      to="/about#timeline"
                      className="dropdown-link"
                      onClick={(e) => handleDropdownLinkClick("#timeline", e)}
                    >
                      Timeline
                      {activeSubItem === "Timeline" && (
                        <FaArrowRight className="right-arrow" />
                      )}
                    </Link>

                    {/* Show the description for Timeline if it's the active one */}
                    {activeSubItem === "Timeline" && (
                      <div className="dropdown-description timeline">
                        <p className="description-title">Timeline</p>
                        <p className="description-subtitle">
                          Plan your ideal schedule,{" "}
                        </p>
                        <p className="description-subtitle">
                          share top artists with friends,{" "}
                        </p>
                        <p className="description-subtitle">
                          and explore amazing food and{" "}
                        </p>
                        <p className="description-subtitle">
                          entertainment. This app has{" "}
                        </p>
                        <p className="description-subtitle">
                          everything you need!
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Partner With Us Link */}
                  <div
                    className={`dropdown-item ${
                      activeSubItem === "Partner With Us" ? "active" : ""
                    }`}
                    onMouseEnter={() => setActiveSubItem("Partner With Us")}
                    onMouseLeave={() => setActiveSubItem(null)}
                  >
                    <Link
                      to="/about#partner-with-us"
                      className="dropdown-link"
                      onClick={(e) =>
                        handleDropdownLinkClick("#partner-with-us", e)
                      }
                    >
                      Partner With Us
                      {activeSubItem === "Partner With Us" && (
                        <FaArrowRight className="right-arrow" />
                      )}
                    </Link>

                    {/* Show the description for Partner With Us if it's the active one */}
                    {activeSubItem === "Partner With Us" && (
                      <div className="dropdown-description partner">
                        <p className="description-title">Partner With Us</p>
                        <p className="description-subtitle">
                          Plan your ideal schedule,{" "}
                        </p>
                        <p className="description-subtitle">
                          share top artists with friends,{" "}
                        </p>
                        <p className="description-subtitle">
                          and explore amazing food and{" "}
                        </p>
                        <p className="description-subtitle">
                          entertainment. This app has{" "}
                        </p>
                        <p className="description-subtitle">
                          everything you need!
                        </p>
                      </div>
                    )}
                  </div>

                  {/* DJ Comp Link */}
                  <div
                    className={`dropdown-item ${
                      activeSubItem === "DJ Comp" ? "active" : ""
                    }`}
                    onMouseEnter={() => setActiveSubItem("DJ Comp")}
                    onMouseLeave={() => setActiveSubItem(null)}
                  >
                    <Link
                      to="/about#about-dj-comp"
                      className="dropdown-link"
                      onClick={(e) => handleDropdownLinkClick("#about-dj-comp", e)}
                    >
                      DJ Comp
                      {activeSubItem === "DJ Comp" && (
                        <FaArrowRight className="right-arrow" />
                      )}
                    </Link>

                    {/* Show the description for DJ Comp if it's the active one */}
                    {activeSubItem === "DJ Comp" && (
                      <div className="dropdown-description djcomp1">
                        <p className="description-title">DJ Comp</p>
                        <p className="description-subtitle">
                          Plan your ideal schedule,{" "}
                        </p>
                        <p className="description-subtitle">
                          share top artists with friends,{" "}
                        </p>
                        <p className="description-subtitle">
                          and explore amazing food and{" "}
                        </p>
                        <p className="description-subtitle">
                          entertainment. This app has{" "}
                        </p>
                        <p className="description-subtitle">
                          everything you need!
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Affiliate Link */}
                  <div
                    className={`dropdown-item ${
                      activeSubItem === "Affiliate" ? "active" : ""
                    }`}
                    onMouseEnter={() => setActiveSubItem("Affiliate")}
                    onMouseLeave={() => setActiveSubItem(null)}
                  >
                    <Link
                      to="/about#about-dj-comp"
                      className="dropdown-link"
                      onClick={(e) => handleDropdownLinkClick("#about-dj-comp", e)}
                    >
                      Affiliate
                      {activeSubItem === "Affiliate" && (
                        <FaArrowRight className="right-arrow" />
                      )}
                    </Link>

                    {/* Show the description for Affiliate if it's the active one */}
                    {activeSubItem === "Affiliate" && (
                      <div className="dropdown-description affiliate01">
                        <p className="description-title">Affiliate</p>
                        <p className="description-subtitle">
                          Plan your ideal schedule,{" "}
                        </p>
                        <p className="description-subtitle">
                          share top artists with friends,{" "}
                        </p>
                        <p className="description-subtitle">
                          and explore amazing food and{" "}
                        </p>
                        <p className="description-subtitle">
                          entertainment. This app has{" "}
                        </p>
                        <p className="description-subtitle">
                          everything you need!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Blog Link */}
            <div className="nav-item-wrapper">
              <Nav.Link
                as={Link}
                to="/blog"
                className="nav-link"
                onClick={() => {
                  setActiveDropdown(null);
                  setIsNavOpen(false);
                  handleMainNavLinkClick();
                }}
              >
                Blog
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        <div className="navbar-buttons">
          <Link to="/Event#tickets" className="b1">
            Buy Tickets
          </Link>
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

        .nav-link {
          padding: 18px 24px !important;
        }

        .navbar-nav .nav-link:hover {
          color: #ffbf00 !important;
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
          background-color: #ed196f;
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
          background-color: #ffbf00;
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

        .b {
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

        .dropdown-link-relive {
          color: #fff;
          font-size: 27.45px;
          font-weight: bold;
          width: 134px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .dropdown-link-relive p {
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

        a {
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

        .day {
          top: 110%;
        }
        .week {
          top: 8%;
        }
        .djcomp {
          top: -98%;
        }
        .affiliate0 {
          top: -200%;
        }
        .faqs {
          top: -300%;
        }

        .ab {
          top: 142%;
        }
        .freak-squad {
          top: 50%;
        }
        .timeline {
          top: -58%;
        }
        .partner {
          top: -164%;
        }
        .djcomp1 {
          top: -272%;
        }
        .affiliate01 {
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
            position: sticky;
            top: 54px; /* Account for countdown banner height (18px padding + 16px font + 18px padding + 2px border) */
            z-index: 1020;
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
            transition: opacity 0.25s ease-out, transform 0.25s ease-out;
            /* max-height: 80vh;
            overflow-y: auto; */
          }
          
          .navbar-collapse.collapsing {
            transition: opacity 0.25s ease-out, transform 0.25s ease-out;
          }
          
          .navbar-collapse:not(.show) {
            opacity: 0;
            transform: translateY(-10px);
          }
          
          .navbar-collapse.show {
            opacity: 1;
            transform: translateY(0);
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

          .hamburger-icon,
          .close-icon {
            font-size: 30px;
            color: white;
            position: relative;
            z-index: 1;
          }

          .hamburger-icon:hover,
          .close-icon:hover {
            color: #ffbf00;
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
            border-bottom: 2px solid #ffffff38;
            width: 100%;
            line-height: 50px;
            cursor: pointer;
          }

          /* Mobile dropdown styles */
          .dropdown-freakyard,
          .dropdown-relive,
          .dropdown-about,
          .dropdown-blog {
            position: static !important;
            width: 100% !important;
            height: auto !important;
            border-radius: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
            background-color: transparent !important;
            box-shadow: none !important;
            left: auto !important;
            top: auto !important;
          }
          .nav-item-wrapper {
            flex-direction: column;
          }
          .dropdown-item {
            width: 100%;
            padding: 10px 0 10px 20px;
            border-bottom: 1px solid #464646;
          }

          .dropdown-link {
            font-size: 18px;
            color: #ccc;
          }

          .dropdown-link-relive {
            font-size: 18px;
            width: 100%;
            padding-left: 20px;
          }

          .dropdown-link-relive p {
            font-size: 14px;
            color: #ccc;
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
          .sticky-top {
            top: 40px; /* Account for countdown banner height on extra small devices (12px padding + 14px font + 12px padding + 2px border) */
          }

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

          .dropdown-description {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default Header;

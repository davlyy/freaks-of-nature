import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/footer.png';
import logo from '../assets/footerlogo.png';
import instagram from '../assets/instagram.svg';
import youtube from '../assets/youtube.svg';
import twitter from '../assets/twitter.svg';
import snap from '../assets/snap.svg';

function Footer() {
  return (
    <>
    <footer style={{overflow:"hidden"}} >
        <img src={img} alt="Freaks of Nature" className='footer-img'/>
        <div className="footer" >
        <div className="footer-section">
      <div className="logo-section">
        <img src={logo} alt="Freaks of Nature" className="footer-logo" />
        <div className="contact-section">
         <h5>CONTACT US</h5>
         <p>©2024 Freaks Of Nature<br/>All Rights Reserved</p>
      </div>
      </div>

      <div className="links-section">
      <ul>
          <li><Link to="/Event">EVENT PAGE</Link></li>
          <li><Link to="/about#about-us">ABOUT US</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
          <li>FREAK</li>
          <li>OUR APP</li>
          <li><Link to="/Event#tickets">TICKETS</Link></li>
        </ul>
        <ul>
          <li><Link to="/about#partner-with-us">PARTNER WITH US</Link></li>
          <li>AFFILIATE</li>
          <li>DJ COMP</li>
          <li><Link to="/relive">RELIVE</Link></li>
          <li><Link to="/Event#faq">FAQ</Link></li>
          <li>FREAK SQUAD</li>
        </ul>
      </div>

       <div className="social-section">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="YouTube" className="social-icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" className="social-icon" />
          </a>
          <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
            <img src={snap} alt="Snapchat" className="social-icon" />
          </a>
        </div>
        
      </div>
        </div>
    </footer>


    <style jsx>{`
    
    
     .footer-img {
    width: 100%;
 }
 .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    background-color: #FFBF00;
    position: relative;
    z-index: 1;
  }
  
  .footer-section {
    width: 1720px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 80px 50px 50px;
  }
  
  .logo-section {
    display: flex;
  }
  
  .contact-section {
    margin-left: 20px;
  }
  
  .contact-section h5 {
    font-size: 37.54px;
    font-weight: medium;
  }
  
  .links-section {
    display: flex;
    width: 378px;
    justify-content: space-between;
  }
  .links-section ul {
    list-style: none;
    padding: 0;
  }
  .links-section li {
    margin: 5px 0;
    font-size: 20px;
    font-weight: 400;
    text-decoration: uppercase;
    cursor: pointer;
  }
  .links-section li a {
    color: inherit;
    text-decoration: none;
    transition: opacity 0.3s ease;
  }
  .links-section li a:hover {
    opacity: 0.7;
  }
  
  .social-section {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  
  .social-icon {
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .social-icon:hover {
    transform: scale(1.1);
  }


  @media (max-width: 1500px) {

    .footer-section {
      width: 100%;
      padding: 20px 50px;
    }
  }

  @media (max-width: 1024px) {

    .footer-section {
        padding: 50px;
        flex-wrap: wrap;
        align-items: flex-start;
    }
}   

@media (max-width: 468px) {

  .footer-section {
      padding: 50px 0 ;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
  }

  .logo-section {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
  }

  .footer-img{
    width: 185%;
  }

  .footer-logo{
    width: 170px;
  } 

  .contact-section {
    text-align: center;
    margin: 20px 0;
  }

  .links-section {
    display: none;
  }
}   
  
    
    `}</style>
    </>
  );
}

export default Footer;

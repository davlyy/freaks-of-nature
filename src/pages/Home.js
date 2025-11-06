import React, { useState, useEffect } from 'react';
import './home.css';
import image from '../assets/bg.png';
import icon from '../assets/arrow.svg';
import image1 from '../assets/Frame1.png';
import cta0 from '../assets/cta0.png';
import cta1 from '../assets/cta1.png';
import cta2 from '../assets/cta2.png';
import cta3 from '../assets/cta3.png';
import Blogsection from '../components/blogsection.js';
import { Player } from '@lottiefiles/react-lottie-player'; // For Lottie animations
import topStripeAnimation from '../stripsJSON/topstripe .json';
import bottomStripeAnimation from '../stripsJSON/bottomstripe .json';
import { Link } from 'react-router-dom';

const FESTIVAL_MONTH = 1; // February (0-indexed months)
const FESTIVAL_START_DAY = 5;
const FESTIVAL_END_DAY = 16;

const getFestivalStartTime = (year) =>
  new Date(year, FESTIVAL_MONTH, FESTIVAL_START_DAY, 0, 0, 0).getTime();

const getFestivalEndTime = (year) =>
  new Date(year, FESTIVAL_MONTH, FESTIVAL_END_DAY, 23, 59, 59).getTime();

const getInitialTargetDate = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentStart = getFestivalStartTime(currentYear);
  const currentEnd = getFestivalEndTime(currentYear);

  if (now.getTime() > currentEnd) {
    return getFestivalStartTime(currentYear + 1);
  }

  return currentStart;
};

function Home() {
  const [targetDate, setTargetDate] = useState(getInitialTargetDate);

  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        const targetYear = new Date(targetDate).getFullYear();
        const festivalEnd = getFestivalEndTime(targetYear);

        if (now > festivalEnd) {
          setTargetDate(getFestivalStartTime(targetYear + 1));
        } else {
          setTimeLeft((prev) =>
            prev.days === '00' && prev.hours === '00' && prev.minutes === '00'
              ? prev
              : { days: '00', hours: '00', minutes: '00' }
          );
        }
      } else {
        const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
        const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');

        setTimeLeft({ days, hours, minutes });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const renderDigitBoxes = (timeString) => (
    <>
      <div className="digit-box">{timeString[0]}</div>
      <div className="digit-box">{timeString[1]}</div>
    </>
  );

  return (
    <div>
      

      <section className="hero-section text-center text-light ">
        <div className="hero-div">
          <img src={image} alt="Freaks of Nature" className="img-fluid  hero-img" />
          <div className="countdown d-flex justify-content-center my-3">
          
            <div className="time-box px-3 py-2 ">
              <h4>Days</h4>
              <div className="countdown-time d-flex">
                {renderDigitBoxes(timeLeft.days)}
              </div>
            </div>
            <div className="time-box px-3 py-2 ">
              <h4>Hours</h4>
              <div className="countdown-time d-flex">
                {renderDigitBoxes(timeLeft.hours)}
              </div>
            </div>
            <div className="time-box px-3 py-2 ">
              <h4>Minutes</h4>
              <div className="countdown-time d-flex">
                {renderDigitBoxes(timeLeft.minutes)}
              </div>
            </div>
          </div>
          
          <div className="event-text">    
            <p> Feb 5-16</p>
            <p> 3 Stages</p>
            <p> 120 DJs</p>
          </div>

          <div className="cta-buttons">
            <Link to="/Event#tickets" className="b1">Buy Tickets</Link>
            <button className="b2">Learn More</button>
        </div>
        </div>
        
      </section>

      <div className="orange-strip">
        <img src={require(`../assets/orange.png`)} alt="Freaks of Nature" className="img-fluid" />
      </div>

      <div className="marquee-container">
        <div className="marquee">
          <Player
            autoplay
            loop
            src={topStripeAnimation}
            className="img-fluid"
            style={{ transform: "rotate(180deg)" }}
          />
        </div>
      </div>
{/* Merch Section */}
<section className="merch-section">
  <div className="merch-div">
    <h2>Embrace Your Freakness in Style</h2>
    <div className="img-cta">
      <button  >
        MERCH STORE <img src={icon} alt="Freaks of Nature" className="img-fluid" />
      </button>
    </div> 
  </div>
</section>

      {/* Download Section */}
      <section className="download-section">
        <div className='download-div'> 
          <div className='download-text'>
           <h2>Download Our App</h2>
           <p>Plan your ideal schedule, share top artists with friends, and explore amazing food and entertainment. This app has everything you need!</p>
           <div className="cta-buttons mt-0">
            <button className="app-cta apple" ></button>
            <button className="app-cta play" ></button>
        </div>
          </div>
          <div className='download-img'>
            <img src={image1} alt="Freaks of Nature" className="img-fluid" />  
          </div>
          
        </div>
      </section>

      {/* Affiliate Section */}
      <section className="affiliate-section py-5 text-center">
        <div className="affiliate-div">
          <h2>Step into the Freak Show</h2>
          <p className='para'>Catch up on iconic sets and unforgettable moments through our Relive platform, dive deep into our wild, 
            creative community, and spread the word as an affiliate to earn epic rewards.</p>

            <div className="cta-box" >
              <Link to="/relive" className="box1">
                <div className="box1-text">
                 <img src={cta0} alt="Freaks of Nature" className='rel' />
                 <p>Replay your favorite DJ sets anytime on our exclusive platform</p>
                </div>
                <div className="box1-img">
                 <img src={cta1} alt="Freaks of Nature" className='img-fluid' />
                </div>
              </Link>
              <div className="box2">
                <Link to="/about" className="box-a">
                  <div className="box-text">
                   <h3>ABOUT US</h3>
                   <p>Would you like to know more about freaks of nature?</p>
                  </div>
                  <div className="box-a-img">
                    <img src={cta2} alt="Freaks of Nature" className='img-fluid'/>
                  </div>
                </Link>

                <a href='/#' className="box-b">
                  <div className="box-text">
                   <h3>Affiliate</h3>
                   <p>Join our program and win amazing prizes</p>
                  </div>
                  <div className="box-b-img">
                    <img src={cta3} alt="Freaks of Nature" className='img-fluid' />
                  </div>
                </a>
              </div>
            </div>
          
        </div>
      </section>

      <div className="marquee-bottom">
        <div className="bottom-marquee">
          <Player
            autoplay
            loop
            src={bottomStripeAnimation}
            className="img-fluid"
            style={{ transform: "rotate(180deg)" }}
          />
        </div>
      </div>

      <Blogsection/>

    </div>
  );
}

export default Home;

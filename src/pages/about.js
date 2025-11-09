import React, { useEffect, useRef, useCallback } from 'react';
import './about.css';
import Cta from '../components/cta.js';
import Slider from '../components/slider.js';
import A2022 from '../assets/A2022.svg';
import A2021 from '../assets/2021.svg';
import A2023 from '../assets/2023.svg';
import logoep1 from '../assets/logoep1.svg';
import logoep2 from '../assets/logoep2.svg';
import logoep3 from '../assets/logoep3.svg';


import eplogo from '../assets/eplogo.png';
import Animation from '../components/animation.js';
import ResponsiveImg from '../assets/aboutheroResp.png';
import { useLocation } from 'react-router-dom';

function About() {
    const location = useLocation();
    const pendingHashRef = useRef(null);

    // Helper function to scroll to element centered in viewport
    const scrollToElement = useCallback((elementId) => {
        const element = document.getElementById(elementId);
        if (!element) {
            return false;
        }

        // Use requestAnimationFrame to ensure layout is complete
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Get fresh element reference in case DOM updated
                const freshElement = document.getElementById(elementId);
                if (!freshElement) return;

                // Get element position and dimensions
                const elementRect = freshElement.getBoundingClientRect();
                // Get absolute position from top of document
                const absoluteTop = elementRect.top + window.scrollY;
                const elementHeight = elementRect.height;

                // Header height based on screen size
                const headerHeight = window.innerWidth <= 768 ? 80 : 124;

                let scrollPosition;

                // Timeline section should scroll to top, not center
                if (elementId === 'timeline') {
                    scrollPosition = Math.max(0, absoluteTop - headerHeight - 20);
                } else {
                    // Calculate viewport height
                    const viewportHeight = window.innerHeight;

                    // Calculate position to center element in viewport
                    const centerPosition = absoluteTop - (viewportHeight / 2) + (elementHeight / 2);

                    // Add header offset
                    scrollPosition = Math.max(0, centerPosition - headerHeight);
                }

                window.scrollTo({
                    top: scrollPosition,
                    behavior: "smooth",
                });
            });
        });

        return true;
    }, []);

    // Handle hash changes from location
    useEffect(() => {
        if (!location.hash) {
            return;
        }

        const hashValue = location.hash.replace("#", "");
        if (!hashValue) {
            return;
        }

        pendingHashRef.current = hashValue;
    }, [location.hash]);

    // Listen for native hashchange events (for when clicking links on same page)
    useEffect(() => {
        const handleHashChange = () => {
            const hashValue = window.location.hash.replace("#", "");
            if (!hashValue) {
                return;
            }

            pendingHashRef.current = hashValue;
        };

        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    // Execute scroll when pendingHashRef is set
    useEffect(() => {
        if (!pendingHashRef.current) {
            return;
        }

        const scrollTarget = pendingHashRef.current;

        // Clear the pending ref immediately to prevent duplicate scrolls
        pendingHashRef.current = null;

        // Always use a delay to ensure DOM updates are complete
        const timeoutId = window.setTimeout(() => {
            scrollToElement(scrollTarget);
        }, 100);

        return () => window.clearTimeout(timeoutId);
    }, [scrollToElement, location.hash]);

    return (
        <>
        <div className="about-hero" id="about-us">
            <div className="aboutus-text">
                <div className='content1'>
                    <h1>ABOUT US</h1>
                    <img src={ResponsiveImg} alt="PLUR Warrior"  className='img-fluid about-resp-img'/>
                    <h5>Freaks of Nature is a series of boutique electronic music and arts festivals brand born in Saudi and loved globally. It provides a vibrant platform for emerging artists, international headliners, and local talent.</h5>
                </div>
                <div className='content1 about-resp-img'>
                    <p>Each event is a multi-sensory experience, featuring electrifying dance, stunning visuals, immersive special effects, and flamboyant costumes. Freaks of Nature transcends music, captivating audiences with its unforgettable, transformative atmosphere.</p>
                </div>
                <div className='content1'>
                    <p>As Saudi Arabia's first globally exportable entertainment brand, Freaks of Nature fosters cultural exchange and positions the Kingdom as a hub for world-class festivals, elevating its presence on the international stage.</p>
                </div>
            </div>

            <div className="about-text1">
                <div className='content1'>
                    <p>Each event is a multi-sensory experience, featuring electrifying dance, stunning visuals, immersive special effects, and flamboyant costumes. Freaks of Nature transcends music, captivating audiences with its unforgettable, transformative atmosphere.</p>
                </div>
            </div>
        </div>

        <div id="freak-squad">
            <Animation />
        </div>

        <div className="episode-section" id="timeline">
            <div className="episode-div">
                <div className="episode-date">
                    <img src={A2021} alt="PLUR Warrior"  className='img-fluid'/>
                </div>
                <div className="episode-content">
                    <div className="episode-box1">
                        <div className="ep-box-img">
                            <img src={logoep1} alt="PLUR Warrior" />
                            <h2>Episode 1
                            Freak Show </h2>
                        </div>
                        <p>Following the huge success of its first ever digital edition in 2020, Tomorrowland brought back the spectacular two-day digital music festival experience on July 16 & 17, 2021, welcoming the most spectacular group of entertainers in the universe ‘The Amicorum Spectaculum’.</p>
                        <p>
The magnificent second edition of Tomorrowland – Around the World was adapted to all time zones and brought together a stellar line-up featuring more than 40 of the planet’s biggest names in electronic dance music, while the People of Tomorrow from all corners of the globe united again as one in one place – celebrating the spectacle of friendship.</p>
                    </div>
                    <div className="episode-box2">
                        <Slider />
                    </div>

                </div>

            </div>

            <div className="episode-div">
                <div className="episode-date1">
                    <img src={A2022} alt="PLUR Warrior"  className='img-fluid' />
                </div>
                <div className="episode-content res">
                   <div className="episode-box2">
                        <Slider />
                    </div>
                    <div className="episode-box1">
                        <div className="ep-box-img">
                            <img src={logoep2} alt="PLUR Warrior" />
                            <h2>Episode 6 
                            ADE EDITION</h2>
                        </div>
                        <p>Following the huge success of its first ever digital edition in 2020, Tomorrowland brought back the spectacular two-day digital music festival experience on July 16 & 17, 2021, welcoming the most spectacular group of entertainers in the universe ‘The Amicorum Spectaculum’.</p>
                        <p>The magnificent second edition of Tomorrowland – Around the World was adapted to all time zones and brought together a stellar line-up featuring more than 40 of the planet’s biggest names in electronic dance music, while the People of Tomorrow from all corners of the globe united again as one in one place – celebrating the spectacle of friendship.</p>
                    </div>
                </div>

            </div>

            <div className="episode-div">
                <div className="episode-date">
                    <img src={A2023} alt="PLUR Warrior"  className='img-fluid' />
                </div>
                <div className="episode-content">
                    <div className="episode-box1">
                        <div className="ep-box-img">
                            <img src={logoep3} alt="PLUR Warrior" />
                            <h2>Episode 5 
                            QUERENCIA</h2>
                        </div>
                        <p>Following the huge success of its first ever digital edition in 2020, Tomorrowland brought back the spectacular two-day digital music festival experience on July 16 & 17, 2021, welcoming the most spectacular group of entertainers in the universe ‘The Amicorum Spectaculum’.</p>
                        <p>The magnificent second edition of Tomorrowland – Around the World was adapted to all time zones and brought together a stellar line-up featuring more than 40 of the planet’s biggest names in electronic dance music, while the People of Tomorrow from all corners of the globe united again as one in one place – celebrating the spectacle of friendship.</p>
                    </div>
                    <div className="episode-box2">
                        <Slider />
                    </div>

                </div>

            </div>

            <div className="episode-div">
                <div className="episode-date1">
                    <img src={A2022} alt="PLUR Warrior"  className='img-fluid' />
                </div>
                <div className="episode-content res">
                   <div className="episode-box2">
                        <Slider />
                    </div>
                    <div className="episode-box1">
                        <div className="ep-box-img">
                            <img src={eplogo} alt="PLUR Warrior" />
                            <h2>Episode 7 
                            Freak yard</h2>
                        </div>
                        <p>Following the huge success of its first ever digital edition in 2020, Tomorrowland brought back the spectacular two-day digital music festival experience on July 16 & 17, 2021, welcoming the most spectacular group of entertainers in the universe ‘The Amicorum Spectaculum’.</p>
                        <p>The magnificent second edition of Tomorrowland – Around the World was adapted to all time zones and brought together a stellar line-up featuring more than 40 of the planet’s biggest names in electronic dance music, while the People of Tomorrow from all corners of the globe united again as one in one place – celebrating the spectacle of friendship.</p>
                    </div>
                </div>

            </div>
            
        </div>

        <div className="partner-section" id="partner-with-us">
            <h2>Partner with us</h2>
            <div className="partner-div">
                <div className="partner-box c1">
                    <h3> DJs </h3>
                    <div className='partner-cta'>
                      <p>Invite them to register as a dj to be considered for our new events</p>
                      <button className='partner-button'>
                        Learn More
                      </button>
                    </div>
                </div>
                <div className="partner-box c2">
                 <h3> Artist brands </h3>
                 <div className='partner-cta'>
                      <p>Invite them to showcase<br/> their art in our events</p>
                      <button className='partner-button'>
                        Learn More
                      </button>
                 </div>
                </div>
                <div className="partner-box c3">
                 <div>
                      <h3> Vendors </h3>
                      <p>F&B/Merchants/Clothing stores</p>
                 </div>

                 <div className='partner-cta'>
                      <p>Invite them to <br/> sell at our events</p>
                      <button className='partner-button'>
                        Learn More
                      </button>
                 </div>
                </div>
            </div>
        </div>

        {/* <div id="about-dj-comp">
            <Cta />
        </div> */}

        
        </>
        
    );
}

export default About;
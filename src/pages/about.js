/* global globalThis */
import React, { useEffect, useRef, useCallback } from "react";
import "./about.css";
import Slider from "../components/slider.js";
import { episodeImages } from "../data/episodeImages.js";
import A2022 from "../assets/A2022.svg";
import A2021 from "../assets/2021.svg";
import A2023 from "../assets/2023.svg";
import A2025 from "../assets/2025.svg";
import ep1logo from "../assets/logoOne.svg";
import ep2logo from "../assets/ep2logo.svg";
import ep3logo from "../assets/ep3logo.svg";
import ep4logo from "../assets/ep4logo.svg";
import ep5logo from "../assets/ep5logo.svg";
import ep6logo from "../assets/ep6logo.svg";
import ep7logo from "../assets/ep7logo.svg";

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
        const absoluteTop = elementRect.top + globalThis.scrollY;
        const elementHeight = elementRect.height;

        // Header height based on screen size
        const headerHeight = globalThis.innerWidth <= 768 ? 80 : 124;

        let scrollPosition;

        // Timeline section should scroll to top, not center
        if (elementId === "timeline") {
          scrollPosition = Math.max(0, absoluteTop - headerHeight - 20);
        } else {
          // Calculate viewport height
          const viewportHeight = globalThis.innerHeight;

          // Calculate position to center element in viewport
          const centerPosition =
            absoluteTop - viewportHeight / 2 + elementHeight / 2;

          // Add header offset
          scrollPosition = Math.max(0, centerPosition - headerHeight);
        }

        globalThis.scrollTo({
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
      const hashValue = globalThis.location.hash.replace("#", "");
      if (!hashValue) {
        return;
      }

      pendingHashRef.current = hashValue;
    };

    globalThis.addEventListener("hashchange", handleHashChange);
    return () => globalThis.removeEventListener("hashchange", handleHashChange);
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
    const timeoutId = globalThis.setTimeout(() => {
      scrollToElement(scrollTarget);
    }, 100);

    return () => globalThis.clearTimeout(timeoutId);
  }, [scrollToElement, location.hash]);

  return (
    <>
      {/* <div className="about-section-wrapper" id="about-us">
    <div className="about-grid-container">
        <div className='about-text-block'>
            <h1>ABOUT US</h1>
            <h5>Freaks of Nature is a series of boutique electronic music and arts festivals brand born in Saudi and loved globally. It provides a vibrant platform for emerging artists, international headliners, and local talent.</h5>
        </div>
        
        <div className='about-image-block'>
            <img src={ResponsiveImg} alt="PLUR Warriors" loading="lazy" />
        </div>
        
        <div className='about-text-block'>
            <p>As Saudi Arabia's first globally exportable entertainment brand, Freaks of Nature fosters cultural exchange and positions the Kingdom as a hub for world-class festivals, elevating its presence on the international stage.</p>
        </div>
        
        <div className='about-text-block about-text-center'>
            <p>Each event is a multi-sensory experience, featuring electrifying dance, stunning visuals, immersive special effects, and flamboyant costumes. Freaks of Nature transcends music, captivating audiences with its unforgettable, transformative atmosphere.</p>
        </div>
    </div>
</div> */}
      <div className="about-hero" id="about-us">
            <div className="aboutus-text">
                <div className='content1'>
                    <h1>ABOUT US</h1>
                    <img src={ResponsiveImg} alt="PLUR Warrior" loading="lazy" className='img-fluid about-resp-img'/>
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
      {/* //first episode */}
      <div className="episode-section" id="timeline">
        <div className="episode-div">
          <div className="episode-date">
            <img
              src={A2021}
              alt="PLUR Warrior"
              loading="lazy"
              className="img-fluid"
            />
          </div>
          <div className="episode-content">
            <div className="episode-box1">
              <div className="ep-box-img">
                <img src={ep1logo} alt="PLUR Warrior" loading="lazy" />
                <h2>Episode 1 Freak Show </h2>
              </div>
              <p>
                It all started in 2021, as a small activation at XP Music. What
                was meant to be a one-off turned into something unforgettable —
                Episode 1: Freak Show. Ten local DJs took the stage, and a
                massive, electric crowd answered back. It wasn’t about
                perfection or polish; it was about energy, emotion, and a shared
                feeling that something new was happening.
              </p>
              <p>
                That night marked the birth of Freaks of Nature — a movement
                powered by creativity and community. It was the first time the
                Freaks came together, and from that moment, the path was clear.
                What began as an activation became the start of a cultural shift
                — the beginning of the Freak era.
              </p>
            </div>
            <div className="episode-box2">
              <Slider images={episodeImages.ep1} />
            </div>
          </div>
        </div>

        <div className="episode-div">
          <div className="episode-date1">
            <img
              src={A2022}
              alt="PLUR Warrior"
              loading="lazy"
              className="img-fluid"
            />
          </div>
          <div className="episode-content res">
            <div className="episode-box2">
              <Slider images={episodeImages.ep2} />
            </div>
            <div className="episode-box1">
              <div className="ep-box-img">
                <img src={ep2logo} alt="PLUR Warrior" loading="lazy" />
                <h2>Episode 2 FREAKFEST</h2>
              </div>
              <p>
                Episode 2 marked a turning point — the first fully independent
                event ever licensed in Saudi Arabia. What began as a movement
                found its own ground, standing tall with two stages, over thirty
                DJs, and a crowd that matched the energy beat for beat. For the
                first time, James Hype brought his sound to Riyadh, adding
                international weight to a homegrown vision.
              </p>
              <p>
                It wasn’t just a festival; it was proof that the scene was real
                — that creativity, discipline, and community could build
                something world-class from within Saudi. Freakfest didn’t follow
                a blueprint; it wrote its own. And in doing so, it cemented
                Freaks of Nature as a force ready to push boundaries and
                redefine what independence looks like in music.
              </p>
            </div>
          </div>
        </div>

        <div className="episode-div">
          <div className="episode-date">
            <img
              src={A2022}
              alt="PLUR Warrior"
              loading="lazy"
              className="img-fluid"
            />
          </div>
          <div className="episode-content">
            <div className="episode-box1">
              <div className="ep-box-img">
                <img src={ep3logo} alt="PLUR Warrior" loading="lazy" />
                <h2>
                  Episode 3 <br />
                  FREAKS OF ARAVEIA
                </h2>
              </div>
              <p>
                Episode 3 was the first big-scale chapter in the Freaks of
                Nature journey — a milestone event held in Diriyah, Saudi
                Arabia, in November 2022. Three stages lit up the night with a
                powerful mix of international and local talent, featuring Mesto,
                Toby Romeo, Kaze, Seth Hills, Mike & Me, alongside Saudi
                trailblazers like Dish Dash, Cosmicat, Igniter, Viva, and many
                more.
              </p>
              <p>
                It was more than a festival — it was a statement of scale and
                identity. Freaks of Araveia introduced the first-ever Rule the
                Stage competition, opening the door for rising talent to perform
                alongside global names. It marked the moment Freaks of Nature
                evolved from a movement into a full-fledged cultural phenomenon
                — one that celebrates local creativity while connecting it to
                the world stage.
              </p>
            </div>
            <div className="episode-box2">
              <Slider images={episodeImages.ep3} />
            </div>
          </div>
        </div>

        <div className="episode-div">
          <div className="episode-date1">
            <img
              src={A2022}
              alt="PLUR Warrior"
              loading="lazy"
              className="img-fluid"
            />
          </div>
          <div className="episode-content res">
            <div className="episode-box2">
              <Slider images={episodeImages.ep4} />
            </div>
            <div className="episode-box1">
              <div className="ep-box-img">
                <img src={ep4logo} alt="PLUR Warrior" loading="lazy" />
                <h2>Episode 4 XP EDITION</h2>
              </div>
              <p>
                Episode 4: XP Edition took place in November 2022 at JAX,
                Diriyah, as part of XP NITE — a cultural hotspot where music,
                art, and experimentation collide. The activation brought
                together a seamless mix of international and local talent,
                featuring Wedamnz, Rash, Sound of Yaz, and more, creating a
                night that felt both global and deeply rooted in the Saudi
                scene.
              </p>
              <p>
                It was a reminder of how far the movement had come — from
                underground energy to recognized creative force. XP Edition
                wasn’t about scale; it was about connection. A raw, expressive
                moment that kept the Freak spirit alive in the heart of Riyadh’s
                creative district.
              </p>
            </div>
          </div>
        </div>
        <div className="episode-div">
          <div className="episode-date">
            <img
              src={A2023}
              alt="PLUR Warrior"
              loading="lazy"
              className="img-fluid"
            />
          </div>
          <div className="episode-content">
            <div className="episode-box1">
              <div className="ep-box-img">
                <img src={ep5logo} alt="PLUR Warrior" loading="lazy" />
                <h2>Episode 5 QUARANCIA</h2>
              </div>
              <p>
                Episode 5 marked the powerful comeback of Freaks of Nature —
                bigger, louder, and more ambitious than ever before. Held in
                Diriyah, Riyadh, the edition brought together over 50 artists
                across three stages, with unforgettable performances from Lost
                Frequencies on the Mainstage and Nic Fanciulli commanding the
                Underground. Names like Toby Romeo, MORTEN, and 39 Kingdom added
                to a lineup that defined the new era of sound and celebration.
              </p>
              <p>
                Quarancia wasn’t just a festival; it was an experience layered
                with creativity and surprise, including the first-ever
                invitation box that became an instant highlight among every
                attendee. It proved once again that the Freaks don’t just return
                — they rise stronger every time.
              </p>
            </div>
            <div className="episode-box2">
              <Slider images={episodeImages.ep5} />
            </div>
          </div>
        </div>
        <div className="episode-div">
          <div className="episode-date1">
            <img
              src={A2023}
              alt="PLUR Warrior"
              loading="lazy"
              className="img-fluid"
            />
          </div>
          <div className="episode-content res">
            <div className="episode-box2">
              <Slider images={episodeImages.ep6} />
            </div>
            <div className="episode-box1">
              <div className="ep-box-img">
                <img src={ep6logo} alt="PLUR Warrior" loading="lazy" />
                <h2>Episode 6 ADE EDITION</h2>
              </div>
              <p>
                Episode 6 marked the first-ever Freaks of Nature event in
                Europe, taking place in Amsterdam during the iconic Amsterdam
                Dance Event (ADE) in partnership with MMATH. The night featured
                six curated back-to-back sets blending international names with
                Saudi talent — a seamless mix of styles and stories that
                embodied the Freaks’ spirit of collaboration and
                experimentation.
              </p>
              <p>
                In 2023, the brand took over the city with two shows in one
                night — a high-energy Showcase followed by a late-night
                Afterparty. The lineup included Wedamnz, Rash, Seth Hills,
                Brooks, Igniter, and B3, turning Amsterdam into a meeting point
                for East and West. ADE Edition wasn’t just an expansion; it was
                a statement — the Freaks had officially gone global.
              </p>
            </div>
          </div>
        </div>
        <div className="episode-div">
          <div className="episode-date">
            <img
              src={A2025}
              alt="PLUR Warrior"
              loading="lazy"
              className="img-fluid"
            />
          </div>
          <div className="episode-content">
            <div className="episode-box1">
              <div className="ep-box-img">
                <img src={ep7logo} alt="PLUR Warrior" loading="lazy" />
                <h2>ADE SHOWCASE</h2>
              </div>
              <p>
                ADE Showcase marked the second edition of Freaks of Nature at
                Amsterdam Dance Event, a soft yet powerful beginning that set
                the tone for the brand’s legendary comeback after two years. In
                collaboration with MMATH, the event carried the same signature
                b2b format, pairing local and international talent in an
                atmosphere built on connection and creativity.
              </p>
              <p>
                Held once again in Amsterdam, the lineup featured Igniter, Toby
                Romeo, Aeres, Hannah, Yunite, Justin Mylo, Brooks, Yaz, and Sam
                Collins — artists who bridged cultures and sounds in perfect
                sync. ADE Showcase wasn’t just another event; it was a quiet
                spark before the next big explosion — the reminder that the
                Freaks are never gone, just evolving.
              </p>
            </div>
            <div className="episode-box2">
              <Slider images={episodeImages.ep7} />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="partner-section" id="partner-with-us">
            <h2>Partner with us</h2>
            <div className="partner-div">
                <div className="partner-box c1">
                    <h3> DJs </h3>
                    <div className='partner-cta'>
                      <p>Invite them to register as a dj to be considered for our new events</p>
                      <a
                        className='partner-button'
                        href="https://www.instagram.com/werfreaksofnature/?follow"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More
                      </a>
                    </div>
                </div>
                <div className="partner-box c2">
                 <h3> Artist brands </h3>
                 <div className='partner-cta'>
                      <p>Invite them to showcase<br/> their art in our events</p>
                      <a
                        className='partner-button'
                        href="https://www.instagram.com/werfreaksofnature/?follow"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More
                      </a>
                 </div>
                </div>
                <div className="partner-box c3">
                 <div>
                      <h3> Vendors </h3>
                      <p>F&B/Merchants/Clothing stores</p>
                 </div>

                 <div className='partner-cta'>
                      <p>Invite them to <br/> sell at our events</p>
                      <a
                        className='partner-button'
                        href="https://www.instagram.com/werfreaksofnature/?follow"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More
                      </a>
                 </div>
                </div>
            </div>
        </div> */}

      {/* <div id="about-dj-comp">
            <Cta />
        </div> */}
    </>
  );
}

export default About;

import React, { useState, useCallback, useRef, useEffect } from "react";
import img1 from "../assets/animation1.png";
import img2 from "../assets/animation2.png";
import img3 from "../assets/animation3.png";
import img4 from "../assets/animation4.png";
import img5 from "../assets/animation5.png";
import img6 from "../assets/animation6.png";
import snapBg from "../assets/SNAP.png";
import popsBg from "../assets/POPS.png";
import echoBg from "../assets/ECHO.png";
import glitzBg from "../assets/GLITZ.png";
import blissBg from "../assets/BILSS.png";
import bounceBg from "../assets/BOUNCE.png";
import idle01 from "../assets/a01.png";
import idle02 from "../assets/a02.png";
import idle03 from "../assets/a03.png";
import idle04 from "../assets/a04.png";
import idle05 from "../assets/a05.png";
import idle06 from "../assets/a06.png";
import active01 from "../assets/b01.png";
import active02 from "../assets/b02.png";
import active03 from "../assets/b03.png";
import active04 from "../assets/b04.png";
import active05 from "../assets/b05.png";
import active06 from "../assets/b06.png";

const profiles = [
  {
    label: "SNAP",
    background: snapBg,
    idle: idle01,
    active: active01,
    sliderImage: img1,
    heading: "Say 'cheese' for the rave!",
    subheading: "The Documentarian",
    description:
      "The Documentarian is a passionate storyteller, capturing every moment of the festival to relive the magic later. Their camera and smartphone are always at the ready, ensuring no memorable experience goes undocumented.",
  },
  {
    label: "POPS",
    background: popsBg,
    idle: idle02,
    active: active02,
    sliderImage: img2,
    heading: "I've danced through it all!",
    subheading: "The Rave Patron",
    description:
      "The Rave Patron is a veteran of the EDM scene, with boundless enthusiasm for the music and dance culture. Their age is no barrier to their dedication and energy, and they bring a sense of wisdom and experience to the dance floor.",
  },
  {
    label: "ECHO",
    background: echoBg,
    idle: idle03,
    active: active03,
    sliderImage: img3,
    heading: "Hugs and good vibes for all!",
    subheading: "The PLUR Warrior",
    description:
      "The PLUR Warrior is a beacon of positivity and love, embodying the spirit of Peace, Love, Unity, and Respect (PLUR). Their mission is to spread good vibes, share hugs, and create a harmonious atmosphere for all ravers.",
  },
  {
    label: "GLITZ",
    background: glitzBg,
    idle: idle04,
    active: active04,
    sliderImage: img4,
    heading: "Every day is an ' outfit of the day'!",
    subheading: "The Festival Fashionista",
    description:
      "The Festival Fashionista is the embodiment of extravagant and flamboyant fashion at its finest. They meticulously plan their festival outfits, adorned with glitter, sequins, and elaborate costumes, taking the festival's fashion game to new heights.",
  },
  {
    label: "BLISS",
    background: blissBg,
    idle: idle05,
    active: active05,
    sliderImage: img5,
    heading: "Hugs and good vibes for all!",
    subheading: "The PLUR Warrior",
    description:
      "The PLUR Warrior is a beacon of positivity and love, embodying the spirit of Peace, Love, Unity, and Respect (PLUR). Their mission is to spread good vibes, share hugs, and create a harmonious atmosphere for all ravers.",
  },
  {
    label: "BOUNCE",
    background: bounceBg,
    idle: idle06,
    active: active06,
    sliderImage: img6,
    heading: "Get ready to jump!",
    subheading: "The Fun Sized One",
    description:
      "The Fun Sized One may be short in stature, but they possess boundless energy and an unwavering presence in the heart of the action. They dance with contagious enthusiasm, and their energy lights up the dance floor.",
  },
];

const DEFAULT_PROFILE_INDEX = 2;

const Animation = () => {
  const [bgImage, setBgImage] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [bgVisible, setBgVisible] = useState(false);
  const fadeTimeoutRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? profiles.length - 1 : prevIndex - 1
    );
  };

  const handleHover = useCallback((index) => {
    const profile = profiles[index];
    if (!profile) {
      return;
    }

    if (fadeTimeoutRef.current) {
      clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = null;
    }

    setBgImage(profile.background);
    setHoverIndex(index);
    requestAnimationFrame(() => setBgVisible(true));
  }, []);

  const handleHoverOut = useCallback(() => {
    setHoverIndex(null);
    setBgVisible(false);

    fadeTimeoutRef.current = setTimeout(() => {
      setBgImage(null);
      fadeTimeoutRef.current = null;
    }, 300);
  }, []);

  useEffect(
    () => () => {
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    },
    []
  );

  const activeProfile =
    hoverIndex !== null ? profiles[hoverIndex] : profiles[DEFAULT_PROFILE_INDEX];

  return (
    <>
      <div className="hugs-section">
        <div className="hugs-text">
          <h2>{activeProfile.heading}</h2>
          <div className="para">
            <h5>{activeProfile.subheading}</h5>
            <p>{activeProfile.description}</p>
          </div>
        </div>

        <div className="hugs-animation">
          <div
            className={`hugs-bgdiv ${bgImage && bgVisible ? "visible" : ""}`}
            style={{
              backgroundImage: bgImage ? `url(${bgImage})` : "none",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>

          <div className="hugs-imgdiv">
            {profiles.map((profile, index) => (
              <div
                key={profile.label}
                className="character-card"
                tabIndex={0}
                role="button"
                aria-label={`Meet ${profile.subheading}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleHoverOut}
                onFocus={() => handleHover(index)}
                onBlur={handleHoverOut}
              >
                <img
                  src={profile.idle}
                  alt={`${profile.subheading} illustration`}
                  className="character-image character-base"
                />
                <img
                  src={profile.active}
                  alt={`${profile.subheading} highlighted illustration`}
                  className="character-image character-active"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Responsive slider */}
        <div className="hugs-responsive">
          <div className="hugs-imgae-slider1" style={{ width: "100%" }}>
            <div className="slider1">
              <div className="slider1-content">
                <div
                  className="slider1-images-wrapper"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  {profiles.map((profile) => (
                    <div className="slide" key={profile.label}>
                      <p className="slider1-text">{profile.label}</p>
                      <img src={profile.sliderImage} alt={profile.label} className="slider1-image" />
                    </div>
                  ))}
                </div>
                <button className="slider1-button prev" onClick={handlePrev}>
                  &#8249;
                </button>
                <button className="slider1-button next" onClick={handleNext}>
                  &#8250;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

            <style jsx>{`
                .hugs-section {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .hugs-text {
                    width: 1620px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 100px 0;
                }

                .hugs-text h2 {
                    font-size: 108px;
                    font-weight: bold;
                    color: #000;
                    text-transform: uppercase;
                    line-height: 108px;
                    width: 1145px;
                }

                .hugs-animation {
                    width: 1620px;
                    height: 574px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 100px 0;
                    background-image: none;
                    position: relative;
                }

                .hugs-responsive {
                    display: none;
                }

                .hugs-bgdiv {
                    width: 100%;
                    height: 420px;
                    opacity: 0;
                    transform: scale(0.98);
                    position: absolute;
                    left: 0;
                    z-index: -1;
                    overflow: hidden;
                    top: 0;
                    transition: opacity 0.35s ease, transform 0.35s ease;
                }

                .hugs-bgdiv.visible {
                    opacity: 1;
                    transform: scale(1);
                }

                .hugs-imgdiv {
                    display: flex;
                    width: 100%;
                    position: relative;
                    z-index: 1;
                }

                .character-card {
                    width: 331px;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    cursor: pointer;
                    transition: transform 0.35s ease, filter 0.35s ease;
                    outline: none;
                }

                .character-card:hover,
                .character-card:focus-visible {
                    transform: translateY(-14px);
                    filter: drop-shadow(0px 14px 18px rgba(0, 0, 0, 0.25));
                }

                .character-image {
                    width: 100%;
                    height: auto;
                    transition: opacity 0.35s ease;
                }

                .character-active {
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                }

                .character-card:hover .character-active,
                .character-card:focus-visible .character-active {
                    opacity: 1;
                }

                .character-card:hover .character-base,
                .character-card:focus-visible .character-base {
                    opacity: 0;
                }

                .para {
                    width: 352px;
                }

                @media (max-width: 1500px) {
                    .hugs-text {
                        width: 1335px;
                    }
                    .hugs-text h2 {
                        font-size: 94px;
                    }

                    .hugs-animation {
                        width: 1335px;
                    }
                }
                @media (max-width: 1338px) {
                    .hugs-text {
                        width: 1000px;
                        padding: 0;

                    }
                    .hugs-text h2 {
                        font-size: 64px;
                    }
                    .about-text1{
                      margin-bottom: 20px;
                    }
                }

                @media (max-width: 1200px) {
                    .hugs-text {
                        width: 700px;
                        padding: 0;
                    }
                    .hugs-text h2 {
                        font-size: 54px;
                    }
                }

                @media (max-width: 1080px) {
                    .hugs-text {
                        width: 100%;
                        padding: 50px;
                        align-items: flex-start;
                    }

                    .hugs-text h2 {
                        font-size: 36px;
                        line-height: 54px;
                        width: 500px;
                    }

                    .hugs-animation {
                        width: 100%;
                        padding: 50px 0;
                        height: 100%;
                    }
                }

                @media (max-width: 468px) {
                    .hugs-text {
                        width: 100%;
                        padding: 20px;
                    }

                    .hugs-text h2 {
                        font-size: 38px;
                        line-height: 38px;
                        text-align: center;
                    }

                    .hugs-animation {
                        display: none;
                    }

                    .hugs-responsive {
                    width: 100%;
                    max-width: 450px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }


                .slider1 {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    border-radius: 0px;
                    box-shadow: 0;
                }

                .slider1-content {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                .slider1-images-wrapper {
                    display: flex;
                    width: 100%;
                    height: 100%;
                }

                .slide {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    flex-shrink: 0;
                    width: 100%;
                }

                .slider1-image {
                    width: 350px;
                    height: auto;
                    display: block;
                }

                .slider1-text {
                    margin-top: 10px;
                    font-size: 90px;
                    font-weight: bold;
                    -webkit-text-stroke: 1px black;
                    color: white;
                    text-align: center;

                }

                .slider1-button {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    z-index: 10;
                }

                .slider1-button.prev {
                    left: 10px;
                    font-size: 20px;
                }

                .slider1-button.next {
                    right: 10px;
                    font-size: 20px;
                }

                .slider1-button {
                    background-color: rgba(0, 0, 0, 0.75);
                    box-shadow: 6px 6px 0px 0px #000;
                    transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
                }

                .slider1-button:hover,
                .slider1-button:focus-visible {
                    background-color: #000;
                    transform: translate(-4px, -4px);
                    box-shadow: 10px 10px 0px 0px #000;
                }

                .slider1-button:active {
                    transform: translate(-2px, -2px);
                }
                }
            `}</style>
        </>
    );
};

export default Animation;

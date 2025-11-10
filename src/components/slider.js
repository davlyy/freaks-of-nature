import React, { useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import fallbackImage from "../assets/Egroup.png";

const Slider = ({ images = [], autoPlayInterval = 3000 }) => {
    const slides = useMemo(() => {
        if (Array.isArray(images) && images.length > 0) {
            return images.filter(Boolean);
        }
        return [fallbackImage];
    }, [images]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, [slides.length]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    }, [slides.length]);

    useEffect(() => {
        setCurrentIndex(0);
    }, [slides]);

    useEffect(() => {
        if (slides.length <= 1) {
            return undefined;
        }

        const interval = setInterval(() => {
            handleNext();
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [handleNext, slides.length, autoPlayInterval]);

    return (
        <div className="slider">
            <div className="slider-content">
                <div
                    className="slider-images-wrapper"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: "transform 0.5s ease-in-out",
                    }}
                >
                    {slides.map((image) => (
                        <img key={image} src={image} alt="Episode slide" className="slider-image" />
                    ))}
                </div>
                <button className="slider-button prev" onClick={handlePrev}>
                    &#8249; 
                </button>
                <button className="slider-button next" onClick={handleNext}>
                    &#8250; 
                </button>
            </div>

            <style>{`
                .slider {
                    position: relative;
                    width: 100%;
                    max-width: 910px;
                    margin: 0 auto;
                    overflow: hidden;
                    border-radius: 25px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    height: 100%;
                }

                .slider-content {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                .slider-images-wrapper {
                    display: flex;
                    width: 100%;
                    height: 100%;
                }

                .slider-image {
                    width: 100%;
                    height: 100%;
                    display: block;
                    flex-shrink: 0;
                    object-fit: cover;
                }
                .slider-button {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background-color: rgba(0, 0, 0, 0);
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

                .slider-button.prev {
                    left: 10px;
                    font-size: 34px;
                }

                .slider-button.next {
                    right: 10px;
                    font-size: 34px;
                }

                @media (max-width: 468px){

                   .slider {
                    
                      border-radius: 20px;
                      box-shadow: none;
                      box-shadow: 5px 5px 0px  0 #000;
                   }

                  .slider-button {
                    
                      background-color: rgba(0, 0, 0, 0.5);
                  }
                }

            `}</style>
        </div>
    );
};

export default Slider;

Slider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
    autoPlayInterval: PropTypes.number,
};

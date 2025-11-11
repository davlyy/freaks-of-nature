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
    const [loadedSlides, setLoadedSlides] = useState(() => slides.map(() => false));
    const intervalRef = React.useRef(null);

    const clearAutoPlay = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    const startAutoPlay = useCallback(() => {
        if (slides.length <= 1 || autoPlayInterval <= 0) {
            return;
        }

        clearAutoPlay();
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        }, autoPlayInterval);
    }, [autoPlayInterval, clearAutoPlay, slides.length]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        startAutoPlay();
    }, [slides.length, startAutoPlay]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
        startAutoPlay();
    }, [slides.length, startAutoPlay]);

    useEffect(() => {
        setLoadedSlides(slides.map(() => false));
    }, [slides]);

    const handleImageLoad = useCallback((index) => {
        setLoadedSlides((prev) => {
            if (prev[index]) {
                return prev;
            }
            const updated = [...prev];
            updated[index] = true;
            return updated;
        });
    }, []);

    const handleImageError = useCallback((event, index) => {
        if (event.target.src !== fallbackImage) {
            event.target.src = fallbackImage;
            return;
        }
        handleImageLoad(index);
    }, [handleImageLoad]);

    useEffect(() => {
        setCurrentIndex(0);
    }, [slides]);

    useEffect(() => {
        startAutoPlay();
        return clearAutoPlay;
    }, [startAutoPlay, clearAutoPlay]);

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
                    {slides.map((image, index) => (
                        <div
                            className="slider-slide"
                            key={`${image}-${index}`}
                            aria-busy={!loadedSlides[index]}
                        >
                            {!loadedSlides[index] && (
                                <div className="slider-placeholder" aria-hidden="true" />
                            )}
                            <img
                                src={image}
                                alt="Episode slide"
                                className={`slider-image${loadedSlides[index] ? " loaded" : ""}`}
                                loading="lazy"
                                onLoad={() => handleImageLoad(index)}
                                onError={(event) => handleImageError(event, index)}
                            />
                        </div>
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

                .slider-slide {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-shrink: 0;
                    border-radius: inherit;
                    overflow: hidden;
                }

                .slider-placeholder {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        rgba(240, 240, 240, 0.9) 25%,
                        rgba(224, 224, 224, 0.9) 37%,
                        rgba(240, 240, 240, 0.9) 63%
                    );
                    background-size: 400% 100%;
                    animation: slider-placeholder-shimmer 1.4s ease infinite;
                }

                .slider-image {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: cover;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }

                .slider-image.loaded {
                    opacity: 1;
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

                @keyframes slider-placeholder-shimmer {
                    0% {
                        background-position: 200% 0;
                    }
                    100% {
                        background-position: -200% 0;
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

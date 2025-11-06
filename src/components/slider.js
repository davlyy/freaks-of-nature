import React, { useState, useEffect, useCallback } from "react";
import img from "../assets/Egroup.png";

const Slider = () => {
    const images = [img, img, img]; 
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, [images.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval); 
    }, [handleNext]);

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
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Slide ${index + 1}`} className="slider-image" />
                    ))}
                </div>
                <button className="slider-button prev" onClick={handlePrev}>
                    &#8249; 
                </button>
                <button className="slider-button next" onClick={handleNext}>
                    &#8250; 
                </button>
            </div>

            <style jsx>{`
                .slider {
                    position: relative;
                    width: 100%;
                    max-width: 910px;
                    margin: 0 auto;
                    overflow: hidden;
                    border-radius: 25px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
                    height: auto;
                    display: block;
                    flex-shrink: 0;
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

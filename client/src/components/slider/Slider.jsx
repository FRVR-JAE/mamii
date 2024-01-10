import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";
import { useNavigate } from "react-router-dom";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const slideLength = sliderData.length;
  const autoScroll = true;

  const intervalTime = 5000;
  let slideInterval;

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideLength - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slideLength - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const auto = () => {
      slideInterval = setInterval(() => {
        nextSlide();
      }, intervalTime);
    };

    if (autoScroll) {
      auto();
    }

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide, autoScroll]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

      {sliderData.map((slide, index) => {
        const {image, heading, desc} = slide
        return (
          <div
            key={index}
            className={index === currentSlide ? "slide active" : "slide"}
          >
            {/* slider items */}
            <img src={image} alt={heading} />
            <div className="content">
              <span className="span1"></span>
              <span className="span2"></span>
              <span className="span3"></span>
              <span className="span4"></span>
              <h2>{heading}</h2>
              <p>{desc}</p>
              <hr />
              <button
                className="--btn --btn-primary"
                onClick={() => navigate("/shop")}
              >
                Shop Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;

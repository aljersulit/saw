import { React, useState, useEffect } from "react";
import assets from "../../assets/";
import "./hero.scss";

function Hero() {
  const [activeSlider, setActiveSlider] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sliderItems = [
    {
      img: assets.heroSlider1,
      subtitle: "Traditional & Hygienic",
      upperTitle: "For the love of",
      lowerTitle: "delicious food",
    },
    {
      img: assets.heroSlider2,
      subtitle: "Delightful Experience",
      upperTitle: "Flavors inspired by",
      lowerTitle: "the Seasons",
    },
    {
      img: assets.heroSlider3,
      subtitle: "Amazing & Delicious",
      upperTitle: "Where every flavor",
      lowerTitle: "tells a story",
    },
  ];

  // NEXT SLIDE
  const slideNext = () => {
    setActiveSlider((prevSlide) => {
      if (prevSlide >= sliderItems.length - 1) {
        return 0;
      } else {
        return prevSlide + 1;
      }
    });
  };

  // PREVIOUS SLIDE
  const slidePrev = () => {
    setActiveSlider((prevSlide) => {
      if (prevSlide <= 0) {
        return sliderItems.length - 1;
      } else {
        return prevSlide - 1;
      }
    });
  };

  // AUTO SLIDING

  useEffect(() => {
    let autoSlideInterval;
    const autoSlide = function () {
      autoSlideInterval = setInterval(() => {
        slideNext();
      }, 7000);
    };
    if (!isPaused) {
      autoSlide();
    } else {
      clearInterval(autoSlideInterval);
    }
    return () => clearInterval(autoSlideInterval);
  }, [sliderItems.length, isPaused]);

  return (
    <section className="hero" id="home" aria-label="home">
      <ul>
        {sliderItems.map((item, index) => (
          <li
            key={index}
            className={`slider-item ${activeSlider === index ? "active" : ""}`}
          >
            <div className="slider-bg">
              <img
                src={item.img}
                alt={`sliderBg${index}`}
                width={1880}
                height={950}
                className="img-cover"
              />
            </div>

            <p className="label-2 section-subtitle slider-reveal">
              {item.subtitle}
            </p>

            <h1 className="display-1 hero-title slider-reveal">
              {item.upperTitle} <br />
              {item.lowerTitle}
            </h1>

            <p className="body-2 hero-text slider-reveal">
              Come with your family & feel the joy of mouthwatering food
            </p>

            <a href="#" className="btn btn-primary slider-reveal">
              <span className="text text-1">View Our Menu</span>
              <span className="text text-2" aria-hidden="true">
                View Our Menu
              </span>
            </a>
          </li>
        ))}
      </ul>

      <button
        className="slider-btn prev"
        aria-label="slide to previous"
        onClick={slidePrev}
        onMouseOver={() => {
          setIsPaused(true);
        }}
        onMouseOut={() => {
          setIsPaused(false);
        }}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        className="slider-btn next"
        aria-label="slide to next"
        onClick={slideNext}
        onMouseOver={() => {
          setIsPaused(true);
        }}
        onMouseOut={() => {
          setIsPaused(false);
        }}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </section>
  );
}

export default Hero;

import { React, useRef } from "react";

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import assets from "../../assets";
import "./gallery.scss";

function Gallery() {
  const images = [
    assets.gallery01,
    assets.gallery02,
    assets.gallery03,
    assets.gallery04,
  ];
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <section
      className="section gallery text-center"
      id="gallery"
      aria-label="Gallery"
      data-content
    >
      <div className="container">
        <div className="gallery-content">
          <p className="section-subtitle label-2">Instagram</p>

          <h2 className="headline-1 section-title">Photo Gallery</h2>

          <p className="section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            reiciendis fugiat pariatur corporis quos quod nobis, quis rerum
            suscipit beatae eveniet iure porro laboriosam saepe odio nemo
            doloribus quam, earum esse? Consequatur, ab! Dolor reiciendis
            voluptates itaque. Modi tenetur suscipit reprehenderit fuga
            praesentium dolor, amet maiores, distinctio error tempore excepturi
            sequi quasi unde.
          </p>

          <a href="#" className="btn btn-primary">
            <span className="text text-1">View More</span>

            <span className="text text-2" aria-hidden="true">
              View More
            </span>
          </a>
        </div>

        <div className="gallery-slider">
          <div className="images-container" ref={scrollRef}>
            {images.map((image, index) => (
              <div
                className="image-card flex__center"
                key={`gallery-image-${index + 1}`}
              >
                <img src={image} alt={`gallery-image-${index + 1}`} />
                <BsInstagram className="img-icon" />
              </div>
            ))}
          </div>

          <div className="slider-control">
            <BsArrowLeftShort
              className="arrow-icon"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="arrow-icon"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;

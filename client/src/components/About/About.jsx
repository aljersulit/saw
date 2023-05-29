import React from "react";
import "./about.scss";
import assets from "../../assets";

function About() {
  return (
    <section
      className="section about bg-black-10 text-center"
      aria-labelledby="about-label"
      id="about"
      data-content
    >
      <div className="container">
        <div className="about-content">
          <p className="label-2 section-subtitle" id="about-label">
            Our Story
          </p>

          <h2 className="headline-1 section-title">
            Every Flavor Tells a Story
          </h2>

          <p className="section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            reiciendis fugiat pariatur corporis quos quod nobis, quis rerum
            suscipit beatae eveniet iure porro laboriosam saepe odio nemo
            doloribus quam, earum esse? Consequatur, ab! Dolor reiciendis
            voluptates itaque. Modi tenetur suscipit reprehenderit fuga
            praesentium dolor, amet maiores, distinctio error tempore excepturi
            sequi quasi unde.
          </p>

          <div className="contact-label">Book Through Call</div>

          <a
            href="tel:+639560719222"
            className="body-1 contact-number hover-underline"
          >
            +63-956-071-9222
          </a>

          <a href="#" className="btn btn-primary">
            <span className="text text-1">Read More</span>

            <span className="text text-2" aria-hidden="true">
              Read More
            </span>
          </a>
        </div>

        <figure className="about-banner">
          <img
            src={assets.aboutBanner}
            width={570}
            height={570}
            alt="about banner"
            className="w-100"
            data-parallax-item
            data-parallax-speed="1"
          />

          <div
            className="abs-img abs-img-1 has-before"
            data-parallax-item
            data-parallax-speed="1.75"
          >
            <img
              src={assets.aboutAbsImage}
              width={285}
              height={285}
              alt="abs"
              className="w-100"
            />
          </div>

          <div className="abs-img abs-img-2 has-before">
            <img src={assets.badge2} width={133} height={134} alt="badge2" />
          </div>

          <img
            src={assets.shape3}
            width={197}
            height={194}
            alt="shape3"
            className="shape"
          />
        </figure>
      </div>
    </section>
  );
}

export default About;

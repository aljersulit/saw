import React from "react";
import { IoMailOutline } from "react-icons/io5";
import assets from "../../assets";
import "./footer.scss";

function Footer() {
  return (
    <section className="section has-bg-image last" id="contact" data-content>
      <footer className="footer text-center">
        <div className="container">
          <div className="footer-top grid-list">
            <div className="footer-brand has-before has-after">
              <a href="#home" className="logo">
                <img
                  src={assets.logo}
                  width={160}
                  height={50}
                  loading="lazy"
                  alt="SAW home"
                />
              </a>

              <address className="body-4">
                Seaoil McArthur Highway, Dakila, Malolos City, Bulacan, Malolos,
                PH
              </address>

              <a
                href="mailto:steakandwinecustomer@gmail.com"
                className="body-4 contact-link"
              >
                steakandwine- customer@gmail.com
              </a>

              <a href="tel:+639560719222" className="body-4 contact-link">
                Booking Request: +63-956-071-9222
              </a>

              <p className="body-4">Open : 09:00 am - 01:00 pm</p>

              <div className="wrapper">
                <div className="separator"></div>
                <div className="separator"></div>
                <div className="separator"></div>
              </div>

              <p className="title-1">Get News & Offers</p>

              <p className="label-1">
                Subscribe us & Get <span className="span">25% Off.</span>
              </p>

              <form action="" className="input-wrapper">
                <div className="icon-wrapper">
                  <IoMailOutline className="ion-icon" aria-hidden="true" />

                  <input
                    type="email"
                    name="email_address"
                    placeholder="Your email"
                    autoComplete="off"
                    className="input-field"
                  />
                </div>

                <button type="submit" className="btn btn-secondary">
                  <span className="text text-1">Subscribe</span>

                  <span className="text text-2" aria-hidden="true">
                    Subscribe
                  </span>
                </button>
              </form>
            </div>

            <ul className="footer-list">
              <li>
                <a href="#home" className="label-2 footer-link hover-underline">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="label-2 footer-link hover-underline"
                >
                  About
                </a>
              </li>

              <li>
                <a href="#menu" className="label-2 footer-link hover-underline">
                  Menu
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="label-2 footer-link hover-underline"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a href="#menu" className="label-2 footer-link hover-underline">
                  Menu
                </a>
              </li>

              <li>
                <a
                  href="#location"
                  className="label-2 footer-link hover-underline"
                >
                  Find Us
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="label-2 footer-link hover-underline"
                >
                  Contact
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                  Facebook
                </a>
              </li>

              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                  Instagram
                </a>
              </li>

              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                  Twitter
                </a>
              </li>

              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                  Youtube
                </a>
              </li>

              <li>
                <a href="#" className="label-2 footer-link hover-underline">
                  Google Map
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              &copy; 2023 Steak & Wine. All Rights Reserved | Crafted by{" "}
              <a
                href="https://github.com/aljersulit"
                target="_blank"
                className="link"
              >
                aljersulit
              </a>
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;

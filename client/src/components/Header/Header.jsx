import { React, useEffect } from "react";
import "./header.scss";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../../assets/SAWlogo.png";

function Header(props) {
  const { setAppState, isNavActive, headerStatus, prevScrollPos } = props;

  const toggleNavbar = () => {
    setAppState((prev) => {
      return {
        ...prev,
        isNavActive: !prev.isNavActive,
      };
    });
  };

  // HEADER STATUS SCROLL EVENT
  useEffect(() => {
    const handleScroll = () => {
      setAppState((prev) => {
        const isScrollDownward = prevScrollPos < window.scrollY;
        let newStatus;
        if (window.scrollY >= 50) {
          newStatus = {
            ...prev,
            headerStatus: {
              active: true,
              hidden: isScrollDownward,
            },
          };
        } else {
          newStatus = {
            ...prev,
            headerStatus: {
              active: false,
              hidden: false,
            },
          };
        }
        setAppState((prev) => ({
          ...prev,
          prevScrollPos: window.scrollY,
        }));
        return newStatus;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setAppState, prevScrollPos]);

  return (
    <header
      className={`header ${headerStatus.active ? "active" : ""} ${
        headerStatus.hidden ? "hide" : ""
      }`}
    >
      <div className="container">
        <a href="#" className="logo1">
          <img
            className={headerStatus.active ? "shrink" : ""}
            src={logo}
            alt="logo"
            width={50}
            height={50}
          />
        </a>

        <nav className={`navbar ${isNavActive ? "active" : ""}`}>
          <button
            className="close-btn"
            aria-label="close menu"
            onClick={toggleNavbar}
          >
            <IoCloseOutline className="ion-icon" />
          </button>

          <a href="#" className="logo2">
            <img src={logo} alt="logo" width={50} height={50} />
          </a>

          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link hover-underline active">
                <div className="separator"></div>

                <span className="span">Home</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#menu" className="navbar-link hover-underline active">
                <div className="separator"></div>

                <span className="span">Menu</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#gallery" className="navbar-link hover-underline active">
                <div className="separator"></div>

                <span className="span">Gallery</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#reviews" className="navbar-link hover-underline active">
                <div className="separator"></div>

                <span className="span">Reviews</span>
              </a>
            </li>

            <li className="navbar-item">
              <a
                href="#location"
                className="navbar-link hover-underline active"
              >
                <div className="separator"></div>
                <span className="span">Location</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#contact" className="navbar-link hover-underline active">
                <div className="separator"></div>
                <span className="span">Contact</span>
              </a>
            </li>
          </ul>

          <div className="text-center">
            <p className="headline-1 navbar-title">Visit Us</p>

            <address className="body-4">
              Seaoil McArthur Highway, Dakila, Malolos City, <br />
              Bulacan, Malolos, Philippines
            </address>

            <p className="body-4 navbar-text">Open: 10:00am - 9:00pm</p>

            <a
              href="mailto:steakandwinecustomer@gmail.com"
              className="body-4 sidebar-email"
            >
              steakandwinecustomer@gmail.com
            </a>

            <div className="separator"></div>

            <p className="contact-label">Booking Request</p>

            <a
              href="tel:+639560719222"
              className="body-1 contact-number hover-underline"
            >
              +63-956-071-9222
            </a>
          </div>
        </nav>

        <a href="#" className="btn btn-secondary">
          <span className="text text-1">Find a Table</span>

          <span className="text text-2" aria-hidden="true">
            Find a Table
          </span>
        </a>

        <button
          className="nav-open-btn"
          aria-label="open menu"
          onClick={toggleNavbar}
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>

        <div
          className={`overlay ${isNavActive ? "active" : ""}`}
          data-overlay
          onClick={toggleNavbar}
        ></div>
      </div>
    </header>
  );
}

export default Header;

import { React, useEffect } from "react";
import "./header.scss";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../../assets/SAWlogo.png";

function Header(props) {
  const {
    setAppState,
    isNavActive,
    headerStatus,
    prevScrollPos,
    activeSection,
  } = props;

  const openNavbar = () => {
    console.log("open!!!!!");
    setAppState((prev) => {
      return {
        ...prev,
        isNavActive: true,
      };
    });
  };

  const closeNavbar = () => {
    console.log("close!!!!!");
    setAppState((prev) => {
      return {
        ...prev,
        isNavActive: false,
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

  useEffect(() => {
    // const options = {
    //   rootMargin: `0px 0px 0px -100%`,
    // };

    // const handleIntersection = (entries, observer) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       setAppState((prev) => ({
    //         ...prev,
    //         activeSection: entry.target.id,
    //       }));
    //     }
    //   });
    // };

    // const observer = new IntersectionObserver(handleIntersection, options);
    // const sections = document.querySelectorAll("section[data-content]");

    // sections.forEach((section) => {
    //   observer.observe(section);
    // });

    // return () => {
    //   sections.forEach((section) => {
    //     observer.unobserve(section);
    //   });
    // };

    const sections = document.querySelectorAll("section[data-content]");

    const handleScroll = () => {
      sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setAppState((prev) => ({
            ...prev,
            activeSection: id,
          }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setAppState]);

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
            onClick={closeNavbar} // closeNavbar
          >
            <IoCloseOutline className="ion-icon" />
          </button>

          <a href="#" className="logo2">
            <img src={logo} alt="logo" width={50} height={50} />
          </a>

          <ul className="navbar-list">
            {["home", "about", "gallery", "menu", "location", "contact"].map(
              (section, index) => {
                return (
                  <li className="navbar-item" key={index}>
                    <a
                      href={`#${section}`}
                      className={`navbar-link hover-underline ${
                        activeSection === section ? "active" : ""
                      }`}
                      onClick={closeNavbar} // closeNavbar
                    >
                      <div className="separator"></div>

                      <span className="span">
                        {section === "about"
                          ? "About Us"
                          : section === "location"
                          ? "Find Us"
                          : section}
                      </span>
                    </a>
                  </li>
                );
              }
            )}
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
          onClick={openNavbar} // openNavbar
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>

        <div
          className={`overlay ${isNavActive ? "active" : ""}`}
          data-overlay
          onClick={closeNavbar} // closeNavbar
        ></div>
      </div>
    </header>
  );
}

export default Header;

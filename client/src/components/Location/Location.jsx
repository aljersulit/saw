import { React, useState } from "react";
import {
  IoChevronDown,
  IoLocationOutline,
  IoCloseOutline,
} from "react-icons/io5";
import "./location.scss";

function Location({ setAppState, isMapActive }) {
  const [branchLocation, setBranchLocation] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61709.07571599631!2d120.76155724247383!3d14.835512269162756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339653cd873cb2a9%3A0x60a5abca311442e8!2sSteak%20and%20Wine%20Unlimited%20Malolos%20Branch!5e0!3m2!1sen!2sph!4v1683534956113!5m2!1sen!2sph"
  );

  const handleChange = (event) => {
    const { value } = event.target;
    const branches = {
      malolos:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61709.07571599631!2d120.76155724247383!3d14.835512269162756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339653cd873cb2a9%3A0x60a5abca311442e8!2sSteak%20and%20Wine%20Unlimited%20Malolos%20Branch!5e0!3m2!1sen!2sph!4v1683534956113!5m2!1sen!2sph",
      bocaue:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61724.89130691828!2d120.86374742167966!3d14.779971200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b3ca7197d4f1%3A0xbe318941bb87a95e!2sSteak%20and%20Wine%20Bocaue!5e0!3m2!1sen!2sph!4v1683605419979!5m2!1sen!2sph",
      qc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61741.21408263644!2d120.98100712167967!3d14.722434200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b1b189ff167d%3A0x755078a491168a47!2sSteak%20and%20Wine%20Commonwealth%20Branch!5e0!3m2!1sen!2sph!4v1683605555372!5m2!1sen!2sph",
      valenzuela:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61749.55556905383!2d120.89680422167967!3d14.6929458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b5dfb532f093%3A0x22a0286ad5d18ee0!2sSteak%20and%20Wine%20Valenzuela!5e0!3m2!1sen!2sph!4v1683605630483!5m2!1sen!2sph",
      baliwag:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.4621367410036!2d120.90065770660962!3d14.96703004455697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339701f851b1f8c1%3A0xa5045708a9498f4b!2sSTEAK%20AND%20WINE%20Unlimited%20Baliuag%20Branch!5e0!3m2!1sen!2sph!4v1683605814667!5m2!1sen!2sph",
    };

    setBranchLocation(branches[value]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAppState((prev) => ({
      ...prev,
      isMapActive: true,
    }));
  };

  const handleCloseBtn = () => {
    setAppState((prev) => ({
      ...prev,
      isMapActive: false,
    }));
  };

  return (
    <section
      className="location"
      id="location"
      aria-label="Location"
      data-content
    >
      <div className="container">
        <div className="form location-form bg-black-10">
          <form onSubmit={handleSubmit} className="form-left">
            <h2 className="headline-1 text-center">Find Us</h2>

            <p className="form-text text-center">
              Booking request{" "}
              <a href="tel:+639560719222" className="link">
                +63-956-071-9222
              </a>{" "}
              or fill out the order form
            </p>

            <div className="input-wrapper">
              <div className="icon-wrapper">
                <IoLocationOutline aria-hidden="true" className="ion-icon" />
                <select
                  name="branch"
                  id="branch"
                  className="input-field"
                  onChange={handleChange}
                >
                  <option value="malolos">Malolos(main)</option>
                  <option value="bocaue">Bocaue</option>
                  <option value="qc">Quezon City</option>
                  <option value="baliwag">Baliwag</option>
                  <option value="valenzuela">Valenzuela</option>
                </select>

                <IoChevronDown aria-hidden="true" className="ion-icon" />
              </div>
            </div>

            <button type="submit" className="btn btn-secondary">
              <span className="text text-1">Show Location</span>
              <span className="text text-2" aria-hidden="true">
                Show Location
              </span>
            </button>
          </form>

          <div className="form-right text-center">
            <h2 className="headline-1 text-center">Contact Us</h2>

            <p className="contact-label">Booking Request</p>

            <a
              href="tel:+639560719222"
              className="body-1 contact-number hover-underline"
            >
              +63-956-071-9222
            </a>

            <div className="separator" />

            <p className="contact-label">Email</p>

            <p className="body-4">steakandwinecustomer@gmail.com</p>

            <div className="separator" />

            <p className="contact-label">Monday to Friday</p>

            <p className="body-4">10:00 am - 9:00 pm</p>

            <p className="contact-label">Saturday to Sunday</p>

            <p className="body-4">10:00 am - 10:00 pm</p>
          </div>
        </div>
      </div>

      <div className={`map-container ${isMapActive ? "active" : ""}`}>
        <button
          className="close-btn"
          aria-label="close menu"
          onClick={handleCloseBtn}
        >
          <IoCloseOutline className="ion-icon" />
        </button>

        <iframe
          className="map"
          src={branchLocation}
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Malolos Branch"
        ></iframe>
      </div>
    </section>
  );
}

export default Location;

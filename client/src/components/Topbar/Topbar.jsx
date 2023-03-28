import React from "react";

function Topbar() {
  return (
    <div className="topbar">
      <div className="container">
        <address className="topbar-item">
          <div className="icon">
            {/* <ion-icon name="location-outline" aria-hidden="true"></ion-icon> */}
          </div>

          <span className="span">
            Restaurant St, Delicious City, London 9578, UK
          </span>
        </address>

        <div className="separator"></div>

        <div className="topbar-item item-2">
          <div className="icon">
            {/* <ion-icon name="time-outline" aria-hidden="true"></ion-icon> */}
          </div>

          <span className="span">Daily : 8:00 am to 10:00 pm</span>
        </div>

        <a href="tel:" className="topbar-item">
          <div className="icon">
            {/* <ion-icon name="call-outline" aria-hidden="true"></ion-icon> */}
          </div>

          <span className="span">0999999999</span>
        </a>

        <div className="separtor"></div>

        <a href="mailto:booking@restaurant.com" className="topbar-item">
          <div className="icon">
            {/* <ion-icon name="mail-outline" aria-hidden="true"></ion-icon> */}
          </div>

          <span className="span">booking@restaurant.com</span>
        </a>
      </div>
    </div>
  );
}

export default Topbar;

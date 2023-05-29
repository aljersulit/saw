import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import "./map.scss"

function Map({setAppState, isMapActive}) {

  return (
    <div className={`map-container ${isMapActive ? "active" : ""}`}>
        <button
            className="close-btn"
            aria-label="close menu"
            onClick={handleCloseBtn}
        >
            <IoCloseOutline className="ion-icon" />
        </button>

        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61709.07571599631!2d120.76155724247383!3d14.835512269162756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339653cd873cb2a9%3A0x60a5abca311442e8!2sSteak%20and%20Wine%20Unlimited%20Malolos%20Branch!5e0!3m2!1sen!2sph!4v1683534956113!5m2!1sen!2sph" 
        width="400" 
        height="300" 
        style={{border: 0}}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Malolos Branch"></iframe>
    </div>
  )
}

export default Map
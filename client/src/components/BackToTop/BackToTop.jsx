import React from 'react'
import { IoChevronUp } from "react-icons/io5";
import "./backToTop.scss";

function BackToTop({ active }) {
  return (
    <a href="#home" className={`back-top-btn ${active ? "active" : "" }`} aria-label='back to top' data-back-top-btn>
        <IoChevronUp className='ion-icon' aria-hidden="true" />
    </a>
  )
}

export default BackToTop
import React from 'react'
import assets from '../../assets';
import "./testimonials.scss"

function Testimonials() {
  return (
    <section className="section testi text-center has-bg-image" aria-label="testimonials">
        <div className="container">
            <div className="quote">”</div>

            <p className="headline-2 testi-text">
                I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.
            </p>

            <div className="wrapper">
                <div className="separator" />
                <div className="separator" />
                <div className="separator" />
            </div>

            <div className="profile">
                <img className='img' src={assets.testiAvatar} width={100} height={100} loading='lazy' alt="Sam Johnson" />
            </div>

            <p className="label-2 profile-name">Sam Johnson</p>
        </div>
    </section>
  )
}

export default Testimonials
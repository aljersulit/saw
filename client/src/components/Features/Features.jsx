import React from 'react'
import assets from "../../assets";
import "./features.scss";

function Features() {
  return (
    <section className="section features text-center" aria-label='features'>
        <div className="container">
            <p className="section-subtitle label-2">
                Why Choose Us?
            </p>

            <h2 className='headline-1 section-title'>
              Our Strength
            </h2>

            <ul className='grid-list'>

              <li className='feature-item'>
                <div className="feature-card">

                  <div className='card-icon'>
                    <img src={assets.icon1} width={100} height={80} loading='lazy' alt="Feature icon" />
                  </div>

                  <h3 className="title-2 card-title">Hygienic Food</h3>

                  <p className="label-1 card-text">Lorem ipsum simply dummy printing and typesetting.</p>

                </div>
              </li>

              <li className='feature-item'>
                <div className="feature-card">

                  <div className='card-icon'>
                    <img src={assets.icon2} width={100} height={80} loading='lazy' alt="Feature icon" />
                  </div>

                  <h3 className="title-2 card-title">Fresh Environment</h3>

                  <p className="label-1 card-text">Lorem ipsum simply dummy printing and typesetting.</p>

                </div>
              </li>

              <li className='feature-item'>
                <div className="feature-card">

                  <div className='card-icon'>
                    <img src={assets.icon3} width={100} height={80} loading='lazy' alt="Feature icon" />
                  </div>

                  <h3 className="title-2 card-title">Skilled Chefs</h3>

                  <p className="label-1 card-text">Lorem ipsum simply dummy printing and typesetting.</p>

                </div>
              </li>

              <li className='feature-item'>
                <div className="feature-card">

                  <div className='card-icon'>
                    <img src={assets.icon4} width={100} height={80} loading='lazy' alt="Feature icon" />
                  </div>

                  <h3 className="title-2 card-title">Event & Party</h3>

                  <p className="label-1 card-text">Lorem ipsum simply dummy printing and typesetting.</p>

                </div>
              </li>

            </ul>
        </div>
    </section>
  )
}

export default Features
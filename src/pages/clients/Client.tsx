import React from 'react'
import './client.css'

const Client = () => {
  return (
    <div>
        <section id="clients" className="clients">
        <div className="container">
          <div className="owl-carousel owl-theme" id="client">
            <div className="item">
              <a href="#">
                <img src="assets/images/c1.png" alt="brand-image" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="assets/images/c2.png" alt="brand-image" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="assets/images/c3.png" alt="brand-image" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="assets/images/c4.png" alt="brand-image" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="assets/images/c5.png" alt="brand-image" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Client
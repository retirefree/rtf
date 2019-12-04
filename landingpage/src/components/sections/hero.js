import React from 'react';

class Hero extends React.Component {
  render() {
    return (
      <div 
        className="hero-wrap" 
        style={{backgroundImage: "url('images/bg_2.jpg')"}} 
        data-stellar-background-ratio="0.5">

        <div className="overlay">
        </div>
        <div className="overlay-2"></div>
        <div className="container">
          <div className="row no-gutters slider-text justify-content-center align-items-center">
            <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-end">
              <div className="text text-center w-100">
                <h1 className="mb-4">See How to Invest<br/>in Annuities</h1>
                {/* <!-- <p><a href="#" className="btn btn-primary py-3 px-4">Search Quotes</a></p> --> */}
              </div>
            </div>
          </div>
        </div>
        <div className="mouse">
          <a href="#" className="mouse-icon">
            <div className="mouse-wheel"><span className="ion-ios-arrow-round-down"></span></div>
          </a>
        </div>
      </div>
    )
  }
}

export default Hero;

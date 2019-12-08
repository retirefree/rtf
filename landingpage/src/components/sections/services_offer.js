import React from 'react';

class ServicesOffer extends React.Component {
  render() {
    return (
      <section className="ftco-section ftco-fullwidth">
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 heading-section text-center ftco-animate mb-5">
              <span className="subheading">Services</span>
              <h2 className="mb-2">Why Annuities?</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0">
        <div className="row d-md-flex text-wrapper align-items-stretch">
          <div className="one-half mb-md-0 mb-4 img d-flex align-self-stretch" style={{backgroundImage: "url('images/RTF0.jpeg')"}}></div>
          <div className="one-half half-text d-flex justify-content-end align-items-center">
            <div className="text-inner pl-md-5">
              <div className="row d-flex">
                <div className="col-md-12 d-flex align-self-stretch ftco-animate">
                  <div className="media block-6 services-wrap d-flex">
                    <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-piggy-bank"></span></div>
                    <div className="media-body pl-4" align ="left">
                      <h3>Guaranteed income</h3>
                      <p>Annuities can help prevent you and your spouse from running out of money in retirement and protect you from inflation.</p>
                    </div>
                  </div>      
                </div>
                <div className="col-md-12 d-flex align-self-stretch ftco-animate">
                  <div className="media block-6 services-wrap d-flex">
                    <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-wallet"></span></div>
                    <div className="media-body pl-4" align ="left">
                      <h3>Competitive rates</h3>
                      <p>Annuities provide competitive rates compared to other low-risk investments.</p>
                    </div>
                  </div>      
                </div>
                <div className="col-md-12 d-flex align-self-stretch ftco-animate">
                  <div className="media block-6 services-wrap d-flex">
                    <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-file"></span></div>
                    <div className="media-body pl-4" align ="left">
                      <h3>Tax-deferred growth</h3>
                      <p>Annuities enable you to to accumulate your assets without being taxed.</p>
                    </div>
                  </div>      
                </div>
                <div className="col-md-12 d-flex align-self-stretch ftco-animate">
                  <div className="media block-6 services-wrap d-flex">
                    <div className="icon d-flex justify-content-center align-items-center"><span className="flaticon-locked"></span></div>
                    <div className="media-body pl-4" align ="left">
                      <h3>Leave a legacy</h3>
                      <p>Most annuities allow you choose a beneficiary to receive benefits in the event that you die early.</p>
                    </div>
                  </div>      
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    )
  }
}

export default ServicesOffer;

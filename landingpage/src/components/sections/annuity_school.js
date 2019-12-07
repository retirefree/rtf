import React from 'react';
import { NavLink } from 'react-router-dom';

class AnnuitySchool extends React.Component {
  render() {
    return (
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Learn</span>
            <h2>Annuity School</h2>
          </div>
          </div>
          <div className="row d-flex">
        <div className="col-md-3 d-flex ftco-animate">
          <div className="blog-entry justify-content-end">
          <div className="text">
            <a href="/school#description-1" className="block-20 img" style={{backgroundImage: "url('images/image_1.jpg')"}}>
            </a>
            <h3 className="heading"><a href="/school#description-1">1. What is an annuity?</a></h3>
            <div className="meta mb-3">
            <div><a href="/school#description-1">Dec 1, 2019</a></div>
            </div>
          </div>
          </div>
        </div>
        <div className="col-md-3 d-flex ftco-animate">
          <div className="blog-entry justify-content-end">
          <div className="text">
            <a href="/school#description-2" className="block-20 img" style={{backgroundImage: "url('images/image_2.jpg')"}}>
            </a>
            <h3 className="heading">
              <a href="/school#description-2">2. Are annuities right for you?</a>
              </h3>
            <div className="meta mb-3">
            <div><a href="/school#description-2">Dec 3, 2019</a></div>
            </div>
          </div>
          </div>
        </div>        
        <div className="col-md-3 d-flex ftco-animate">
          <div className="blog-entry justify-content-end">
          <div className="text">
            <a href="/school#description-3" className="block-20 img" style={{backgroundImage: "url('images/image_3.jpg')"}}>
            </a>
            <h3 className="heading"><a href="/school#description-3">3. Annuity purchase FAQs</a></h3>
            <div className="meta mb-3">
            <div><a href="/school#description-3">Dec 5, 2019</a></div>
            </div>
          </div>
          </div>
        </div>
        <div className="col-md-3 d-flex ftco-animate">
          <div className="blog-entry justify-content-end">
          <div className="text">
            <a href="/school#description-4" className="block-20 img" style={{backgroundImage: "url('images/image_4.jpg')"}}>
            </a>
            <h3 className="heading"><a href="/school#description-4">4. How to buy annuities online?</a></h3>
            <div className="meta mb-3">
            <div><a href="/school#description-4">Dec 7, 2019</a></div>
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

export default AnnuitySchool;

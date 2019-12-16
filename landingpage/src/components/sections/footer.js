import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

class Footer extends React.Component {
  render() {
    return (
      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4" align="left">
                <h2 className="ftco-heading-2">Easy Annuities</h2>
                <p>The best retirement plan for you</p>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4" align="left">
                <h2 className="ftco-heading-2">About Easy Annuities</h2>
                <ul className="list-unstyled">
                  <li><NavLink exact to="/"><span className="icon-long-arrow-right mr-2"></span>Home</NavLink></li>
                  <li><NavLink exact to="/quotes"><span className="icon-long-arrow-right mr-2"></span>Quotes</NavLink></li>
                  <li><NavLink exact to="/contact"><span className="icon-long-arrow-right mr-2"></span>Contact us</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4" align="left">
                <h2 className="ftco-heading-2">Education</h2>
                <ul className="list-unstyled">
                  <li><Link to="/school#description-1"><span className="icon-long-arrow-right mr-2"></span>What are Annuities?</Link></li>
                  <li><Link to="/school#description-2"><span className="icon-long-arrow-right mr-2"></span>Are Annuities right for you?</Link></li>
                  <li><Link to="/school#description-3"><span className="icon-long-arrow-right mr-2"></span>FAQs</Link></li>
                  <li><Link to="/school#description-4"><span className="icon-long-arrow-right mr-2"></span>Buying Annuities Online</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4" align="left">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><a href="mailto:info@easyannuities.org?subject=Question about annuities&body=Hello, %0D%0A%0D%0AI would like to know more about annuities.%0D%0A%0D%0AThanks%0D%0A%0D%0A"><span className="icon icon-envelope pr-4"></span><span className="text">info@easyannuities.org</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy; 2019. All rights reserved
            </p>
          </div>
        </div>
        </div>
      </footer>
    )
  }
}

export default Footer;

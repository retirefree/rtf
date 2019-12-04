import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Findstate</h2>
                <p>Have the best plan for your retirement</p>
                <ul className="ftco-footer-social list-unstyled mt-5">
                  <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Community</h2>
                <ul className="list-unstyled">
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Search Quotes</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Reviews</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>FAQs</a></li>
                </ul>
              </div>
            </div>
            {/* <!-- <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">About Us</h2>
                <ul className="list-unstyled">
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Our Story</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Meet the team</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Careers</a></li>
                </ul>
              </div>
            </div> --> */}
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Company</h2>
                <ul className="list-unstyled">
          <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Our Story</a></li>
          <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Meet the team</a></li>
                  {/* <!-- <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Press</a></li> --> */}
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Contact</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2"></span>Careers</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    {/* <!-- <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li> --> */}
                    {/* <li><a href="#"><span className="icon icon-phone"></span><span className="text">+1 888 656 1234</span></a></li> */}
                    <li><a href="#"><span className="icon icon-envelope pr-4"></span><span className="text">info@easyannuities.org</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            </p>
          </div>
        </div>
        </div>
      </footer>
    )
  }
}

export default Footer;

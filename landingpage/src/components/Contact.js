import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
        <div>
          <section 
            class="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight" 
            style={{backgroundImage: "url('images/bg_v2.png')"}} 
            data-stellar-background-ratio="0.5">

            <div class="overlay"></div>
            <div class="overlay-2"></div>
            <div class="container">
              <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
                <div class="col-md-9 ftco-animate pb-5 mb-5 text-center">
                  <h1 class="mb-3 bread">Contact Us</h1>
                  <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>Contact <i class="ion-ios-arrow-forward"></i></span></p>
                </div>
              </div>
            </div>
          </section>

          <section class="ftco-section contact-section">
            <div class="container">
              <div class="row block-9 justify-content-center mb-5">
                <div class="col-md-6 align-items-stretch d-flex">
                  <form action="#" class="bg-light p-5 contact-form">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Your Name" />
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Your Email" />
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Subject" />
                    </div>
                    <div class="form-group">
                      <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                    </div>
                    <div class="form-group">
                      <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5" />
                    </div>
                  </form>
                </div>
                <div class="col-md-6 align-items-stretch d-flex">
                  <div id="map" class="bg-white border"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
  }
}

export default Contact;

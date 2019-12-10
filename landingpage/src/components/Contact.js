import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Loader from 'react-loader-spinner'

const BASE_URL = "https://koiehcvvmk.execute-api.us-east-2.amazonaws.com/prod";
const MESSAGE_URL=`${BASE_URL}/message`

export default function Contact() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [contactName, setContactName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = e => {
    e.preventDefault();

    const params = {
      "contact_name": contactName,
      "email_address": emailAddress,
      "subject": subject,
      "message": message
    };

    setLoading(true);
    fetch(MESSAGE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    }).then(() => {
      setShow(true);
      setLoading(false);
    });
  }
  return (
      <div>
        <section 
          className="hero-wrap hero-wrap-2 ftco-degree-bg js-fullheight" 
          style={{backgroundImage: "url('images/bg_v2.png')"}} 
          data-stellar-background-ratio="0.5">

          <div className="overlay"></div>
          <div className="overlay-2"></div>
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
              <div className="col-md-9 ftco-animate pb-5 mb-5 text-center">
                <h1 className="mb-3 bread">Contact Us</h1>
                <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward"></i></a></span> <span>Contact <i className="ion-ios-arrow-forward"></i></span></p>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section contact-section">
          <div className="container">
            <div className="row block-9 justify-content-center mb-5">
              <div className="col-md-6 align-items-stretch">
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                  <Toast.Body>Your message has been sent!</Toast.Body>
                </Toast>
                <form action="#" className="bg-light p-5 contact-form">
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="Your Name"
                      value={contactName}
                      onChange={e => setContactName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Your Email" 
                      value={emailAddress}
                      onChange={e => setEmailAddress(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Subject" 
                      value={subject}
                      onChange={e => setSubject(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <textarea 
                      name="" 
                      id="" 
                      cols="30" 
                      rows="7" 
                      className="form-control" 
                      placeholder="Message"
                      value={message}
                      onChange={e => setMessage(e.target.value)}></textarea>
                  </div>
                  <div className="form-group">
                    {
                      loading ? <Loader type="Oval" color="#7983ec"/> : <input 
                      type="submit" 
                      value="Send Message" 
                      className="btn btn-primary py-3 px-5" 
                      onClick={handleSendMessage}/>
                    } 
                  </div>
                </form>
              </div>
              {/* <div className="col-md-6 align-items-stretch d-flex">
                <div id="map" className="bg-white border"></div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
  );
}

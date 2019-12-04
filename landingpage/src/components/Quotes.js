import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import qs from 'qs';

import AnnuityTable from './sections/annuity_table';
import InvestmentAmountInput from './sections/amount_input';
import FederalStateSelect from './sections/federal_state_select';
import TermYearsSelect from './sections/term_years_select';

const DEFAULT_AMOUNT_DOLLARS = 50000;
const DEFAULT_FEDERAL_STATE = 'CA';
const DEFAULT_TERM_YEARS = 5;

function Quotes({ match, location }) {
  var params = qs.parse(location.search, { ignoreQueryPrefix: true });
  const initAmountDollars = parseInt(params.amount || DEFAULT_AMOUNT_DOLLARS);
  const initFederalState = params.state || DEFAULT_FEDERAL_STATE;
  const initTermYears = parseInt(params.term || DEFAULT_TERM_YEARS);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 

  const [amountDollars, setAmountDollars] = useState(initAmountDollars);
  const [federalState, setFederalState] = useState(initFederalState);
  const [termYears, setTermYears] = useState(initTermYears);

  return (
    <>
      <div>
        <div 
          className="quotes-hero hero-wrap">
          <div className="overlay hero-wrap-quotes"></div>
          <div className="overlay-2 hero-wrap-quotes"></div>
        </div>

        <div className="container">
            <div className="row no-gutters justify-content-center align-items-center">
              <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-end">
                <div className="text text-center w-100">
                  <h1 className="mb-4">Annuity Quotes</h1>
                  {/* <!-- <p><a href="#" className="btn btn-primary py-3 px-4">Search Quotes</a></p> --> */}
                </div>
              </div>
            </div>
          </div>

        <section className="quotes-ftco ftco-section ftco-no-pb">
          <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="search-wrap-1 ftco-animate">
                <form action="#" className="search-property-1">
                  <div className="row">
                    <div className="col-lg align-items-end search-filters">
                      <InvestmentAmountInput
                        initialAmountDollars={amountDollars}
                        setAmountDollars={setAmountDollars} 
                      />
                      <FederalStateSelect
                        initialFederalState={federalState}
                        setFederalState={setFederalState}
                      />
                      <TermYearsSelect
                        initialTermYears={termYears}
                        setTermYears={setTermYears}
                      />
                      <div className="form-group">
                        <label htmlFor="#">Financial Rating</label>
                        <div className="form-field">
                          <div className="select-wrap">
                            <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                            <select defaultValue="any" name="" id="" className="form-control">
                              <option value="any">Any</option>
                              <option value="aplus2">A++</option>
                              <option value="aplus">A+</option>
                              <option value="a">A</option>
                              <option value="aminus">A-</option>
                              <option value="bplus2">B++</option>
                              <option value="bplus">B+</option>
                              <option value="b">B</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="#">Insurer Name</label>
                        <div className="form-field">
                          <div className="icon"><span className="ion-ios-search"></span></div>
                          <input type="text" className="form-control"/>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-field">
                          <input type="submit" value="Search Quotes" className="form-control btn btn-primary"/>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9 align-items-end search-results">
                      <AnnuityTable onApply={handleShow}/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" />
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox">
                <Form.Check.Input type="checkbox" />
                <Form.Check.Label>
                  I accept the <a href="terms.html" target="_blank">Terms and Conditions</a>
                </Form.Check.Label>
              </Form.Check>
            </Form.Group> */}
            <Button variant="primary" type="submit" size="lg">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Quotes;

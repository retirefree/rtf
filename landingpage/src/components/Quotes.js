import React, { useState, useEffect } from 'react';
import qs from 'qs';

import AnnuityTable from './sections/annuity_table';
import InvestmentAmountInput from './sections/amount_input';
import FederalStateSelect from './sections/federal_state_select';
import TermYearsSelect from './sections/term_years_select';
import SelectInput from './sections/select_input';
import SearchInput from './sections/search_input';
import SignupModal from './SignupModal';

const DEFAULT_AMOUNT_DOLLARS = 50000;
const DEFAULT_FEDERAL_STATE = 'CA';
const DEFAULT_TERM_YEARS = 5;
const DEFAULT_RATING = "any";

const BASE_URL = "https://koiehcvvmk.execute-api.us-east-2.amazonaws.com/prod";
const QUOTES_URL = `${BASE_URL}/quotes`;
const SIGNUP_URL = `${BASE_URL}/signup`;

const RATING_OPTIONS = [
  { name: "Any", value: "any" },
  { name: "A++", value: "APP" },
  { name: "A+",  value: "AP"  },
  { name: "A",   value: "A"   },
  { name: "A-",  value: "AM"  },
  { name: "B++", value: "BPP" },
  { name: "B+",  value: "BM"  },
  { name: "B",   value: "B"   },
];

function Quotes({ match, location }) {
  var params = qs.parse(location.search, { ignoreQueryPrefix: true });
  const initAmountDollars = parseInt(params.amount || DEFAULT_AMOUNT_DOLLARS);
  const initFederalState = params.state || DEFAULT_FEDERAL_STATE;
  const initTermYears = parseInt(params.term || DEFAULT_TERM_YEARS);

  const [product, setProduct] = useState(0);

  const [show, setShow] = useState(false);
  const [signupCompleted, setSignupCompleted] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = id => {
    setSignupCompleted(false);
    setProduct(id);
    setShow(true); 
  }

  const [amountDollars, setAmountDollars] = useState(initAmountDollars);
  const [federalState, setFederalState] = useState(initFederalState);
  const [termYears, setTermYears] = useState(initTermYears);
  const [rating, setRating] = useState(DEFAULT_RATING);
  const [insurerName, setInsurerName] = useState("");

  const [quotes, setQuotes] = useState([]);

  const reloadQuotes = () => {
    const params = {
      amount: amountDollars,
      state: federalState,
      term: termYears,
      rating: rating,
      name: insurerName
    };

    const paramsQuery = qs.stringify(params);
    const url = `${QUOTES_URL}?${paramsQuery}`
    
    fetch(url)
      .then(res => res.json())
      .then(res => setQuotes(res['quotes']));
  }

  const handleSearchQuotes = (event) => {
    event.preventDefault();
    reloadQuotes();
  }

  const handleSignup = async (firstName, lastName, email, product) => {
    //console.log(`Signing up with ${firstName} ${lastName} ${email}`);
    params = {
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "product": product
     };

    await fetch(SIGNUP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    });
    setSignupCompleted(true);
  }

  useEffect(reloadQuotes, []);

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
                      <SelectInput
                        title="Financial Rating"
                        options={RATING_OPTIONS}
                        initialValue={rating}
                        setValue={setRating}
                      />
                      <SearchInput
                        title="Insurer Name"
                        initialValue={insurerName}
                        setValue={setInsurerName}
                      />
                      <div className="form-group">
                        <div className="form-field">
                          <input 
                            type="submit" 
                            value="Search Quotes" 
                            className="form-control btn btn-primary"
                            onClick={handleSearchQuotes}/>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9 align-items-end search-results">
                      <AnnuityTable 
                        items={quotes}
                        onApply={handleShow}/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>

      <SignupModal 
        show={show} 
        product={product}
        onSignup={handleSignup} 
        onClose={handleClose} 
        completed={signupCompleted}
      />
    </>
  );
}

export default Quotes;

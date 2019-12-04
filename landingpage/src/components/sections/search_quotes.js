import React, { useState } from 'react';
import qs from 'qs';

import InvestmentAmountInput from './amount_input';
import FederalStateSelect from './federal_state_select';
import TermYearsSelect from './term_years_select';

const DEFAULT_AMOUNT_DOLLARS = 50000;
const DEFAULT_FEDERAL_STATE = 'CA';
const DEFAULT_TERM_YEARS = 5;

export default function SearchQuotes({ history }) {
  const [amountDollars, setAmountDollars] = useState(DEFAULT_AMOUNT_DOLLARS);
  const [federalState, setFederalState] = useState(DEFAULT_FEDERAL_STATE);
  const [termYears, setTermYears] = useState(DEFAULT_TERM_YEARS);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = {
      amount: amountDollars,
      state: federalState,
      term: termYears
    };
    history.push(`/quotes?` + qs.stringify(params));
  }

  return (
    <section className="ftco-section ftco-no-pb goto-here">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="search-wrap-1 ftco-animate">
            <form action="#" className="search-property-1">
              <div className="row">
                <div className="col-lg align-items-end">
                  <InvestmentAmountInput 
                    initialAmountDollars={amountDollars}
                    setAmountDollars={setAmountDollars} />
                </div>
                <div className="col-lg align-items-end">
                  <FederalStateSelect 
                    initialFederalState={federalState}
                    setFederalState={setFederalState}
                  />
                </div>
                <div className="col-lg align-items-end">
                  <TermYearsSelect
                    initialTermYears={termYears}
                    setTermYears={setTermYears}
                  />
                </div>
                <div className="col-lg align-self-end">
                  <div className="form-group">
                    <div className="form-field">
                      <input
                        type="submit" 
                        value="Search Quotes" 
                        className="form-control btn btn-primary"
                        onClick={handleSubmit}/>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

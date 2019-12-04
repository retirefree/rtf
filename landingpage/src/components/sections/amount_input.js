import React from 'react';

export default function InvestmentAmountInput({ initialAmountDollars, setAmountDollars }) {
  return (
    <div className="form-group">
      <label htmlFor="#">Investment Amount</label>
        <div className="form-field">
          <div className="icon">$</div>
          <input 
            type="text" 
            className="form-control" 
            placeholder="50,000"
            value={initialAmountDollars}
            onChange={ (event) => { setAmountDollars(event.target.value); }} />
        </div>
    </div>
  )
}

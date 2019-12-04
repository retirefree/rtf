import React from 'react';

export default function TermYearsSelect({initialTermYears, setTermYears}) {
  const handleChange = (event) => {
    setTermYears(event.target.value);
  }

  return (
    <div className="form-group">
    <label htmlFor="#">Investment Term</label>
    <div className="form-field">
      <div className="select-wrap">
        <div className="icon"><span className="ion-ios-arrow-down"></span></div>
        <select 
          value={initialTermYears} 
          className="form-control"
          onChange={handleChange} >

          <option value="3">3 years</option>
          <option value="4">4 years</option>
          <option value="5">5 years</option>
          <option value="6">6 years</option>
          <option value="7">7 years</option>
          <option value="8">8 years</option>
          <option value="9">9 years</option>
          <option value="10">10 years</option>
        </select>
      </div>
    </div>
  </div>
  );
}
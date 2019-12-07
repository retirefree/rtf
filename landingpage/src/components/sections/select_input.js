import React from 'react';

export default function SelectInput({title, options, initialValue, setValue}) {
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className="form-group">
    <label htmlFor="#">{title}</label>
    <div className="form-field">
      <div className="select-wrap">
        <div className="icon"><span className="ion-ios-arrow-down"></span></div>
        <select 
          value={initialValue} 
          className="form-control"
          onChange={handleChange} >
          {
            options.map(({name, value}) => {
                return (<option key={value} value={value}>{name}</option>);
              })
          }
        </select>
      </div>
    </div>
  </div>
  );
}
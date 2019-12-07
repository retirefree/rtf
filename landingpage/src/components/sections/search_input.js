import React from 'react';

export default function SearchInput({title, initialValue, setValue}) {
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className="form-group">
      <label htmlFor="#">{title}</label>
      <div className="form-field">
        <div className="icon"><span className="ion-ios-search"></span></div>
        <input 
          type="text" 
          className="form-control" 
          onChange={handleChange}
          value={initialValue}
        />
      </div>
    </div>
  );
}
import React, { useState } from 'react';

const HoverableDropdown = ({ label = 'Select', options = [], onSelect }) => {
  return (
    <div className="dropdown">
      <a className="nav-link dropdown-toggle text-white">{label}</a>
      <div className="dropdown-content">
        {
          options.map((option, index) => {
            return <a key={`${label}_${index}`} className='text-decoration-none' href={option.path}>
              {option.icon ? <i className={`${option.icon} mr-2`}></i>: null}
              {option.name}
            </a>
          })
        }
      </div>
    </div>
  );
}

export default HoverableDropdown;

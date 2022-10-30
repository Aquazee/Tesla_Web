import React from 'react';

const MoreListItems = ({ name, path, icon }) => {
  return (
    <>
      <div className="dropdown-divider" />
      <a className="dropdown-item" href={path}>
        <i className={`${icon} mr-3`} />
        {name}
      </a>
    </>
  )
}

export default MoreListItems;
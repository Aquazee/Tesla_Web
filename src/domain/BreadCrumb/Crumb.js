import React from 'react';

const Crumb = ({ name, route }) => {
  return (
    <li className="breadcrumb-item">
      <a className="text-grey" href={`/${route}`}>
        {name}
      </a>
    </li>
  );
}

export default Crumb;
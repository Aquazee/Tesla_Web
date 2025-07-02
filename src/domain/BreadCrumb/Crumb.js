import React from 'react';

const Crumb = ({ name, route }) => {
  return (
    <li className="breadcrumb-item">
      <a className="text-grey text-decoration-none" href={`${route}`}>
        {name}
      </a>
    </li>
  );
}

export default Crumb;
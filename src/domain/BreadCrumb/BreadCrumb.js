import React, { useEffect } from 'react';
import { Constants } from '../../utils';
import './breadcrumb.css';
import Crumb from './Crumb';

const BreadCrumb = () => {
  return (
    <div>
      <nav className="pddh-15" style={{ marginTop: 15 }}>
        <ol className="breadcrumb">
          {Constants.BREADCRUMBS.map((crumb, index) => (
            <Crumb key={`crumb_${index}`} {...crumb} />
          ))}
        </ol>
      </nav>
    </div>
  );
}

BreadCrumb.propTypes = {};

export default BreadCrumb;

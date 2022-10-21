import React from 'react';
import Deals from '../domain/Dashboard/Deals/Deals';
import Brands from '../domain/Dashboard/Brands/Brands';
import Slider from '../domain/Slider';

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Slider />
        <Deals />
        <Brands />
      </div>
    </div>
  );
}

Dashboard.propTypes = {};

export default Dashboard;

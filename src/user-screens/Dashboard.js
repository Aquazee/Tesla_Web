import React, { useEffect } from 'react';
import Deals from '../domain/Dashboard/Deals/Deals';
import Brands from '../domain/Dashboard/Brands/Brands';
import Slider from '../domain/Slider';
import { useAuth } from '../contexts';
import { AppFunctions } from '../utils';

function Dashboard({route}) {
  useEffect(() =>{
    pageLoad();
  })

  const pageLoad = () => {
    AppFunctions.setTitle(route.name)
  }
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

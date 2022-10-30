import React from 'react';
import Footer from '../domain/Footer';
import Header from '../domain/Header/Header';
import { UserRoutes } from '../routes';

const UserLanding = () => {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Header />
          <UserRoutes />
          <Footer />
        </div>
      </div>
    </div>
  );
}

UserLanding.propTypes = {};

export default UserLanding;

import React from 'react';
import { Router } from 'react-router-dom';
import Footer from '../domain/Footer';
import Header from '../domain/Header/Header';
import { AdminRoutes } from '../routes';

const AdminLanding = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
          <AdminRoutes  />
        <Footer />
      </div>
    </div>
  );
}

AdminLanding.propTypes = {};

export default AdminLanding;

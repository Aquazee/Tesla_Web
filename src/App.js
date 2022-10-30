import React, { useEffect, useState } from 'react';
import UserLanding from './user-screens/UserLanding';
import ErrorBoundary from './domain/ErrorBoundary/ErrorBoundary';
import AdminLanding from './admin-screens/AdminLanding';
import { useAuth } from './contexts';

const App = ({ history, routes }) => {
  const { token, isAdmin, role, admin, isLoggedIn, setLoggedIn, userPortal, IsAdminPortal, setAdminPortal } = useAuth();



  useEffect(() => {
   if(admin){
      if (token && isAdmin ) setAdminPortal(true);
    }
  }, [token]);

  return (
    <ErrorBoundary>
      {IsAdminPortal ? <AdminLanding /> : <UserLanding />}
    </ErrorBoundary>
  );
}

export default App;
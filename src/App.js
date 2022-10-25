import React, { useEffect, useState } from 'react';
import UserLanding from './user-screens/UserLanding';
import ErrorBoundary from './domain/ErrorBoundary/ErrorBoundary';
import AdminLanding from './admin-screens/AdminLanding';
import { useAuth } from './contexts';

const App = ({ history, routes }) => {
  const { user, admin, isLoggedIn, setLoggedIn, userPortal, IsAdminPortal, setAdminPortal } = useAuth();

  useEffect(() => {
    if (user && user.role.indexOf('admin') !== -1 && userPortal === 'admin') setAdminPortal(true);
  }, [user]);

  return (
    <ErrorBoundary>
      {IsAdminPortal ? <AdminLanding /> : <UserLanding />}
    </ErrorBoundary>
  );
}

export default App;
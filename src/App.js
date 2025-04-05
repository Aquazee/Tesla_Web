import React, { useEffect, useState } from 'react';
import UserLanding from './user-screens/UserLanding';
import ErrorBoundary from './domain/ErrorBoundary/ErrorBoundary';
import { useAuth } from './contexts';

const App = ({ history, routes }) => {
  const { token, isAdmin, admin, setAdminPortal } = useAuth();

  useEffect(() => {
   if(admin){
      if (token && isAdmin ) setAdminPortal(true);
    }
  }, [token]);

  return (
    <ErrorBoundary>
      <UserLanding />
    </ErrorBoundary>
  );
}

export default App;
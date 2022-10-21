import React, { useEffect, useState } from 'react';
import { UserLanding } from './user-screens';
import { AdminLanding } from './admin-screens';
import { useAuth } from './contexts';

const App = ({ history, routes }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [IsAdminPortal, setIsAdminPortal] = useState(false);
  const { user, admin } = useAuth();

  useEffect(() => {
    if (user) setIsLoggedIn(true);
  }, [user]);

  useEffect(() => {
    if (admin) setIsAdminPortal(true);
  }, [admin]);

  return IsAdminPortal ? <AdminLanding /> : <UserLanding />;
}

export default App;
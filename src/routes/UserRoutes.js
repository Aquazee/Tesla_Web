import React, { useEffect, useState } from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

import { Loader, Login, UserProfile } from '../common-screens';
import { Dashboard, UserLanding } from '../user-screens';
import ProductDetails from "../user-screens/ProductDetails";
import SearchScreen from "../user-screens/SearchScreen";
import { useAuth } from '../contexts';

const guestRoutes = [
  {
    path: '/product',
    name: 'Product',
    icon: 'icon-chart-pie-36',
    component: <ProductDetails />,
    layout: '/product'
  },
  {
    path: '/search',
    name: 'Search',
    icon: 'icon-chart-pie-36',
    component: <SearchScreen />,
    layout: '/search'
  },
  {
    path: '/login',
    name: 'Login',
    icon: 'icon-atom',
    component: <Login />,
    layout: '/login'
  },
  {
    path: '/',
    name: 'Home',
    icon: 'icon-atom',
    component: <Dashboard />,
    layout: '/'
  }
];

const LoggedInRoutes = [
  {
    path: '/account',
    name: 'Account',
    icon: 'icon-atom',
    component: <UserProfile />,
    layout: '/account'
  }
];

const excludeGuestRoute = ['login'];

const UserRoutes = ({ session }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) setIsLoggedIn(true);
  }, [user]);

  const getLoggedInRoutes = () => LoggedInRoutes.concat(excludeGuestRoutes());

  const excludeGuestRoutes = () =>
    guestRoutes.filter((route) => excludeGuestRoute.indexOf(route.name) === -1);

  return (
    <>
      {!isLoggedIn ? (
        <Switch>
          {guestRoutes.map((route, index) => (
            <Route key={`${index}_guestUser`} path={route.path} >
              {route.component}
            </Route>
          ))}
        </Switch>
      ) : (
        <Switch>
          {getLoggedInRoutes().map((route, index) => (
            <Route key={`${index}_userloggedIn`} ath={route.path}  >
            {route.component}
          </Route>
          ))}
        </Switch>
      )}
    </>
  );
}

export default UserRoutes;

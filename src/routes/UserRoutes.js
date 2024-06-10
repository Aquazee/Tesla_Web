import React, { useEffect, useState } from 'react';
import { BrowserRouter, Router, Route, Routes, Switch, Link, Redirect } from 'react-router-dom';

import Loader from '../common-screens/Loader';
import Account from '../domain/Account';
import Dashboard from '../user-screens/Dashboard';
import AuthScreen from "../user-screens/AuthScreen";
import ProductDetails from "../user-screens/ProductDetails";
import SearchScreen from "../user-screens/SearchScreen";
import Checkout from "../user-screens/Checkout";
import { useAuth } from '../contexts';
import NotFound from '../domain/NotFound/NotFound';
import OrderTracking from '../domain/OrderTracking/OrderTracking';

const AllRoutes = [
  {
    path: '/product',
    name: 'Product',
    icon: 'icon-chart-pie-36',
    component: ProductDetails,
    layout: '/product'
  },
  {
    path: '/search',
    name: 'Search',
    icon: 'icon-chart-pie-36',
    component: SearchScreen,
    layout: '/search'
  },
  {
    path: '/login',
    name: 'Login',
    icon: 'icon-atom',
    component: AuthScreen,
    layout: '/Login'
  },
  {
    path: '/',
    name: 'Home',
    icon: 'icon-atom',
    component: Dashboard,
    layout: '/'
  },
  {
    path: '/checkout',
    name: 'Checkout',
    icon: 'icon-atom',
    component: Checkout,
    layout: '/checkout'
  },
  {
    path: '/order-track',
    name: 'Order Tracking',
    icon: 'icon-atom',
    component: OrderTracking,
    layout: '/ordertrack'
  },
  {
    path: '/account',
    name: 'Account',
    icon: 'icon-atom',
    component: Account,
    layout: '/account'
  },
  {
    path: '/*',
    name: 'Not Found',
    icon: 'icon-atom',
    component: NotFound,
    layout: '/*'
  },
];

const LoggedInRoutes = [

];

const ExcludeGuestRoute = ['/login'];

const ExcludeLoggedUserRoute = ['/account', '/orders'];

const UserRoutes = ({ session }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { token, user } = useAuth();

  useEffect(() => {
    if (user) setIsLoggedIn(true);
  }, [user]);

  const getGuestRoutes = () =>
    AllRoutes.filter(route => ExcludeLoggedUserRoute.indexOf(route.path) === -1);


  const getLoggedInRoutes = () =>
  AllRoutes.filter((route) => ExcludeGuestRoute.indexOf(route.path) === -1);

  // (!isLoggedIn ? getGuestRoutes() : getLoggedInRoutes())
  return (
    <Switch>
      {
       (!isLoggedIn ? getGuestRoutes() : getLoggedInRoutes()).map((route, index) => (
          <Route exact={route.path === '/' || route.path === '/account' } key={`${index}_routes`} path={route.path} >
            <route.component route={route} />
          </Route>
        ))
      }
    </Switch>
  );
}

export default UserRoutes;

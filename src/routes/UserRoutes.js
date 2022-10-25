import React, { useEffect, useState } from 'react';
import { BrowserRouter, Router, Route, Routes, Switch, Link, Redirect } from 'react-router-dom';

import Loader from '../common-screens/Loader';
import Account from '../common-screens/Account';
import Dashboard from '../user-screens/Dashboard';
import Login from "../user-screens/Login";
import ProductDetails from "../user-screens/ProductDetails";
import SearchScreen from "../user-screens/SearchScreen";
import Checkout from "../user-screens/Checkout";
import { useAuth } from '../contexts';
import NotFound from '../domain/NotFound/NotFound';
import OrderTracking from '../domain/OrderTracking/OrderTracking';

const guestRoutes = [
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
    component: Login,
    layout: '/login'
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
    path: '/*',
    name: 'Not Found',
    icon: 'icon-atom',
    component: NotFound,
    layout: '/*'
  },
  {
    path: '/order-track',
    name: 'Order Tracking',
    icon: 'icon-atom',
    component: OrderTracking,
    layout: '/ordertrack'
  }
];

const LoggedInRoutes = [
  {
    path: '/account',
    name: 'Account',
    icon: 'icon-atom',
    component: Account,
    layout: '/account'
  }
];

const excludeGuestRoute = ['account'];

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
    <Switch>
      {
        (!isLoggedIn ? guestRoutes : getLoggedInRoutes()).map((route, index) => (
          <Route exact={route.path === '/'} key={`${index}_guestUser`} path={route.path} >
            <route.component route={route} />
          </Route>
        ))
      }
      {/* <Route exact path='/' >
        <Dashboard route={{ name: 'Account' }} />
      </Route>
      <Route path='/product' >
        <ProductDetails route={{ name: 'Account' }} />
      </Route>
      <Route path='/checkout' >
        <Checkout route={{ name: 'Checkout' }} />
      </Route>
      <Route path='/account' >
        <Account route={{ name: 'Account' }} />
      </Route>
      <Route path='/account' >
        <Account route={{ name: 'Account' }} />
      </Route>
      <Route path='/account' >
        <Account route={{ name: 'Account' }} />
      </Route> */}
    </Switch>
  );
}

export default UserRoutes;

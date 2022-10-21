import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { useAuth } from '../contexts';
import { Loader, Login } from '../common-screens';

const routes = [
  // {
  //   path: "/admin",
  //   name: "Admin Management",
  //   icon: "icon-atom",
  //   component: Admin,
  //   layout: "/admin",
  // },
  // {
  //   path: '/user',
  //   name: 'User Management',
  //   icon: 'icon-atom',
  //   component: User,
  //   layout: '/user'
  // },
  // {
  //   path: "/app",
  //   name: "App Management",
  //   icon: "icon-atom",
  //   component: App,
  //   layout: "/admin",
  // },
  // {
  //   path: "/role",
  //   name: "Role Management",
  //   icon: "icon-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: '/notification',
  //   name: 'Notification Management',
  //   icon: 'icon-atom',
  //   component: Notifications,
  //   layout: '/notifications'
  // }
];

const RoutesList = () =>
  routes.map((route, index) => (
    <Route key={`${index}_loggedIn`} from={route.path} to={route.layout}>
      {route.component}
    </Route>
  ));

const AdminRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) setIsLoggedIn(true);
  }, [user]);

  return (
    <BrowserRouter>
      {!isLoggedIn ? (
        <Switch>
          <Route from="/" to="/login">
            <Login />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <RoutesList />
        </Switch>
      )}
    </BrowserRouter>
  );
}

export default AdminRoutes;

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Base from './containers/Base/Base';
import Index from './containers/Index/Index';
import List from './containers/List/List';
import Form from './containers/Form/Form';
import Product from './containers/Product';
import Search from './containers/Search';
import Account from './containers/Account';

export const urls = {
  index: '/',
  dashboard: '/dashboard',
  list: '/list',
  form: '/form',
  companies: '/companies',
  product: '/product',
  search: '/search',
  account: '/account',
};

export const routes = (
  <Route path={urls.index} component={Base}>
    <IndexRoute component={Index} />
    <Route path={urls.dashboard} component={List} />
    <Route path={urls.list} component={List} />
    <Route path={urls.form} component={Form} />
    <Route path={urls.product} component={Product} />
    <Route path={urls.search} component={Search} />
    <Route path={urls.account} component={Account} />
  </Route>
);

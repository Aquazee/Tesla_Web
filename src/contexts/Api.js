import React from 'react';
import { create } from 'apisauce';

import { REACT_APP_BASE_URL } from '../config';

export const URIS = {
  FIREBASE_TOKEN: 'auth/login'
};

export const useApi = (props) => {
  const createApiClient = (baseURL = REACT_APP_BASE_URL) => {
    const api = create({
      baseURL,
      timeout: 15000
    });

    const setHeaders = (params) => {
      for (const key in params) {
        api.setHeader(key, params[key]);
      }
    };

    return {
      setHeaders,
      login: (body) => api.post('/auth/login', body),
      logout: (body) => api.post('/auth/logout', body),
      registerUser: (body) => api.post('/auth/register', body),
      getProducts: (body) => api.post('/api/products/', body),
      getProduct: (body) => api.get('/api/products/:productId', body),
      postGuestCart: (body) => api.post('/api/products/:productId', body),
      postGuestAddress: (body) => api.post('/api/carts/:cartId/address', body),
      postUserAddress: (body) => api.post('/api/carts/:cartId/address', body),
      getOrder: (body) => api.post('/api/orders/:orderId', body),
      getOrders: (body) => api.post('/api/orders/:orderId', body),
      getWishlist: (body) => api.post('/api/orders/:orderId', body),
      getCart: (body) => api.post('/api/orders/:orderId', body),
    };
  };

  return { ...createApiClient() };
};

const cart = {
  is_guest: true,
  shipping_address: {

  },
  billing_address: null,
  is_billing_shipping_same: true,
  payment_info: {

  },
  user_info: {
    ip_address: '',
    mac_address: '',
    platform: 'desktop',
    proxy_used: false
  }
}
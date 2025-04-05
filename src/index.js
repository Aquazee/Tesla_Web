import 'popper.js/dist/popper.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import * as bootstrap from 'bootstrap';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from "./App";

import {
  AuthProvider,
  UserDataProvider,
  NotificationDataProvider,
  AppDataProvider,
  ProductProvider
} from './contexts';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from 'contexts/ThemeProvider';

window.onload = function (e) {
  var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
  var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl)
  })
  var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
  var collapseList = collapseElementList.map(function (collapseEl) {
    return new bootstrap.Collapse(collapseEl)
  })

  var myCarousel = [].slice.call(document.querySelectorAll('.carousel'))
  var collapseList = myCarousel.map(function (collapseEl) {
    return new bootstrap.Carousel(collapseEl)
  })
}

ReactDOM.render(
  <AuthProvider>
    <UserDataProvider>
      <AppDataProvider>
        <NotificationDataProvider>
          <ProductProvider>
            <BrowserRouter >
              <ThemeProvider value='light'>
                <App />
              </ThemeProvider>
            </BrowserRouter>
          </ProductProvider>
        </NotificationDataProvider>
      </AppDataProvider>
    </UserDataProvider>
  </AuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
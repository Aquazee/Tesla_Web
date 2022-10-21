import React, { createContext, useContext, useReducer } from 'react';
import API from '../api/api';

export const NotificationContext = createContext({});
export const useNotification = () => useContext(NotificationContext);

const notificationActions = {
  MAKE_REQUEST: 'MAKE_REQUEST',
  SET_NOTIFICATION_DATA: 'SET_NOTIFICATION_DATA',
  ERROR: 'ERROR'
};

const initialState = {
  loading: false,
  notificationData: [],
  totalPages: 0,
  totalResults: 0,
  hasMoreData: false,
  error: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case notificationActions.MAKE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case notificationActions.SET_NOTIFICATION_DATA:
      return {
        ...state,
        loading: false,
        notificationData: action.payload.data.results,
        totalPages: action.payload.data.totalPages,
        totalResults: action.payload.data.totalResults,
        hasMoreData: action.payload.hasMoreData
      };
    default:
      return state;
  }
};

export const NotificationDataProvider = ({ children }) =>{
  const [state, dispatch] = useReducer(reducer, initialState);

  const getNotifications = async (params) => {
    try {
      dispatch({ type: notificationActions.MAKE_REQUEST });
      const { data } = await API.getUsers(params);
      dispatch({
        type: notificationActions.SET_NOTIFICATION_DATA,
        payload: {
          data,
          hasMoreData: data.page !== data.totalPages
        }
      });
    } catch (error) {
      dispatch({
        type: notificationActions.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    }
  };

  return (
    <NotificationContext.Provider
      value={{
        ...state,
        getNotifications
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

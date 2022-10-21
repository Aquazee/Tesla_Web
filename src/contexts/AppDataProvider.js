import React, { useContext, createContext, useReducer } from 'react';
import API from '../api/api';

export const AppContext = createContext({});
export const useApp = () => useContext(AppContext);

const appActions = {
  MAKE_REQUEST: 'MAKE_REQUEST',
  SET_APP_DATA: 'SET_CAMPAIGN_DATA',
  ERROR: 'ERROR'
};

const initialState = {
  loading: false,
  appData: {},
  error: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case appActions.MAKE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case appActions.SET_APP_DATA:
      return {
        ...state,
        loading: false,
        appData: action.payload.data
      };
    default:
      return state;
  }
};

export function AppDataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getlatestAppData = async (params) => {
    try {
      dispatch({ type: appActions.MAKE_REQUEST });
      const { data } = await API.getLatestAppByDate();
      dispatch({
        type: appActions.SET_APP_DATA,
        payload: {
          data
        }
      });
    } catch (error) {
      dispatch({
        type: appActions.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    }
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        getlatestAppData
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

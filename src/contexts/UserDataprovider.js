import React, { createContext, useContext, useReducer } from 'react';
import API from '../api/api';

export const UserContext = createContext({});
export const useUser = () => useContext(UserContext);

const userActions = {
  MAKE_REQUEST: 'MAKE_REQUEST',
  SET_USER_DATA: 'SET_USER_DATA',
  ERROR: 'ERROR'
};

const initialState = {
  loading: false,
  userData: [],
  totalPages: 0,
  totalResults: 0,
  hasMoreData: false,
  error: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case userActions.MAKE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userActions.SET_USER_DATA:
      return {
        ...state,
        loading: false,
        userData: action.payload.data.results,
        totalPages: action.payload.data.totalPages,
        totalResults: action.payload.data.totalResults,
        hasMoreData: action.payload.hasMoreData
      };
    default:
      return state;
  }
};

export const UserDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const createUser = async (body) => {
    try {
      return await API.createUser(body);
    } catch (error) {
      dispatch({
        type: userActions.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    }
  };

  const getUsers = async (params) => {
    try {
      dispatch({ type: userActions.MAKE_REQUEST });
      const { data } = await API.getUsers(params);
      //   console.log(data)
      dispatch({
        type: userActions.SET_USER_DATA,
        payload: {
          data,
          hasMoreData: data.page !== data.totalPages
        }
      });
    } catch (error) {
      dispatch({
        type: userActions.ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    }
  };

  const getExcelSheet = async (params) => {
    try {
      API.getUsersExcelSheet(params);
    } catch (error) {}
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        createUser,
        getUsers,
        getExcelSheet
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

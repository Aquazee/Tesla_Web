import React, { useEffect, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { useApi } from './Api';
import { AppFunctions, Constants } from '../utils';

const AuthContext = React.createContext();

export const useAuth = (props) => useContext(AuthContext);

const initialState = {
  isLoading: true,
  isSuccess: false,
  isError: false,
  user: null,
  isLoggedIn: false,
  isAdmin: false,
  IsAdminPortal: false,
  userPortal: 'user',
  token: null
};

export const AuthProvider = ({ children }) => {
  const api = useApi();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setAppData = () => {
    const user = AppFunctions.getStoreData(Constants.STORAGEKEYS.USER)
    const token = AppFunctions.getStoreData(Constants.STORAGEKEYS.TOKEN)
    const payload = {}
    if (user) {
      payload.user = user
    }
    if (token) {
      payload.token = token
    }

    dispatch({ type: 'setAppData', payload });
  }

  const login = async (body, controller) => {
    try {
      const response = {
        ok: true,
        data: {
          token: 'abcd',
          user: {
            name: 'John Doe'
          }
        }
      };
      // const response = await api.login(body, { signal: controller.signal });
      console.log(response);
      if (response.ok) {
        AppFunctions.setStoreData(Constants.STORAGEKEYS.TOKEN, response.data.token)
        AppFunctions.setStoreData(Constants.STORAGEKEYS.USER, response.data.user)
        dispatch({ type: 'setLoginData', payload: response.data });
      }
      return response;
    } catch (err) {
      onOAuthFailure(err);
    }
  };

  const signup = async (body) => {
    try {
      const response = await api.registerUser(body);
      console.log(response);
      if (!response.ok) {
      }
      return response;
    } catch (err) {
      onOAuthFailure(err);
    }
  };

  const setLoggedIn = (token) => {
    AppFunctions.setStoreData('token', token)
    dispatch({ type: 'setIsLoggedIn', payload: true });
  }

  const setAdminPortal = (token) => {
    dispatch({ type: 'setIsAdminPortal', payload: true });
  }

  const logout = async () => {
    try {
      // const { refresh } = AppFunctions.getStoredUserDetails().tokens.refresh;
      // await api.logout(refresh);
      AppFunctions.removeStoreData(Constants.STORAGEKEYS.USER)
      AppFunctions.removeStoreData(Constants.STORAGEKEYS.TOKEN)
      dispatch({ type: 'reset' });
    } catch (err) {
      dispatch({ type: 'setError', payload: err.message });
    }
  };

  const onOAuthFailure = (response, msg) => {
    dispatch({ type: 'setIsLoading', payload: false });
    if (response.error) {
      const res = response.json;

      if (!msg) {
        msg = res.error_description;
      }
    }

    if (msg && msg !== '') {
      dispatch({ type: 'setError', payload: msg });
    }

    return response;
  };

  const checkAuth = () => {
    const user = localStorage.getItem('user');
    dispatch({ type: 'setUser', payload: user });
  };

  useEffect(() => {
    setAppData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        signup,
        logout,
        setLoggedIn,
        setAppData,
        setAdminPortal,
        ...state
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'setIsLoading':
      return {
        ...state,
        isLoading: payload
      };
    case 'setError':
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload
      };
    case 'setIsLoggedIn':
      return {
        ...state,
        isLoggedIn: payload
      };
    case 'setUser':
      return {
        ...state,
        user: payload,
        isLoggedIn: true,
        isLoading: false
      };
    case 'setLoginData':
      return {
        ...state,
        ...payload,
        isLoggedIn: true,
        isLoading: false
      };
    case 'setAppData':
      return {
        ...state,
        ...payload,
        isLoggedIn: payload.token ? true : false,
        isLoading: false
      };
    case 'reset':
      return {
        ...initialState
      };
    default:
      throw new Error();
  }
};

AuthProvider.defaultProps = {};

AuthProvider.propTypes = {};

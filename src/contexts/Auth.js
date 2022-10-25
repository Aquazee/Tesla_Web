import React, { useEffect, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { useApi } from './Api';
import { AppFunctions } from '../utils';

const AuthContext = React.createContext();

export const useAuth = (props) => useContext(AuthContext);

const initialState = {
  isLoading: true,
  isSuccess: false,
  isError: false,
  user: null,
  isLoggedIn: false,
  IsAdminPortal: false,
  userPortal: 'user',
};

export const AuthProvider = ({ children }) => {
  const api = useApi();
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (body) => {
    try {
      const response = await api.login(body);
      console.log(response);
      if (response.ok) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        dispatch({ type: 'setUser', payload: response });
      }
      return response;
    } catch (err) {
      onOAuthFailure(err);
    }
  };

  const register = async (body) => {
    try {
      const response = await api.registerUser(body);
      console.log(response);
      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(response.data));
        // dispatch({ type: 'setUser', payload: response });
      }
      return response;
    } catch (err) {
      onOAuthFailure(err);
    }
  };

  const setLoggedIn = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
    dispatch({ type: 'setIsLoggedIn', payload: true });
  }

  const setAdminPortal = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
    dispatch({ type: 'setIsAdminPortal', payload: true });
  }

  const logout = async () => {
    try {
      dispatch({ type: 'setIsLoading', payload: true });
      const { refresh } = AppFunctions.getStoredUserDetails().tokens.refresh;
      await api.logout(refresh);
      localStorage.removeItem('user');
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
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        logout,
        setLoggedIn,
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
        isLoading: false
      };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
};

AuthProvider.defaultProps = {};

AuthProvider.propTypes = {};

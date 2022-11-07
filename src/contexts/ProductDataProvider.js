import React, { useContext, createContext, useReducer } from 'react';
import API from '../api/api';

const ProductDataContext = createContext({});
export const useProductData = (props) => useContext(ProductDataContext);

const appActions = {
  MAKE_REQUEST: 'MAKE_REQUEST',
  SET_PRODUCT_SEARCH_DATA: 'SET_PRODUCT_SEARCH_DATA',
  SET_ERROR: 'SET_ERROR'
};

const initialState = {
  loading: false,
  searchData: {},
  error: ''
};


export function ProductDataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProductSearchData = async (params) => {
    try {
      dispatch({ type: appActions.MAKE_REQUEST });
      const { data } = await API.getProductSearchData(params);
      dispatch({
        type: appActions.SET_PRODUCT_SEARCH_DATA,
        payload: {
          data
        }
      });
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <ProductDataContext.Provider
      value={{
        getProductSearchData,
        ...state,
      }}
    >
      {children}
    </ProductDataContext.Provider>
  );
}


const reducer = (state, action) => {
  switch (action.type) {
    case appActions.MAKE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case appActions.SET_PRODUCT_SEARCH_DATA:
      return {
        ...state,
        loading: false,
        searchData: action.payload.data
      };
    case appActions.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
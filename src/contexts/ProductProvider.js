import React, { useContext, createContext, useReducer } from "react";
import API from "../api/api";

import { useApi } from "./Api";
import { AppFunctions, Constants, OfflineHelper } from "../utils";
import { PRODUCT_LIST } from "utils/Data";

const ProductContext = React.createContext();
export const useProduct = (props) => useContext(ProductContext);

const appActions = {
  MAKE_REQUEST: "MAKE_REQUEST",
  SET_PRODUCT_SEARCH_DATA: "SET_PRODUCT_SEARCH_DATA",
  SET_ERROR: "SET_ERROR",
};

const initialState = {
  isLoading: true,
  isSuccess: false,
  isError: false,
  searchData: { docs: PRODUCT_LIST },
};

export const ProductProvider = ({ children }) => {
  const api = useApi();
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProductSearchData = async (params) => {
    try {
      dispatch({ type: appActions.MAKE_REQUEST });
      const { data } = await API.getProductSearchData(params);
      dispatch({
        type: appActions.SET_PRODUCT_SEARCH_DATA,
        payload: {
          data,
        },
      });
    } catch (error) {
      const tempError = new Error(error);
      if (tempError.message == "Error: Network Error") {
        console.log("Please check your network connnection.");
        const updatedData = OfflineHelper.searchApi(params, PRODUCT_LIST)
        dispatch({
          type: appActions.SET_PRODUCT_SEARCH_DATA,
          payload: {
            data: {
              docs: updatedData,
            },
          },
        });
      } else {
      }
      console.log(tempError.name);
      console.log(tempError.message);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        getProductSearchData,
        ...state,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case appActions.MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case appActions.SET_PRODUCT_SEARCH_DATA:
      return {
        ...state,
        loading: false,
        searchData: action.payload.data,
      };
    case appActions.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

ProductProvider.defaultProps = {};

ProductProvider.propTypes = {};

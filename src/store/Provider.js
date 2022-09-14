import React, { useReducer } from 'react';
import Context from './Context';
import reducer, { initState } from '../reducers/product';
import { actions } from '.';

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const value = {
    products: state.products,
    filterList: state.filterList,
    addProduct: ({ ...product }) => {
      dispatch(actions.addProduct(product));
    },
    deleteProduct: (id) => {
      dispatch(actions.deleteProduct(id));
    },
    updateProduct: (product) => {
      dispatch(actions.updateProduct(product));
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;

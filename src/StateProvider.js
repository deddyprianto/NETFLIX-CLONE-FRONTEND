import React, { useContext, createContext, useReducer } from "react";

const BuatContext = createContext();
export const StateProvider = ({ reducer, initialstate, children }) => (
  <BuatContext.Provider value={useReducer(reducer, initialstate)}>
    {children}
  </BuatContext.Provider>
);
// eslint-disable-next-line react-hooks/rules-of-hooks
export const stateValueProvider = () => useContext(BuatContext);

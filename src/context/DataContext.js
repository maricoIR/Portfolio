import React, { useReducer, createContext } from "react";
const initialState = {
  sidebar: false,
};

function reducer(state, action) {
  return { ...state, ...action };
}

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };

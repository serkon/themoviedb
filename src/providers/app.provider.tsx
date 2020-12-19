import React, { useState } from 'react';

export const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
  const [store, setStore] = useState({
    search: [],
  });
  return (
    <AppContext.Provider value={{ store, setStore }}>
      {children}
    </AppContext.Provider>
  )
}

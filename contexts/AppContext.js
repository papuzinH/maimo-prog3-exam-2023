import React, { useState, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({
  defaultValue = [{ id: 1, name: 'Robert' }],
  children,
}) => {
  const [cart, setCart] = useState(defaultValue);

  return (
    <AppContext.Provider value={{ cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };

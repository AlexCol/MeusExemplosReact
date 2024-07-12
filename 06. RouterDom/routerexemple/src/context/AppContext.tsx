// src/context/AppContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
  total: number;
  increaseByOne: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [total, setTotal] = useState<number>(0);

  const increaseByOne = () => {
    setTotal((prevTotal) => prevTotal + 1);
  };

  return (
    <AppContext.Provider value={{ total, increaseByOne }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

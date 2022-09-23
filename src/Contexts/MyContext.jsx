import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <MyContext.Provider value={{ open, setOpen }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;

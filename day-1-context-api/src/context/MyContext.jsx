import { createContext } from "react";

const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  return <MyStore.Provider value={{}}>{children}</MyStore.Provider>;
};


export { MyStore };
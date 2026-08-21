import { createContext, useState } from "react";

// This file intentionally exports both the context and its provider.
/* eslint-disable react-refresh/only-export-components */
export const MyContext = createContext()

export const ContextProvider = ({ children }) => {
    const [state, setState] = useState()

    return(
        <MyContext.Provider value={{ state, setState }}>
          {children}
        </MyContext.Provider>
    )

 }



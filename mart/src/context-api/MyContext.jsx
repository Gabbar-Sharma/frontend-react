import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const MyStore = createContext();

const MyContext = ({ children }) => {

    const [cart, setCart] = useState([]);

    return (
        <MyStore.Provider value={{ cart, setCart }}>
            {children}
        </MyStore.Provider>
    );

};

export default MyContext;
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const MyStore = createContext();

const MyContext = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [IsOpen, setIsOpen] = useState(false)
    const [IsDark, setIsDark] = useState(false)

    return (
        <MyStore.Provider value={{ cart, setCart, IsOpen , setIsOpen ,IsDark ,setIsDark }}>
            {children}
        </MyStore.Provider>
    );

};

export default MyContext;
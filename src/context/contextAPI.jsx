// context API helps handle states in differents pages
import { createContext, useState } from "react";

export const ContextAPI = createContext();

export const ContextAPIProvider = (props) => {
    const [isRegistered, setIsRegistered] = useState(false);

    return (
        <ContextAPI.Provider value={{ isRegistered, setIsRegistered }}>
            {props.children}
        </ContextAPI.Provider>
    );
};
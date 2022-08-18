import { createContext, useState, useEffect } from "react";
import { useAuth } from "../../hooks/userAuth";

const Context = createContext();

const UserProvider = ({children}) => {
    const { authenticated, createUser, loginUser, logoutUser, updateUser } = useAuth();

    return (
        <Context.Provider value={{authenticated, createUser, loginUser, logoutUser, updateUser}}>
            {children}
        </Context.Provider>
    )
}

export { Context, UserProvider }

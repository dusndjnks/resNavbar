import React, { useState } from "react";
import { createContext } from "react";


const AuthContext = createContext()

export const ContextProvider = ({children}) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const login  = () => {
        setIsLoggedIn(true)
    }
    const logout = () => {
        setIsLoggedIn(false)
    }
    let values = {
        login , logout , isLoggedIn
    }
    return(
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    )
}

export default AuthContext
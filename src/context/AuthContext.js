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
    return(
        <AuthContext.Provider>{children}</AuthContext.Provider>
    )
}

export default AuthContext
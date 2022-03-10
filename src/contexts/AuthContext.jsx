import { createContext, useState } from "react";


const authContextDefaultValues = {
    user: null,
    isAuthenticated: false,
    toggleAuth: () => null,
  };

export const AuthContext = createContext(authContextDefaultValues);

const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(authContextDefaultValues);
  
    const toggleAuth = (user) =>{
        setIsLoggedIn({
        user: user,
        isAuthenticated: !isLoggedIn.isAuthenticated,
      });
      return user;
    }
  
    return <AuthContext.Provider value={{...isLoggedIn, toggleAuth}}>{children}</AuthContext.Provider>
  };

  export default AuthContextProvider;
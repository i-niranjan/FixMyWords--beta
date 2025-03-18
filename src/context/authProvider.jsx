// this context is not being used as i found it useless for this short app, we are directly calling service for reg and login.

import { createContext, useState, useEffect } from "react";
import { getToken, getUser, logout } from "../service/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUser());
  const [token, setToken] = useState(getToken());

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("name", user);
    }
  }, [token]);

  const loginUser = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
  };

  const logoutUser = () => {
    logout();
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

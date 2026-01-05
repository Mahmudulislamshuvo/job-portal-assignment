import { useState } from "react";
import { AuthContext } from "../context/index.js";

const AuthProvider = ({ children }) => {
  // Initialize state from localStorage to prevent logout on refresh
  const [auth, setAuth] = useState(() => {
    try {
      const token = localStorage.getItem("Token");
      const user = localStorage.getItem("user");
      if (token && user) {
        return { token, data: JSON.parse(user) };
      }
    } catch (error) {
      console.error("Error loading auth from localStorage:", error);
    }
    return {};
  });

  // Logout function to clear state and local storage
  const logout = () => {
    setAuth({});
    localStorage.removeItem("Token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

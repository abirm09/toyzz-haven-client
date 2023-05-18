import { createContext } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const apiDomain = "http://localhost:5000/";
  const data = {
    apiDomain,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

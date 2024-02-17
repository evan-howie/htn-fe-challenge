import React, { createContext, useContext, useState, ReactNode } from "react";

// Define a type for the context value
interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

// Create the context with an initial undefined value but specify the type
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the AuthContext. This provides a more TypeScript-friendly way of accessing the context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Define a type for the AuthProvider's props
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const value = {
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

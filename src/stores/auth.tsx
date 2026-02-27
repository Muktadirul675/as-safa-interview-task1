import { createContext, useState, useContext, type ReactNode } from "react";
import api from "../api/api";
import toast from "react-hot-toast";

interface User {
  id: number;
  email: string;
  token: string;
}

interface AuthContextType {
  token: string | null;
  user: User | null;
  setToken: (token: string | null) => void;
  logout: () => void;
  login: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(
    localStorage.getItem("access_token")
  );
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("user_data");
    return stored ? JSON.parse(stored) : null;
  });

  const setToken = (newToken: string | null) => {
    setTokenState(newToken);
    if (newToken) localStorage.setItem("access_token", newToken);
    else localStorage.removeItem("access_token");
  };

  const setUserData = (userData: User | null) => {
    setUser(userData);
    if (userData) localStorage.setItem("user_data", JSON.stringify(userData));
    else localStorage.removeItem("user_data");
  };

  const logout = () => {
    setToken(null);
    setUserData(null);
    toast('Logged out')
  };

  const login = async (email: string, password: string) => {
    try {
      const res = await api.post<User>("/login", { email, password });
      setToken(res.data.token);
      setUserData(res.data);
      toast.success('Successfully Logged in!')
    } catch (error: any) {
      if (error.response) {
        toast.error('Login Failed')
      } else {
        toast.error('Network Error')
      }
    }
  };

  return (
    <AuthContext.Provider value={{ token, user, setToken, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be inside AuthProvider");
  return context;
};
import { createContext, useState, useContext, useEffect, type ReactNode } from "react";
import api from "../api/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

interface LoginResponse {
  id: number;
  email: string;
  token: string;
}

interface AuthContextType {
  token: string | null;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("access_token")
  );

  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("user_data");
    return stored ? JSON.parse(stored) : null;
  });

  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("access_token", token);
    } else {
      delete api.defaults.headers.common["Authorization"];
      localStorage.removeItem("access_token");
    }
  }, [token]);

  const fetchUser = async (id: number) => {
    const res = await api.get<User>(`/users/${id}`);
    setUser(res.data);
    localStorage.setItem("user_data", JSON.stringify(res.data));
  };

  const login = async (email: string, password: string) => {
    try {
      const res = await api.post<LoginResponse>("/login", { email, password });
      const { id, token } = res.data;
      setToken(token);
      await fetchUser(id);
      toast.success("Successfully Logged in!");
    } catch (error: any) {
      if (error.response) {
        toast.error(`Login Failed`);
        console.log(error.response)
      } else {
        toast.error("Network Error");
      }
    }
  };

  const logout = () => {
    navigate('/login')
    setToken(null);
    setUser(null);
    localStorage.removeItem("user_data");
    toast("Logged out");
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be inside AuthProvider");
  return context;
};
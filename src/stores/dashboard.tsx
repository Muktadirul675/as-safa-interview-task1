import { createContext, useContext, useState, type ReactNode } from "react";
import api from "../api/api";
import toast from "react-hot-toast";

interface DashboardContextType {
  overview: Overview | null;
  users: User[];
  analytics: Analytics[];
  products: Product[];
  loading: boolean;
  fetchDashboard: () => Promise<void>;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [overview, setOverview] = useState<Overview | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [analytics, setAnalytics] = useState<Analytics[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      const res = await api.get<{
        overview: Overview;
        users: User[];
        analytics: Analytics[];
        products: Product[];
      }>("/dashboard");

      setOverview(res.data.overview);
      setUsers(res.data.users);
      setAnalytics(res.data.analytics);
      setProducts(res.data.products);
    } catch (error: any) {
      toast.error("Failed to fetch dashboard data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardContext.Provider
      value={{ overview, users, analytics, products, loading, fetchDashboard }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context)
    throw new Error("useDashboard must be used inside DashboardProvider");
  return context;
};
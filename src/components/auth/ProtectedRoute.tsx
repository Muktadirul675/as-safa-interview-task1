import { useEffect, type ReactNode } from "react";
import { useAuth } from "../../stores/auth";
import { Navigate, useLocation } from "react-router";
import toast from "react-hot-toast";


interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { token } = useAuth();
  const location = useLocation();

  useEffect(()=>{ 
    if(!token) toast.error('Please log in')
  },[token])

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
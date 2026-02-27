import { useEffect } from "react";
import { useAuth } from "../../stores/auth";
import { setAuthToken } from "../../api/api";

export const AuthSync = () => {
  const { token } = useAuth();

  useEffect(() => {
    setAuthToken(token);
  }, [token]);

  return null;
};
import { useCallback } from "react";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export const useSecureLogout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const secureLogout = useCallback(async () => {
    try {
      // Perform logout
      await logout();

      // Clear any additional sensitive data
      sessionStorage.clear();

      // Clear any cached data (if using React Query, SWR, etc.)
      // queryClient.clear();

      // Navigate to login page
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
      // Even if logout fails, clear local state and redirect
      navigate("/login", { replace: true });
    }
  }, [logout, navigate]);

  return secureLogout;
};

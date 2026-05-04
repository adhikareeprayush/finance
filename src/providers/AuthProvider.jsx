import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  isAuthenticated as checkAuthStatus,
  getCurrentUser,
  logoutUser,
  clearAuthTokens,
  getAuthToken,
} from "../lib/auth/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  const handleLogout = useCallback(async () => {
    setIsLoading(true);

    try {
      await logoutUser();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      clearAuthTokens();
      setUser(null);
      setIsAuthenticated(false);
      setIsLoading(false);
      setIsInitialized(false);
    }
  }, []);

  const initializeAuth = useCallback(async () => {
    setIsLoading(true);

    try {
      const token = getAuthToken();
      if (!token) {
        setIsAuthenticated(false);
        setUser(null);
        return;
      }

      const authenticated = await checkAuthStatus();

      if (authenticated) {
        try {
          const userData = await getCurrentUser();
          setUser(userData);
          setIsAuthenticated(true);
        } catch (error) {
          console.error("Failed to get user data:", error);
          await handleLogout();
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Auth initialization failed:", error);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setIsLoading(false);
      setIsInitialized(true);
    }
  }, [handleLogout]);

  const login = useCallback(async (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isInitialized) {
      initializeAuth();
    }
  }, [initializeAuth, isInitialized]);

  useEffect(() => {
    if (!isAuthenticated) return;

    const intervalId = setInterval(async () => {
      const authenticated = await checkAuthStatus();
      if (!authenticated) {
        await handleLogout();
      }
    }, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [isAuthenticated, handleLogout]);

  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (!document.hidden && isAuthenticated) {
        const authenticated = await checkAuthStatus();
        if (!authenticated) {
          await handleLogout();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isAuthenticated, handleLogout]);

  const contextValue = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout: handleLogout,
    refreshAuth: initializeAuth,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

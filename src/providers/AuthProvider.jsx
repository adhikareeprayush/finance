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

// Helper function to check if token is a mock token
const isMockToken = (token) => {
  return (
    token &&
    (token.startsWith("mock-") ||
      token === "mock_token" ||
      token.includes("mock") ||
      token.length < 50) // Mock tokens are usually shorter
  );
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize auth state
  const initializeAuth = useCallback(async () => {
    // Prevent multiple simultaneous initializations
    if (isLoading && isInitialized) return;

    setIsLoading(true);

    try {
      const token = getAuthToken();
      if (!token) {
        setIsAuthenticated(false);
        setUser(null);
        setIsInitialized(true);
        return;
      }

      const authenticated = await checkAuthStatus();

      if (authenticated) {
        // For mock tokens, just set as authenticated without API call
        if (isMockToken(token)) {
          setUser({ id: "mock-user", email: "mock@example.com" });
          setIsAuthenticated(true);
        } else {
          // Get user data for real tokens
          try {
            const userData = await getCurrentUser();
            setUser(userData);
            setIsAuthenticated(true);
          } catch (error) {
            console.error("Failed to get user data:", error);
            await handleLogout();
          }
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
  }, [isLoading, isInitialized]);

  // Handle login
  const login = useCallback(async (userData, tokens) => {
    setUser(userData);
    setIsAuthenticated(true);
    setIsLoading(false);
  }, []);

  // Handle logout
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

  // Listen for auth events from axios interceptor
  useEffect(() => {
    const handleAuthLogout = () => {
      setUser(null);
      setIsAuthenticated(false);
    };

    window.addEventListener("auth:logout", handleAuthLogout);

    return () => {
      window.removeEventListener("auth:logout", handleAuthLogout);
    };
  }, []);

  // Initialize auth on mount
  useEffect(() => {
    if (!isInitialized) {
      initializeAuth();
    }
  }, [initializeAuth, isInitialized]);

  // Periodic token validation (every 5 minutes) - Disabled for mock tokens
  useEffect(() => {
    if (!isAuthenticated) return;

    const token = getAuthToken();
    // Skip periodic validation for mock tokens
    if (isMockToken(token)) return;

    const intervalId = setInterval(async () => {
      const authenticated = await checkAuthStatus();
      if (!authenticated) {
        await handleLogout();
      }
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(intervalId);
  }, [isAuthenticated, handleLogout]);

  // Handle tab visibility change - check auth when tab becomes visible
  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (!document.hidden && isAuthenticated) {
        const token = getAuthToken();
        // Skip visibility validation for mock tokens
        if (isMockToken(token)) return;

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

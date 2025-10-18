import { useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";
import { isAuthenticated, clearAuthTokens } from "../lib/auth/auth";

/**
 * Security middleware component that performs additional security checks
 * This component should be included in protected routes
 */
export const SecurityMiddleware = ({ children }) => {
  const { isAuthenticated: contextAuth, logout } = useAuth();

  useEffect(() => {
    // Perform security checks
    const performSecurityChecks = async () => {
      try {
        // Check if tokens are still valid
        const authStatus = await isAuthenticated();

        // If context says authenticated but token validation fails
        if (contextAuth && !authStatus) {
          console.warn(
            "Security check failed: Token invalid but context authenticated"
          );
          await logout();
          return;
        }

        // Check for suspicious localStorage modifications
        const authToken = localStorage.getItem("authToken");
        if (contextAuth && (!authToken || authToken.length < 10)) {
          console.warn("Security check failed: Suspicious token detected");
          await logout();
          return;
        }

        // Validate token format (basic JWT structure check) - Skip for mock tokens
        if (
          authToken &&
          !isValidJWTFormat(authToken) &&
          !isMockToken(authToken)
        ) {
          console.warn("Security check failed: Invalid JWT format");
          clearAuthTokens();
          await logout();
          return;
        }
      } catch (error) {
        console.error("Security check error:", error);
        await logout();
      }
    };

    if (contextAuth) {
      performSecurityChecks();

      // Set up periodic security checks - less frequent for mock tokens
      const authToken = localStorage.getItem("authToken");
      const checkInterval = isMockToken(authToken) ? 300000 : 60000; // 5 minutes for mock, 1 minute for real

      const interval = setInterval(performSecurityChecks, checkInterval);

      return () => clearInterval(interval);
    }
  }, [contextAuth, logout]);

  // Listen for storage events (someone modifying localStorage in another tab)
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "authToken" && contextAuth) {
        // Token was modified in another tab
        if (
          !e.newValue ||
          (!isValidJWTFormat(e.newValue) && !isMockToken(e.newValue))
        ) {
          console.warn("Security alert: Auth token modified externally");
          logout();
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [contextAuth, logout]);

  return children;
};

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

// Helper function to validate JWT format
const isValidJWTFormat = (token) => {
  if (!token || typeof token !== "string") return false;

  const parts = token.split(".");
  if (parts.length !== 3) return false;

  try {
    // Try to decode the header and payload
    JSON.parse(atob(parts[0]));
    JSON.parse(atob(parts[1]));
    return true;
  } catch {
    return false;
  }
};

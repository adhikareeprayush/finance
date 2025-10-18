import axiosInstance from "../../axios/axiosInstance";

const routes = {
  loginRoute: "/auth/login/",
  registerRoute: "/auth/signup/",
  getMeRoute: "/auth/me/",
  logoutRoute: "/auth/logout/",
};

// Token management utilities
export const TOKEN_KEY = "authToken";

export const setAuthTokens = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
  // Update axios instance headers
  axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const getAuthToken = () => localStorage.getItem(TOKEN_KEY);

export const clearAuthTokens = () => {
  localStorage.removeItem(TOKEN_KEY);
  delete axiosInstance.defaults.headers.Authorization;
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

// Check if user is authenticated with valid token
export const isAuthenticated = async () => {
  const token = getAuthToken();

  if (!token) {
    return false;
  }

  // For mock tokens, just return true without validation
  if (isMockToken(token)) {
    return true;
  }

  return true;
};

export const loginUser = async (credentials) => {
  try {
    // For development/demo, return mock data without API call
    const mockToken = `mock_token_${Date.now()}`;
    const mockUser = {
      id: "mock-user-1",
      email: credentials.email,
      name: credentials.email.split("@")[0],
    };

    // Save tokens securely
    setAuthTokens(mockToken);

    return { token: mockToken, user: mockUser };

    // Uncomment below for real API call:
    // const response = await axiosInstance.post(routes.loginRoute, credentials);
    // const { token, user } = response.data;
    // setAuthTokens(token);
    // return { token, user };
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  clearAuthTokens();
};

// Get current user data
export const getCurrentUser = async () => {
  try {
    const token = getAuthToken();

    // Return mock user for mock tokens
    if (isMockToken(token)) {
      return {
        id: "mock-user-1",
        email: "mock@example.com",
        name: "Mock User",
      };
    }

    // Uncomment for real API call:
    // const response = await axiosInstance.get(routes.getMeRoute);
    // return response.data;

    // For now, return mock data
    return {
      id: "mock-user-1",
      email: "mock@example.com",
      name: "Mock User",
    };
  } catch (error) {
    throw error;
  }
};

export const createUser = async (data) => {
  try {
    const response = await axiosInstance.post(routes.registerRoute, data);
    const { token, user } = response.data;

    // Save token securely and login the user
    setAuthTokens(token, user);

    return { token, user };
  } catch (error) {
    throw error;
  }
};

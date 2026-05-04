export const TOKEN_KEY = "authToken";
export const USER_KEY = "ledgerlens_user";

export const setStoredUser = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getStoredUser = () => {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const setAuthTokens = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getAuthToken = () => localStorage.getItem(TOKEN_KEY);

export const clearAuthTokens = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

export const isAuthenticated = async () => {
  return Boolean(getAuthToken());
};

export const loginUser = async (credentials) => {
  const mockToken = `mock_token_${Date.now()}`;
  const mockUser = {
    id: "local-user",
    email: credentials.email,
    name: credentials.email.split("@")[0] || "User",
  };
  setAuthTokens(mockToken);
  setStoredUser(mockUser);
  return { token: mockToken, user: mockUser };
};

export const logoutUser = async () => {
  clearAuthTokens();
};

export const getCurrentUser = async () => {
  const stored = getStoredUser();
  if (stored) return stored;
  return {
    id: "local-user",
    email: "guest@ledgerlens.local",
    name: "Guest",
  };
};

export const createUser = async (data) => {
  if (data.password !== data.confirmPassword) {
    throw new Error("Passwords do not match");
  }
  const mockToken = `mock_token_${Date.now()}`;
  const name =
    [data.firstName, data.lastName].filter(Boolean).join(" ").trim() ||
    data.email.split("@")[0];
  const mockUser = {
    id: "local-user",
    email: data.email,
    name,
  };
  setAuthTokens(mockToken);
  setStoredUser(mockUser);
  return { token: mockToken, user: mockUser };
};

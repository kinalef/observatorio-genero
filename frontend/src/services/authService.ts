// src/services/authService.ts

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

export const authService = {
  getAccessToken: () => {
    console.log("----localStorage.getItem(ACCESS_TOKEN_KEY): ---"+localStorage.getItem(ACCESS_TOKEN_KEY));
    return typeof window !== 'undefined' ? localStorage.getItem(ACCESS_TOKEN_KEY) : null;
  },

  getRefreshToken: () => {
    console.log("----localStorage.getItem(REFRESH_TOKEN_KEY): ---"+localStorage.getItem(REFRESH_TOKEN_KEY));
    return typeof window !== 'undefined' ? localStorage.getItem(REFRESH_TOKEN_KEY) : null;
  },

  setTokens: (accessToken: string, refreshToken: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    }
  },

  clearTokens: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
    }
  },

  refreshAccessToken: async (): Promise<string | null> => {
    const refreshToken = authService.getRefreshToken();
    if (!refreshToken) return null;

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ refreshToken })
      });

      if (!response.ok) throw new Error('Refresh failed');

      const data = await response.json();
      authService.setTokens(data.token, refreshToken);
      return data.token;
    } catch (err) {
      console.error('Error refreshing token:', err);
      authService.clearTokens();
      return null;
    }
  }
};

export async function refreshTokenIfNeeded(): Promise<string | null> {
    console.log("+++++++refreshTokenIfNeeded++++++++");
    const token = authService.getAccessToken();
    if (!token) {
      return await authService.refreshAccessToken();
    }
    return token;
  }
// Each file in this folder are fetches of one feature.
// E.g: authApi.js stores fetches about authentication

const BASE_API = process.env.REACT_APP_BASE_API || 'http://localhost:5000';

const apiUrl = `${BASE_API}/api`;

export const authApi = {
  register: async (parameter: {
    email: string;
    username: string;
    password: string;
  }) => {
    const payload = {
      email: parameter.email,
      username: parameter.username,
      password: parameter.password,
    };

    const response = await fetch(`${apiUrl}/auth/register`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return response.json();
  },

  login: async (parameter: { email: string; password: string }) => {
    const payload = {
      email: parameter.email,
      password: parameter.password,
    };

    const response = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return response.json();
  },

  checkAuth: async () => {
    const response = await fetch(`${apiUrl}/auth/checkAuth`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  },

  logout: async () => {
    const response = await fetch(`${apiUrl}/auth/logout`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  },
};

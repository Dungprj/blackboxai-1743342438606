import api from './axiosConfig';

export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const refreshToken = async () => {
  try {
    const response = await api.post('/auth/refresh-token');
    return response.data.token;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const logoutAPI = async () => {
  try {
    await api.post('/auth/logout');
  } catch (error) {
    console.error('Logout error:', error);
  }
};
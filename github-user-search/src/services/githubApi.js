import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_GITHUB_API_URL,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    // Uncomment if using authentication
    // 'Authorization': `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
  }
});

export const searchUsers = async (query) => {
  try {
    const response = await api.get(`/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    console.error('Error searching users:', error);
    return [];
  }
};

export const getUserDetails = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    return null;
  }
};
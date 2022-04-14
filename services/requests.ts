import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001`,
});

export const requestPosts = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};


export default api;

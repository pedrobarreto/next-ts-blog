import axios from 'axios';

const api = axios.create({
  baseURL: `https://next-ts-blog-lime.vercel.app`,
});

export const requestPosts = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};


export default api;

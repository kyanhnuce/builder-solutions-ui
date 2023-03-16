import axios from 'axios';

const request = axios.create({
  baseURL: 'https://builder-api.herokuapp.com/',
  baseURL: 'http://localhost:5000/',
});

export const get = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};

export default request;

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.2.3:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
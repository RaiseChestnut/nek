import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    timeout: 10000,
    baseURL: '/api',
  })
  instance.interceptors.request.use(config => {
      if (localStorage.getItem('token')) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
      }
      return config;
    },
    err => {
      return Promise.reject(err);
    });
  return instance(config)
}
import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    timeout: 10000,
    baseURL: 'http://119.45.2.113:8888',
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
import axios from 'axios';

var axiosInstance = axios.create({
  // baseURL: 'http://dummy.restapiexample.com/api/v1/',
  baseURL: 'http://testing.myvehicle.biz/api/',
});

module.exports = axiosInstance;
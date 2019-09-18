import axios from 'axios';

var axiosInstance = axios.create({
  baseURL: 'http://dummy.restapiexample.com/api/v1/',
});

module.exports = axiosInstance;
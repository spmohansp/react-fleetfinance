import axios from 'axios'

export default () => {
  return axios.create({baseUrl: 'https://domain.com/foo/bar'})
}
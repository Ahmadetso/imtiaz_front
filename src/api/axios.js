import axios from 'axios'

const api = axios.create({
  baseURL: 'http://imtiaz_back_end.test:8080/api/v1/',
  setTimeout: 5000,
})

export default api

import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/prophesierc/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accccept: 'application/json',
    'Content-Type': 'applicaction/json'
  }
})

export default{
    getEvents() {
        return apiClient.get('/events')
    }
}
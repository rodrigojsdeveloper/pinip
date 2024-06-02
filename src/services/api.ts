import axios from 'axios'

export const api = axios.create({
  baseURL: `https://api.ipdata.co`,
  headers: {
    'Content-Type': 'application/json',
  },
})

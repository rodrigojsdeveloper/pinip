import axios from 'axios'

export const api = axios.create({
  baseURL: `https://api.ipdata.co?api-key=${process.env.NEXT_APP_API_KEY}`,
  headers: {
    'Content-Type': 'application/json',
  },
})

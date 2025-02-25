import axios from "axios"
const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'x-rapidapi-key': "0beac6db4cmshbffd047c24e6cf3p1e1df8jsn355f6225cac7".toString(),
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options)
    return response.data.items
  },
}
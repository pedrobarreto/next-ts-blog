
import axios, { AxiosResponse, AxiosRequestHeaders} from 'axios'

export const getDevApi = async (endpoint:string) => {
  // const params = { username:process.env.USER, per_page: 10  }
  const params = { }
  const headers:AxiosRequestHeaders = { api_key: process.env.APIKEY }
  const {data}: AxiosResponse = await axios.get(`https://dev.to/api/${endpoint}`, {
      params,
      headers,
  })
  return data 
}

getDevApi('articles')
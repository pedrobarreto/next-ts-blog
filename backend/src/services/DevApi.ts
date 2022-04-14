import axios, { AxiosResponse, AxiosRequestHeaders} from 'axios'
import dotenv from 'dotenv';

dotenv.config();


export const getDevApi = async ({ endpoint, pagination }:any) => {
  const params = { per_page: 6, page: pagination, }
  const headers:AxiosRequestHeaders = { api_key: process.env.APIKEY  as any }
  const {data}: AxiosResponse = await axios.get(`https://dev.to/api/${endpoint}`, {
      params,
      headers,
  })
  return data
}

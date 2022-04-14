import axios, { AxiosResponse, AxiosRequestHeaders} from 'axios'

export const getDevApi = async ({ endpoint, pagination }:any) => {
  const params = { per_page: 6, page: pagination, }
  const headers:AxiosRequestHeaders = { api_key: process.env.APIKEY  }
  const {data}: AxiosResponse = await axios.get(`https://dev.to/api/${endpoint}`, {
      params,
      headers,
  })
  return data
}

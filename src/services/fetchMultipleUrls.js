import axios from 'axios'
// import { request } from './http-client'

export const fetchMultipleUrls = async (urls) => {
  let data
  try {
    data = await Promise.all(
      urls.map(async (url) => {
        try {
          const response = await axios.get('https://admin.conun.io/api/' + url)

          return response.data
        } catch (e) {
          console.log(e)
          return e?.response?.data
        }
      })
    )
  } catch (error) {
    console.error(error)
  }

  return data
}

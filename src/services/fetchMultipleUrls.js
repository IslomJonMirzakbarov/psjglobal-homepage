//import axios from 'axios'
import ifetch from 'isomorphic-fetch'
// import { request } from './http-client'

export const fetchMultipleUrls = async (urls) => {
  let data
  try {
    data = await Promise.all(
      urls.map(async (url) => {
        try {
          const response = await ifetch('https://admin.conun.io/api/' + url)

          return response.json()
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

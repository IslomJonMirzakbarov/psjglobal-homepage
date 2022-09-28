import { request } from './http-client'

export const fetchMultipleUrls = async (urls) => {
  let data
  try {
    data = await Promise.all(
      urls.map(async (url) => {
        try {
          const response = await request.get(
            process.env.NEXT_PUBLIC_BASE_URL + url
          )
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

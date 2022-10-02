import axios from 'axios'
import { parseCookies } from 'nookies'
import https from 'https'

const cookies = parseCookies()

const agent = new https.Agent({
  rejectUnauthorized: false
})

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  httpsAgent: agent
})

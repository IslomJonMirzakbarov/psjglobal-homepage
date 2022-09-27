import { setCookie } from 'nookies'

export default function saveLang(lang) {
  setCookie(null, 'lang', lang, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/'
  })
}

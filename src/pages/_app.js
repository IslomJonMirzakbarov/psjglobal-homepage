import { ThemeProvider } from '@emotion/react'
import Layout from 'components/Layout'
import 'styles/globals.scss'
import theme from 'mui-theme'
import { persistor, store } from '../store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import NextNProgress from 'nextjs-progressbar'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import saveLang from 'utils/saveLang'
import { parseCookies } from 'nookies'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage
    const cookies = parseCookies()
    if (router.pathname !== '/404') {
      if (!cookies && !cookies.lang) {
        if (userLang === 'ko') {
          router.push(router.asPath, router.asPath, { locale: 'kr' })
          saveLang('kr')
        } else {
          router.push(router.asPath, router.asPath, { locale: 'en' })
          saveLang('en')
        }
      } else {
        if (cookies.lang) {
          router.push(router.asPath, router.asPath, { locale: cookies.lang })
        }
      }
    }
  }, [])

  return (
    <Provider store={store}>
      {typeof window !== 'undefined' ? (
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Layout>
              <NextNProgress
                options={{
                  showSpinner: false
                }}
                color='#0012B0'
              />
              <Component {...pageProps} />
              <Toaster position='top-center' reverseOrder={false} />
            </Layout>
          </ThemeProvider>
        </PersistGate>
      ) : (
        <ThemeProvider theme={theme}>
          <Layout>
            <NextNProgress
              options={{
                showSpinner: false
              }}
              color='#0012B0'
            />
            <Component {...pageProps} />
            <Toaster position='top-center' reverseOrder={false} />
          </Layout>
        </ThemeProvider>
      )}
    </Provider>
  )
}

export default MyApp

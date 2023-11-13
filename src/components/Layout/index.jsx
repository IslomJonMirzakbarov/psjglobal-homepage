import { Footer } from 'components/UI/Footer/Footer'
import { Header } from 'components/UI/Header/Header'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()

  return (
    <>
      {router.pathname !== '/cycon-event' && <Header />}
      {children}
      {/* <Footer /> */}
    </>
  )
}

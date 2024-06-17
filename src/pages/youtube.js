import SEO from 'components/SEO'
import { Footer } from 'components/UI/Footer/Footer'
import YouTube from 'components/UI/YouTube/YouTube'

export default function FaqPage() {
  return (
    <>
      <SEO />
      <main className='faq-bg'>
        <YouTube />
        <Footer />
      </main>
    </>
  )
}

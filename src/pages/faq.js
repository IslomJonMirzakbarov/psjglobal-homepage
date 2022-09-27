import SEO from 'components/SEO'
import Faq from 'components/UI/Faq/Faq'
import { Footer } from 'components/UI/Footer/Footer'
import { fetchMultipleUrls } from 'services/fetchMultipleUrls'

export default function FaqPage({ faqs }) {
  console.log('faqs', faqs)
  return (
    <>
      <SEO />
      <main className='faq-bg'>
        <Faq faqs={faqs?.data} />
        <Footer />
      </main>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const urls = [`faqs`]
  const [faqs] = await fetchMultipleUrls(urls)

  return {
    props: {
      faqs
    }
  }
}

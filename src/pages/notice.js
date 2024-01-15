import SEO from 'components/SEO'
import { Footer } from 'components/UI/Footer/Footer'
import Notice from 'components/UI/Notice/Notice'
import { fetchMultipleUrls } from 'services/fetchMultipleUrls'

export default function NoticePage({ notifications }) {
  return (
    <>
      <SEO />
      <main className='faq-bg'>
        <Notice notifications={notifications?.data} />
        <Footer />
      </main>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const urls = ['notifications?sort=createdAt:desc']
  const [notifications] = await fetchMultipleUrls(urls)

  return {
    props: {
      notifications
    }
  }
}

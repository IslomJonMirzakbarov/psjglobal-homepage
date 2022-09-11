import SEO from 'components/SEO'
import News from 'components/UI/News/News'
import ExternalNews from 'components/UI/ExternalNews/ExternalNews'
import { Footer } from 'components/UI/Footer/Footer'
import { fetchMultipleUrls } from 'services/fetchMultipleUrls'

export default function NewsPage({ news, externalNews }) {
  return (
    <>
      <SEO />
      <main>
        <div className='news-bg'>
          <News isNewsPage news={news?.data} />
          <ExternalNews externalNews={externalNews?.data} />
          <Footer />
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const urls = ['external-news', 'news?populate=*']
  const [externalNews, news] = await fetchMultipleUrls(urls)

  return {
    props: {
      externalNews,
      news
    }
  }
}

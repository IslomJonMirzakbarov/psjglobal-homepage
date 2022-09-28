import SEO from 'components/SEO'
import News from 'components/UI/News/News'
import ExternalNews from 'components/UI/ExternalNews/ExternalNews'
import { Footer } from 'components/UI/Footer/Footer'
import { fetchMultipleUrls } from 'services/fetchMultipleUrls'

export default function NewsPage({ news, externalNews, newsItem }) {
  return (
    <>
      <SEO />
      <main>
        <div className='news-bg'>
          <News
            isNewsPage
            news={news?.data}
            count={news?.meta?.pagination?.total}
            newsItem={newsItem?.data}
          />
          <ExternalNews
            count={externalNews?.meta?.pagination?.total}
            isNewsPage
            externalNews={externalNews?.data}
          />
          {/* <News isNewsPage />
          <ExternalNews isNewsPage /> */}
          <Footer />
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const urls = [
    `external-news?pagination[start]=${
      query.externalNewsPage * 8 || 0
    }&pagination[limit]=8`,
    `news?sort=order:asc&populate=*&pagination[start]=${
      (query.newsPage * 5 || 0) + 1
    }&pagination[limit]=5`,
    'news?sort=order:asc&populate=*&pagination[start]=0&pagination[limit]=1'
  ]
  const [externalNews, news, newsItem] = await fetchMultipleUrls(urls)

  return {
    props: {
      externalNews,
      news,
      newsItem
    }
  }
}

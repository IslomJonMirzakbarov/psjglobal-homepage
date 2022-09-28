import SEO from 'components/SEO'
import { fetchMultipleUrls } from 'services/fetchMultipleUrls'
import Banner from 'components/UI/Banner/Banner'
import Products from 'components/UI/Products/Products'
import Roadmap from 'components/UI/Roadmap/Roadmap'
import Advantage from 'components/UI/Advantage/Advantage'
import News from 'components/UI/News/News'
import ExternalNews from 'components/UI/ExternalNews/ExternalNews'
import { Footer } from 'components/UI/Footer/Footer'

export default function Home({ news, externalNews, roadmaps }) {
  console.log('news', news, externalNews, roadmaps)
  return (
    <>
      <SEO />
      <main>
        <Banner />
        <Products />
        <Advantage />
        <div className='home-bg'>
          <Roadmap roadmaps={roadmaps?.data} />
          <News news={news?.data} count={news?.meta?.pagination?.total} />
          <ExternalNews
            externalNews={externalNews?.data}
            count={externalNews?.meta?.pagination?.total}
          />
          <Footer />
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const urls = [
    'external-news?pagination[start]=0&pagination[limit]=8',
    'news?sort=order:asc&populate=*&pagination[start]=0&pagination[limit]=4',
    'roadmaps?populate=*,quaters.items'
  ]
  const [externalNews, news, roadmaps] = await fetchMultipleUrls(urls)

  return {
    props: {
      externalNews,
      news,
      roadmaps
    }
  }
}

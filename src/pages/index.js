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
  console.log('roadmaps==>', roadmaps)
  return (
    <>
      <SEO />
      <main>
        <Banner />
        <Products />
        <Advantage />
        <div className='home-bg'>
          <Roadmap roadmaps={roadmaps?.data} />
          <News news={news?.data} />
          <ExternalNews externalNews={externalNews?.data} />
          <Footer />
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const urls = [
    'external-news',
    'news?populate=*',
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

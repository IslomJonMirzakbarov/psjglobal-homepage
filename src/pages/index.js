import SEO from 'components/SEO'
import { fetchMultipleUrls } from 'services/fetchMultipleUrls'
import Banner from 'components/UI/Banner/Banner'
import Products from 'components/UI/Products/Products'
import Roadmap from 'components/UI/Roadmap/Roadmap'
import Advantage from 'components/UI/Advantage/Advantage'
import News from 'components/UI/News/News'
import ExternalNews from 'components/UI/ExternalNews/ExternalNews'
import { Footer } from 'components/UI/Footer/Footer'

export default function Home() {
  return (
    <>
      <SEO />
      <main>
        <Banner />
        <Products />
        <Advantage />
        <div className='home-bg'>
          <Roadmap />
          <News />
          <ExternalNews />
          <Footer />
        </div>
      </main>
    </>
  )
}

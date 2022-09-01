import SEO from 'components/SEO'
import News from 'components/UI/News/News'
import ExternalNews from 'components/UI/ExternalNews/ExternalNews'
import { Footer } from 'components/UI/Footer/Footer'

export default function NewsPage() {
  return (
    <>
      <SEO />
      <main>
        <div className='news-bg'>
          <News />
          <ExternalNews />
          <Footer />
        </div>
      </main>
    </>
  )
}

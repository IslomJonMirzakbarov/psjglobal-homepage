import SEO from 'components/SEO'
import { Footer } from 'components/UI/Footer/Footer'
import ConunEdu from 'components/UI/Products/ConunEdu'

export default function ConunEduPage() {
  return (
    <>
      <SEO />
      <div className='conun-edu home-bg'>
        <main className='content-wrap'>
          <ConunEdu />
        </main>
        <Footer />
      </div>
    </>
  )
}

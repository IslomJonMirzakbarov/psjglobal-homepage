import SEO from 'components/SEO'
import { Footer } from 'components/UI/Footer/Footer'
import Sns from 'components/UI/Sns'
import useTranslation from 'next-translate/useTranslation'

export default function UserGuidePage() {
  const { t } = useTranslation('common')

  return (
    <>
      <SEO />
      <main>
        <div className='download-bg overflow-hidden'>
          <Sns />
          <Footer />
        </div>
      </main>
    </>
  )
}

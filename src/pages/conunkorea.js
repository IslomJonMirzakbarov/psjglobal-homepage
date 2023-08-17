import SEO from 'components/SEO'
import { Footer } from 'components/UI/Footer/Footer'
import ConunKorea from 'components/UI/ConunKorea'
import useTranslation from 'next-translate/useTranslation'

export default function UserGuidePage() {
  const { t } = useTranslation('common')

  return (
    <>
      <SEO />
      <main>
        <div className='download-bg overflow-hidden'>
          <ConunKorea />
          <Footer />
        </div>
      </main>
    </>
  )
}

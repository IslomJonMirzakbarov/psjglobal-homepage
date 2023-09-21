import SEO from 'components/SEO'
import { Footer } from 'components/UI/Footer/Footer'
import TokenInfo from 'components/UI/TokenInfo'
import useTranslation from 'next-translate/useTranslation'

export default function TokenPage() {
  const { t } = useTranslation('common')

  return (
    <>
      <SEO />
      <main>
        <div className='download-bg overflow-hidden'>
          <TokenInfo />
          <Footer />
        </div>
      </main>
    </>
  )
}

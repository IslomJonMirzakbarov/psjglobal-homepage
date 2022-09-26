import SEO from 'components/SEO'
import { Footer } from 'components/UI/Footer/Footer'
import Metacon from 'components/UI/Download/Metacon/Metacon'
import { fetchMultipleUrls } from 'services/fetchMultipleUrls'
import useTranslation from 'next-translate/useTranslation'

export default function MetaconPage({ metacon }) {
  const { t } = useTranslation('common')
  const data = {
    title: 'Metacon',
    img: '/images/metacon.jpg',
    desc: t('download_metacon_desc'),
    items: [
      {
        title: 'Chrome',
        //desc: 'OSX 10.9 later',
        img: '/icons/chrome.png',
        active: false,
        imgWidth: 56,
        imgHeight: 56
      },
      {
        title: 'iOS, android',
        //desc: '',
        img: ['/icons/apple.png', '/icons/android.png'],
        active: false
      }
    ]
  }

  return (
    <>
      <SEO />
      <main>
        <div className='download-bg overflow-hidden'>
          <Metacon data={data} items={metacon?.data?.attributes} />
          <Footer />
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const urls = ['metacon-download?populate=*,downloads.logo']
  const [metacon] = await fetchMultipleUrls(urls)

  return {
    props: {
      metacon
    }
  }
}

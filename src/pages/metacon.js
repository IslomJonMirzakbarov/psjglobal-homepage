import SEO from 'components/SEO'
import { Footer } from 'components/UI/Footer/Footer'
import Metacon from 'components/UI/Download/Metacon/Metacon'
import { fetchMultipleUrls } from 'services/fetchMultipleUrls'

export default function MetaconPage({ metacon }) {
  const data = {
    title: 'Metacon',
    img: '/images/metacon.jpg',
    desc: '<span>Best Security Wallet</span> Start Right Now!',
    items: [
      {
        title: 'Chrome',
        desc: 'OSX 10.9 later',
        img: '/icons/chrome.png',
        active: true,
        imgWidth: 56,
        imgHeight: 56
      },
      {
        title: 'iOS, android',
        desc: '',
        img: ['/icons/apple.png', '/icons/android.png'],
        active: false
      }
    ]
  }

  return (
    <>
      <SEO />
      <main>
        <div className='download-bg'>
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

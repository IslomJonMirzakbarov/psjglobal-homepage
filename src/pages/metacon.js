import SEO from 'components/SEO'
import { Footer } from 'components/UI/Footer/Footer'
import Metacon from 'components/UI/Download/Metacon/Metacon'

export default function MetaconPage() {
  const data = {
    title: 'Metacon',
    img: '/images/metacon.jpg',
    desc: '<span>Best Security Wallet</span> Start Right Now!',
    items: [
      {
        title: 'Chrome',
        desc: 'OSX 10.9 later',
        img: '/icons/chrome.png',
        active: true
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
          <Metacon data={data} />
          <Footer />
        </div>
      </main>
    </>
  )
}

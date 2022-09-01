import SEO from 'components/SEO'
import { Footer } from 'components/UI/Footer/Footer'
import OceanDrive from 'components/UI/OceanDrive/OceanDrive'

export default function OceanDrivePage() {
  const data = {
    title: 'OceanDrive',
    img: '/images/ocean-drive.jpg',
    desc: ' <span>User-First Drive</span> Start Right Now!',
    items: [
      {
        title: 'Windows',
        desc: 'Windows7 later',
        img: '/icons/windows.png',
        active: true
      },
      {
        title: 'macOS',
        desc: 'OSX 10.9 later',
        img: '/icons/apple.png',
        active: true
      },
      {
        title: 'Linux',
        desc: 'OSX 10.9 later',
        img: '/icons/linux.png',
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
          <OceanDrive data={data} />
          <Footer />
        </div>
      </main>
    </>
  )
}

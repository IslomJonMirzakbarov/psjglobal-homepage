import SEO from 'components/SEO'
import { Footer } from 'components/UI/Footer/Footer'
import OceanDrive from 'components/UI/Download/OceanDrive/OceanDrive'
import { fetchMultipleUrls } from 'services/fetchMultipleUrls'

export default function OceanDrivePage({ oceanDrive }) {
  console.log('oceanDrive', oceanDrive.data)
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
        imgWidth: 70,
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
          <OceanDrive data={data} items={oceanDrive?.data?.attributes} />
          <Footer />
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const urls = ['ocean-drive-download?populate=*,downloads.logo']
  const [oceanDrive] = await fetchMultipleUrls(urls)

  return {
    props: {
      oceanDrive
    }
  }
}

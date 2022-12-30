import SEO from 'components/SEO'
import { Footer } from 'components/UI/Footer/Footer'
import OceanDrive from 'components/UI/Download/OceanDrive/OceanDrive'
import { fetchMultipleUrls } from 'services/fetchMultipleUrls'
import useTranslation from 'next-translate/useTranslation'

export default function OceanDrivePage({ oceanDrive, analytic }) {
  const { t } = useTranslation('common')

  const data = {
    title: 'OceanDrive',
    img: '/images/ocean-drive.jpg',
    desc: t('download_ocean_drive_desc'),
    items: [
      {
        title: 'Windows',
        // desc: 'Windows7 later',
        img: '/icons/windows.png',
        active: false
      },
      {
        title: 'macOS',
        // desc: 'OSX 10.9 later',
        img: '/icons/apple.png',
        active: false
      },
      {
        title: 'Linux',
        // desc: 'OSX 10.9 later',
        img: '/icons/linux.png',
        imgWidth: 70,
        active: false
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
        <div className='download-bg overflow-hidden'>
          <OceanDrive
            data={data}
            items={oceanDrive?.data?.attributes}
            analytic={analytic?.data?.attributes}
          />
          <Footer />
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const urls = [
    'ocean-drive-download?populate=*,downloads.logo',
    'analytic-downloads-ocea-drive'
  ]
  const [oceanDrive, analytic] = await fetchMultipleUrls(urls)

  return {
    props: {
      oceanDrive,
      analytic
    }
  }
}

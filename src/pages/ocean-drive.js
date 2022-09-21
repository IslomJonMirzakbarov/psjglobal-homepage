import SEO from 'components/SEO'
import { Footer } from 'components/UI/Footer/Footer'
import OceanDrive from 'components/UI/Download/OceanDrive/OceanDrive'
import useTranslation from 'next-translate/useTranslation'

export default function OceanDrivePage() {
  const { t } = useTranslation('common')

  const data = {
    title: 'OceanDrive',
    img: '/images/ocean-drive.jpg',
    desc: t('download_ocean_drive_desc'),
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
        <div className='download-bg overflow-hidden'>
          <OceanDrive data={data} />
          <Footer />
        </div>
      </main>
    </>
  )
}

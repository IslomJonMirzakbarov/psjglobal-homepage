import SEO from 'components/SEO'
import { Footer } from 'components/UI/Footer/Footer'
import OceanDrive from 'components/UI/Products/OceanDrive/OceanDrive'

export default function OceanDrivePage() {
  return (
    <>
      <SEO />
      <main>
        <OceanDrive />
        <Footer />
      </main>
    </>
  )
}

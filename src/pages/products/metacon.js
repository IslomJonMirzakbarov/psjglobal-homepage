import SEO from 'components/SEO'
import { Footer } from 'components/UI/Footer/Footer'
import Metacon from 'components/UI/Products/Metacon/Metacon'

export default function OceanDrivePage() {
  return (
    <>
      <SEO />
      <main className="metacon-bg">
        <Metacon />
        <Footer isWhiteBg />
      </main>
    </>
  )
}

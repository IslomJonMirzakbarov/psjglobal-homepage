import SEO from 'components/SEO'
import { Footer } from 'components/UI/Footer/Footer'
import DreamCT from 'components/UI/Products/DreamCT/DreamCT'
import Metacon from 'components/UI/Products/Metacon/Metacon'

export default function DreamCTPage() {
  return (
    <>
      <SEO />
      <main className="metacon-bg">
        <DreamCT />
        <Footer isWhiteBg={true} />
      </main>
    </>
  )
}

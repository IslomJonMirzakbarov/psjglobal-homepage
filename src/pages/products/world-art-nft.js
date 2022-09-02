import SEO from 'components/SEO'
import { Footer } from 'components/UI/Footer/Footer'
import DexpoNft from 'components/UI/Products/DexpoNft/DexpoNft'

export default function DexpoNftPage() {
  return (
    <>
      <SEO />
      <main className='dexpo-nft-bg'>
        <DexpoNft />
        <Footer />
      </main>
    </>
  )
}

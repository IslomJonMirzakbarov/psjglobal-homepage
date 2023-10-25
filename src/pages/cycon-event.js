import SEO from 'components/SEO'
import CyconEvent from 'components/UI/CyconEvent'

export default function CyconEventPage() {
  return (
    <>
      <SEO />
      <main>
        <div className='overflow-hidden cycon-event-bg'>
          <CyconEvent />
        </div>
      </main>
    </>
  )
}

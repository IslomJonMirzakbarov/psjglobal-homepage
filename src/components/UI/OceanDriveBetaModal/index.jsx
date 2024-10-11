import GateioFirst from 'components/UI/OceanDriveEventModalFirst/GateioFirst'
import GateioModal from 'components/UI/OceanDriveEventModalSecond/GateioModal'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

const OceanDriveBetaModal = () => {
  const [isFirstPopupOpen, setFirstPopupOpen] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const isPopupClosed = Cookies.get('popupClosed')
    const isEventClosed = Cookies.get('oceandriveEvent')

    // Open the first modal if the user has not closed it
    if (!isPopupClosed) {
      setFirstPopupOpen(true)
    } else if (!isEventClosed) {
      // Open the second modal if the first modal was closed, but second was not
      setOpen(true)
    }
  }, [])

  const handleFirstPopupClose = () => {
    setFirstPopupOpen(false)
    setOpen(true) // Open the second modal
    Cookies.set('popupClosed', 'true', { expires: 1 / 144 }) // Set short expiration time for testing
  }

  const handleClose = () => {
    setOpen(false)
    Cookies.set('oceandriveEvent', 'true', { expires: 1 / 144 }) // Prevent second modal from reopening
  }

  return (
    <>
      <GateioFirst
        open={isFirstPopupOpen}
        handleClose={handleFirstPopupClose}
      />
      <GateioModal open={open} handleClose={handleClose} />
    </>
  )
}

export default OceanDriveBetaModal

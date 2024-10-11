import GateioFirst from 'components/UI/OceanDriveEventModalFirst/GateioFirst'
import GateioModal from 'components/UI/OceanDriveEventModalSecond/GateioModal'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

const OceanDriveBetaModal = () => {
  const [isFirstPopupOpen, setFirstPopupOpen] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!Cookies.get('popupClosed')) {
      setFirstPopupOpen(true)
    }
  }, [])

  useEffect(() => {
    if (Cookies.get('popupClosed') && !Cookies.get('oceandriveEvent')) {
      setFirstPopupOpen(false)
    }
  }, [])

  const handleFirstPopupClose = () => {
    setFirstPopupOpen(false)
    if (!Cookies.get('oceandriveEvent')) {
      setOpen(true)
    }
    Cookies.set('popupClosed', 'true', { expires: 1 / 144 })
  }

  const handleClose = () => {
    Cookies.set('oceandriveEvent', 'true', { expires: 1 / 144 })
    setOpen(false)
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

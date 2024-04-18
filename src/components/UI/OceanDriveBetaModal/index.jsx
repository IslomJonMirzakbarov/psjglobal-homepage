import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import ModalOcean from 'components/UI/OceanDriveBetaModal/ModalOcean'
import EventModal from 'components/UI/OceanDriveEventModal/EventModal'
import EventModalFirst from 'components/UI/OceanDriveEventModalFirst/EventModalFirst'
import EventModalSecond from 'components/UI/OceanDriveEventModalSecond/EventModalSecond'

const OceanDriveBetaModal = () => {
  const [isFirstPopupOpen, setFirstPopupOpen] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!Cookies.get('popupClosed')) {
      setFirstPopupOpen(true)
      setOpen(false)
    }
  }, [])

  useEffect(() => {
    if (Cookies.get('popupClosed') && !Cookies.get('oceandriveEvent')) {
      setOpen(true)
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
      {/* <ModalOcean
        isFirst={true}
        isPopupOpen={isFirstPopupOpen}
        setFirstPopupOpen={handleFirstPopupClose}
      /> */}
      <EventModalFirst
        open={isFirstPopupOpen}
        handleClose={handleFirstPopupClose}
      />
      <EventModalSecond open={open} handleClose={handleClose} />
      {/* <EventModal open={open} handleClose={handleClose} /> */}
    </>
  )
}

export default OceanDriveBetaModal

import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import ModalOcean from 'components/UI/OceanDriveBetaModal/ModalOcean'

const OceanDriveBetaModal = () => {
  const [isFirstPopupOpen, setFirstPopupOpen] = useState(false)

  useEffect(() => {
    if (!Cookies.get('popupClosed')) {
      setFirstPopupOpen(true)
    }
  }, [])

  const handleFirstPopupClose = () => {
    setFirstPopupOpen(false)
    Cookies.set('popupClosed', 'true', { expires: 1 / 144 })
  }

  return (
    <>
      <ModalOcean
        isFirst={true}
        isPopupOpen={isFirstPopupOpen}
        setFirstPopupOpen={handleFirstPopupClose}
      />
    </>
  )
}

export default OceanDriveBetaModal

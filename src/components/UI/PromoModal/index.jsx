import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import ModalComp from 'components/UI/PromoModal/ModalComp'

const PromoModal = () => {
  const [isFirstPopupOpen, setFirstPopupOpen] = useState(false)
  const [isSecondPopupOpen, setSecondPopupOpen] = useState(false)

  useEffect(() => {
    if (!Cookies.get('popupClosed')) {
      setFirstPopupOpen(true)
    }
  }, [])

  const handleFirstPopupClose = () => {
    setFirstPopupOpen(false)
    setSecondPopupOpen(true)
  }

  const handleSecondPopupClose = () => {
    setSecondPopupOpen(false)
    Cookies.set('popupClosed', 'true', { expires: 1 })
  }

  return (
    <>
      <ModalComp
        isFirst={true}
        isPopupOpen={isFirstPopupOpen}
        setFirstPopupOpen={handleFirstPopupClose}
        setSecondPopupOpen={setSecondPopupOpen}
        img='/images/first-promo.png'
        imgMobile='/images/first-promo.png'
      />
      <ModalComp
        isFirst={false}
        isPopupOpen={isSecondPopupOpen}
        setFirstPopupOpen={setFirstPopupOpen}
        setSecondPopupOpen={handleSecondPopupClose}
        img='/images/second-promo.png'
        imgMobile='/images/second-promo.png'
      />
    </>
  )
}

export default PromoModal

import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

const ModalComp = ({
  isFirst,
  isPopupOpen,
  setFirstPopupOpen,
  setSecondPopupOpen,
  img,
  imgMobile
}) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setIsMobile(true)
    }
  }, [])

  const handleClick = () => {
    if (isFirst) {
      setFirstPopupOpen(false)
      setSecondPopupOpen(true)
    } else {
      setSecondPopupOpen(false)
    }
  }

  return (
    <Modal
      isOpen={isPopupOpen}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 300
        },
        content: {
          padding: 0,
          border: 'none',
          position: 'relative',
          width: '600px',
          left: '50%',
          right: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, 0)',
          height: 'auto',
          overflow: 'hidden',
          marginTop: 60,
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
          zIndex: 299
        }
      }}
    >
      <button
        className='close-button'
        style={{
          position: 'absolute',
          top: 7,
          right: 7,
          background: 'transparent',
          color: isFirst ? 'black' : 'white',
          fontWeight: 'bold',
          border: 'none'
        }}
        onClick={handleClick}
      >
        <img
          className='close-x-img'
          src={isFirst ? '/images/close-x.svg' : '/images/close-x-white.svg'}
          alt=''
        />
      </button>
      <div
        style={{
          maxHeight: '80vh',
          overflowY: 'auto',
          overflowX: 'hidden',
          margin: 0,
          padding: 0,
          scrollbarWidth: 'thin',
          scrollbarColor: 'black transparent',
          '--webkit-scrollbar-width': '4px',
          '--webkit-scrollbar-thumb-color': 'black',
          width: '100%'
        }}
      >
        <img
          src={isMobile ? imgMobile : img}
          alt='First Popup'
          style={{ width: '100%', display: 'block' }}
        />
      </div>
      <style jsx global>{`
        @media (max-width: 600px) {
          .ReactModal__Content {
            width: 252px !important;
          }
          .close-button {
            top: -1px !important;
            right: -1px !important;
          }
          .close-x-img {
            width: 5px;
          }
        }
      `}</style>
    </Modal>
  )
}

export default ModalComp

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
      // setSecondPopupOpen(true)
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
          width: '476px',
          height: 'auto',
          left: '50%',
          right: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, 0)',
          overflow: 'hidden',
          marginTop: 60,
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
          zIndex: 299,
          borderRadius: 10
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
          border: 'none',
          zIndex: 999999
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
        {/* create the section in the picture (popup contents) here, use  inline styles */}
        <div
          style={{
            padding: '28px 0 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
            position: 'relative'
          }}
        >
          <p
            style={{
              fontSize: '25px',
              fontWeight: 700,
              marginBottom: '259px',
              textAlign: 'center'
            }}
            className='description'
          >
            SWAP버튼을 잠시 누르
          </p>
          <img
            src='/images/left_hand.svg'
            alt='Description'
            className='left-hand-img'
            style={{
              position: 'absolute',
              left: '-40px',
              top: 108
            }}
          />
          <img
            src='/images/right_hand.svg'
            alt='Description'
            className='right-hand-img'
            style={{
              position: 'absolute',
              right: '-40px',
              top: 108
            }}
          />
          <div
            className='description-txt'
            style={{
              fontSize: '15px',
              textAlign: 'center',
              fontWeight: '400',
              lineHeight: '25px'
            }}
          >
            사용하기 빠른 이용이 필요하신 서비스를 <br /> 고지 준비했습니다.
            멤버에 우 두시 안내드립니다. <br /> 이용에 불편을 드린 점
            죄송합니다.
          </div>
          <button
            onClick={handleClick}
            style={{
              marginTop: '45px',
              padding: '16.5px 0',
              width: '100%',
              fontSize: '15px',
              fontWeight: '700',
              backgroundColor: '#0012B0',
              color: 'white',
              border: 'none',
              borderRadius: '0 0 10px 10px',
              cursor: 'pointer',
              fontFamily: 'Noto Sans KR'
            }}
          >
            확인
          </button>
        </div>
      </div>
      <style jsx global>{`
        @media (max-width: 600px) {
          .ReactModal__Content {
            width: 317px !important;
          }
          .close-button {
            top: -1px !important;
            right: -1px !important;
          }
          .close-x-img {
            width: 6px;
          }
          .left-hand-img {
            width: 65%;
            top: 88px !important;
          }
          .right-hand-img {
            width: 65%;
            top: 88px !important;
          }
          .description {
            margin-bottom: 190px !important;
          }
          .description-txt {
            padding: 0 7px;
          }
        }
      `}</style>
    </Modal>
  )
}

export default ModalComp

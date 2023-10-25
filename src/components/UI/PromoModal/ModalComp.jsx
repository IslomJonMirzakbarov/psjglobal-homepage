import useTranslation from 'next-translate/useTranslation'
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
  const { t } = useTranslation('common')
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
          padding: '49px 0px 25px 38px',
          border: 'none',
          position: 'relative',
          width: '653px',
          height: 'auto',
          left: '50%',
          right: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, 0)',
          overflow: 'visible',
          marginTop: 60,
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
          zIndex: 299,
          borderRadius: 10,
          marginTop: 200
        }
      }}
    >
      <img
        style={{
          position: 'absolute',
          top: 8,
          left: 10
        }}
        className='cycon-icon'
        src={'/icons/cycon_icon.svg'}
        alt='cycon-icon'
      />
      <img
        style={{
          position: 'absolute',
          top: 85,
          left: 270
        }}
        className='dollar'
        src={'/icons/dollar.svg'}
        alt='dollar'
      />
      <img
        style={{
          position: 'absolute',
          bottom: 27,
          right: -31.37,
          zIndex: 999998
        }}
        className='cycon-phone'
        src={'/icons/cycon_phone.svg'}
        alt='cycon-phone'
      />

      <button
        className='close-button'
        style={{
          position: 'absolute',
          top: 15,
          right: 15,
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
        <p
          style={{
            fontSize: '33px',
            fontWeight: '700',
            lineHeight: '40px',
            marginBottom: '8px'
          }}
          className='cycon_giveaway_title'
        >
          <span style={{ color: '#ff7e41' }}>CYCON</span> x{' '}
          <span style={{ color: '#06d8e5' }}>Bitget</span> <br />
          EVENT
        </p>

        <p
          dangerouslySetInnerHTML={{ __html: t('cycon_giveaway_desc') }}
          className='cycon_giveaway_desc'
        />

        <button
          className='participate-btn'
          dangerouslySetInnerHTML={{ __html: t('participate_btn') }}
        />
      </div>
      <style jsx global>{`
        .participate-btn {
          width: 180px;
          height: 55px;
          border-radius: 10px;
          background-color: #0012b0;
          border: none;
          color: #fff;
          text-align: center;
          font-size: 15px;
          font-weight: 700;
          font-family: 'Noto Sans KR';
        }
        .cycon_giveaway_desc {
          color: #1a1a1a;
          font-size: 15px;
          font-weight: 400;
          line-height: 24px;
          margin-bottom: 61px;
        }
        .cycon_giveaway_desc span {
          font-size: 16px;
          font-weight: 700;
        }
        @media (max-width: 600px) {
          .ReactModal__Content {
            width: 335px !important;
            padding: 165px 33px 22px !important;
          }
          .participate-btn {
            margin-left: 50px;
          }
          .cycon_giveaway_title {
            text-align: center;
            font-size: 28px !important;
            line-height: 30px !important;
            margin-bottom: 15px !important;
          }
          .cycon_giveaway_desc {
            text-align: center;
            margin-bottom: 24px;
            font-size: 14px !important;
            line-height: 22px !important;
          }
          .cycon_giveaway_desc span {
            font-size: 14px;
            font-weight: 700;
          }
          .cycon-phone {
            width: 227px;
            height: 272px;
            top: -123px;
            left: 55px;
          }
          .close-button {
            top: 15px !important;
            right: 15px !important;
          }
          .close-x-img {
            width: 11px;
            color: #7d8890 !important;
          }
          .left-hand-img {
            width: 65%;
            top: 85px !important;
          }
          .right-hand-img {
            width: 65%;
            top: 85px !important;
          }
          .description {
            margin-bottom: 170px !important;
            font-size: 15px !important;
            font-style: normal;
            font-weight: 700;
            line-height: 22px;
          }
          .description-txt {
            padding: 0 7px;
            font-size: 12px !important;
            font-style: normal;
            font-weight: 400;
            line-height: 15px;
          }
          .confirm_btn {
            font-size: 12px !important;
            font-style: normal;
            font-weight: 600;
            // line-height: 0px;
            margin-top: 18px !important;
            hieght: 45px !important;
          }
        }
      `}</style>
    </Modal>
  )
}

export default ModalComp

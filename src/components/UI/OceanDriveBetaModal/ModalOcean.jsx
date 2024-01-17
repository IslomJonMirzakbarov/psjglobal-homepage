import { Box } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

const ModalOcean = ({
  isFirst,
  isPopupOpen,
  setFirstPopupOpen,
  setSecondPopupOpen
}) => {
  const router = useRouter()
  const { t, lang } = useTranslation('common')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setIsMobile(true)
    }
  }, [])

  const handleClick = () => {
    if (isFirst) {
      setFirstPopupOpen(false)
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
          zIndex: 300,
          margin: 0
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
          overflow: 'visible',
          marginTop: 60,
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
          zIndex: 299,
          borderRadius: 10,
          marginTop: 200,
          marginBottom: 0
        }
      }}
    >
      <img
        style={{
          position: 'absolute',
          top: 138,
          right: 15,
          zIndex: -1
        }}
        className='qicon_img'
        src={'/icons/qicon.svg'}
        alt='qicon'
      />
      <img
        style={{
          position: 'absolute',
          bottom: -4,
          left: -2
        }}
        src={'/icons/cloud_bottom.svg'}
        alt='dollar'
        className='cloud_bottom_img'
      />
      <img
        style={{
          position: 'absolute',
          bottom: -4,
          right: -17,
          zIndex: 999998
        }}
        className='plane_img'
        src={'/icons/plane.svg'}
        alt='plane'
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
        <Box paddingLeft='24px' paddingTop='23px'>
          <img
            src={'/icons/popup_oceandrive_logo.svg'}
            alt='logo'
            style={{ marginLeft: 2, marginBottom: 10 }}
          />
          <p
            style={{
              fontSize: '45px',
              fontWeight: '700',
              lineHeight: '48px',
              marginBottom: '15px'
            }}
            className='oceandrive_title'
          >
            <span style={{ color: '#232323' }}>Ocean Drive</span> <br />
            <span style={{ color: '#0e42e5' }}>Open Beta</span>
          </p>

          <p
            style={{
              fontSize: '15px',
              fontWeight: '600',
              lineHeight: 'normal',
              marginBottom: '5px',
              color: '#000'
            }}
            className='explore_text'
          >
            Explore, Share and Earn!!
          </p>

          <p
            style={{
              fontSize: '10px',
              fontWeight: '400',
              lineHeight: '14px',
              marginBottom: '16px',
              color: '#000'
            }}
            dangerouslySetInnerHTML={{ __html: t('feedback_prompt') }}
            className={lang === 'ko' ? 'feedback' : 'feedback_en'}
          />
        </Box>

        <Box backgroundColor='#0012b0' padding='16px 24px' borderRadius='10px'>
          <p
            style={{
              marginBottom: '4px',
              color: '#fff',
              fontSize: '12px',
              lineHeight: '22px'
            }}
            className='form_text'
          >
            <span style={{ fontWeight: '700' }}>✈️ {t('send_here')} ✈️</span>{' '}
            <br />
            <span style={{ fontWeight: '600' }} className='google_link'>
              <img src={'/images/google.svg'} alt='logo' style={{marginRight: 2}} /> Goolge Forms:
            </span>{' '}
            <a
              href='https://forms.gle/Rx8zUrXCvy8p3z4W7'
              style={{ textDecoration: 'underline' }}
              target='_blank'
              rel='noreferrer'
              className='google_link'
            >
              https://forms.gle/Rx8zUrXCvy8p3z4W7
            </a>{' '}
            <br />
            <span style={{ fontWeight: '600' }} className='google_link'>
              📧 E-mail:
            </span>{' '}
            <a
              href='mailto:help@conun.co.kr'
              style={{ textDecoration: 'underline' }}
              className='google_link'
            >
              help@conun.co.kr
            </a>
          </p>

          <p
            style={{
              color: '#fff',
              fontSize: '10px',
              fontWeight: '400',
              marginBottom: '93px'
            }}
            className='refer_txt'
          >
            <span style={{ color: '#1ad7b5' }}>*</span>
            {t('please_refer_to')}{' '}
            <span
              style={{
                fontWeight: '700',
                textDecoration: 'underline',
                cursor: 'pointer'
              }}
              onClick={() => {
                handleClick()
                router.push('/ocean-drive')
              }}
            >
              Download-Ocean Drive
            </span>{' '}
            {t('for_email_submission_form')}
          </p>
        </Box>
      </div>
      <style jsx global>{`
        @media (max-width: 600px) {
          .ReactModal__Content {
            width: 335px !important;
            margin-top: 85px !important;
          }
          .oceandrive_title {
            font-size: 30px !important;
            line-height: 37px !important;
            margin-bottom: 8px !important;
          }
          .explore_text {
            margin-bottom: 1px !important;
          }
          .feedback {
            margin-bottom: 10px !important;
            max-width: 130px;
          }
          .close-button {
            top: 15px !important;
            right: 15px !important;
          }
          .close-x-img {
            width: 11px;
            color: #7d8890 !important;
          }
          .form_text {
            font-weight: 350px !important;
            margin-bottom: 3px !important;
          }
          .google_link {
            font-size: 10px !important;
          }
          .refer_txt {
            font-size: 9px !important;
            margin-bottom: 60px !important;
          }
          .plane_img {
            width: 185px !important;
          }
          .cloud_bottom_img {
            width: 110px !important;
          }
          .qicon_img {
            width: 90px !important;
            top: 150px !important;
          }
        }
      `}</style>
    </Modal>
  )
}

export default ModalOcean

import { Container } from '@mui/material'
import styles from './style.module.scss'
import { useEffect } from 'react'

export default function CyconEvent() {
  useEffect(() => {
    document.body.style.overflowX = 'hidden'
    return () => {
      document.body.style.overflowX = 'auto'
    }
  }, [])
  return (
    <Container>
      <div className={styles.main}>
        <img src='/images/cycon/element1.png' className={styles.element1} />
        <img src='/images/cycon/element2.png' className={styles.element2} />
        <img src='/images/cycon/element3.png' className={styles.element3} />
        <img src='/images/cycon/element4.png' className={styles.element4} />
        <img src='/images/cycon/element5.png' className={styles.element5} />
        <img src='/images/cycon/element6.svg' className={styles.element6} />
        <img src='/images/cycon/element7.png' className={styles.element7} />
        <img src='/images/cycon/element8.png' className={styles.element8} />
        <img src='/images/cycon/element9.png' className={styles.element9} />
        <img src='/images/cycon/element10.png' className={styles.element10} />
        <img src='/images/cycon/element11.png' className={styles.element11} />
        <img src='/images/cycon/element12.png' className={styles.element12} />
        <div className={styles.header}>
          <img src='/icons/cycon.svg' alt='cycon' />
          <p>X</p>
          <img src='/icons/bitget.png' alt='bitget' />
        </div>
        <div className={styles.info}>
          <div className={styles.message}>
            <h1>CYCON x Bitget EVENT</h1>
            <p>
              Sign up for BitGet now and send CONUN the information you need to
              participate in the event!
              <b> You can receive up to $60 worth of CYCON.</b>
            </p>
            <div className={styles.messageCard}>
              <h3>Just by having it!</h3>
              <p>
                If you have 6,250 CYCONs <br /> provided by CONUN in your BitGet
                <br />
                CYCON wallet, BitGet will give you an <br />
                additional 1,250 CYCONs!
              </p>
            </div>
          </div>
          <div className={styles.downloadInfo}>
            <h2>How to participate in the event</h2>
            <div className={styles.steps}>
              <div className={styles.title}>
                <div className={styles.number}>
                  <p>01</p>
                </div>
                <div className={styles.content}>
                  <p className={styles.text}>Download the BitGet application</p>
                  <div className={styles.downloads}>
                    <a
                      href='https://play.google.com/store/apps/details?id=com.bitget.exchange&pcampaignid=web_share'
                      target='_blank'
                    >
                      <img src='/icons/playmarket.svg' />
                    </a>
                    <a
                      href='https://apps.apple.com/kr/app/bitget-buy-bitcoin-crypto/id1442778704?l=en-GB&ppid=e5721a23-465a-491c-a36c-22f1af9d7f9b'
                      target='_blank'
                    >
                      <img src='/icons/appstore.svg' />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.title}>
                <div className={styles.number}>
                  <p>02</p>
                </div>
                <div className={styles.content}>
                  <p className={styles.text}>Create a BitGet account</p>
                </div>
              </div>
              <div className={styles.title}>
                <div className={styles.number}>
                  <p>03</p>
                </div>
                <div className={styles.content}>
                  <p className={styles.text}>
                    3 authentication required: Phone number, email, and Google
                    OTP
                  </p>
                  <div className={styles.items}>
                    <div className={styles.item}>
                      <img src='/icons/phone.svg' />
                      <p>Phone Num</p>
                    </div>
                    <div className={styles.item}>
                      <img src='/icons/email.svg' />
                      <p>Email</p>
                    </div>
                    <div className={styles.item}>
                      <img src='/icons/time.svg' />
                      <p>Google OTP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.title}>
                <div className={styles.number}>
                  <p>03</p>
                </div>
                <div className={styles.content}>
                  <p className={styles.text}>
                    Screenshot required.
                    <span>
                      *Images below are samples. Please screenshot the contents
                      so that they appear in the box.
                    </span>
                  </p>
                  <ul className={styles.list}>
                    <li>UID screenshot.</li>
                    <li>
                      Secure page of phone number, email, and Google OTP
                      screenshot
                    </li>
                    <li>CYCON wallet address screenshot</li>
                  </ul>
                  <div className={styles.images}>
                    <img src='/images/step1.jpg' />
                    <img src='/images/step2.jpg' />
                    <img src='/images/step3.jpg' />
                  </div>
                </div>
              </div>
              <div className={styles.title}>
                <div className={styles.number}>
                  <p>04</p>
                </div>
                <div className={styles.content}>
                  <p className={styles.text}>
                    Send email. <span>*Including number 4’s screenshots</span>
                  </p>
                  <ul className={styles.list2}>
                    <li>Number 4’s screenshots</li>
                    <li>Email address used for BitGet.</li>
                    <li>
                      Phone number.
                      <span>
                        [Must be the same phone number as screenshot in number
                        4.]
                      </span>
                    </li>
                    <li>
                      BitGet CYCON wallet address.{' '}
                      <span>
                        [Must be the same address as screenshot in number 4.]
                      </span>
                    </li>
                    <li>
                      Please email us using the same email address you used on
                      BitGet. <span>[event@conun.io]</span>
                    </li>
                  </ul>
                  <img src='/images/sendEmail.jpg' className={styles.image} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.success}>
          <img src='/icons/fwef.png' />
          <p>See you on Bitget!</p>
        </div>
      </div>
    </Container>
  )
}

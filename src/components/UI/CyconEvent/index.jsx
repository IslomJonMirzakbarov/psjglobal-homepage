import { Container } from '@mui/material'
import styles from './style.module.scss'
import { useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'

export default function CyconEvent() {
  const { t } = useTranslation('common')
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
            <p dangerouslySetInnerHTML={{ __html: t('signup_bitget_info') }} />
            <div className={styles.messageCard}>
              <h3
                dangerouslySetInnerHTML={{ __html: t('just_by_having_it') }}
              />
              <p
                className={styles.additionTxt}
                dangerouslySetInnerHTML={{
                  __html: t('additional_cycon_offer')
                }}
              />
            </div>
          </div>
          <div className={styles.downloadInfo}>
            <h2
              dangerouslySetInnerHTML={{
                __html: t('event_participation_instructions')
              }}
            />
            <div className={styles.steps}>
              <div className={styles.title}>
                <div className={styles.number}>
                  <p>01</p>
                </div>
                <div className={styles.content}>
                  <p
                    className={styles.text}
                    dangerouslySetInnerHTML={{ __html: t('download_app') }}
                  />
                  <div className={styles.downloads}>
                    <a
                      href='https://play.google.com/store/apps/details?id=com.bitget.exchange&pcampaignid=web_share'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img src='/icons/playmarket.svg' />
                    </a>
                    <a
                      href='https://apps.apple.com/kr/app/bitget-buy-bitcoin-crypto/id1442778704?l=en-GB&ppid=e5721a23-465a-491c-a36c-22f1af9d7f9b'
                      target='_blank'
                      rel='noreferrer'
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
                  <p
                    className={styles.text}
                    dangerouslySetInnerHTML={{ __html: t('create_account') }}
                  />
                </div>
              </div>
              <div className={styles.title}>
                <div className={styles.number}>
                  <p>03</p>
                </div>
                <div className={styles.content}>
                  <p
                    className={styles.text}
                    dangerouslySetInnerHTML={{ __html: t('auth_required') }}
                  />
                  <div className={styles.items}>
                    <div className={styles.item}>
                      <img src='/icons/phone.svg' />
                      <p dangerouslySetInnerHTML={{ __html: t('phone_num') }} />
                    </div>
                    <div className={styles.item}>
                      <img src='/icons/email.svg' />
                      <p dangerouslySetInnerHTML={{ __html: t('email') }} />
                    </div>
                    <div className={styles.item}>
                      <img src='/icons/time.svg' />
                      <p
                        dangerouslySetInnerHTML={{ __html: t('google_otp') }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.title}>
                <div className={styles.number}>
                  <p>03</p>
                </div>
                <div className={styles.content}>
                  <p
                    className={styles.text}
                    dangerouslySetInnerHTML={{ __html: t('screenshot_needed') }}
                  />
                  <ul className={styles.list}>
                    <li
                      dangerouslySetInnerHTML={{ __html: t('uid_screenshot') }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: t('secure_page_screenshot')
                      }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: t('cycon_wallet_address_screenshot')
                      }}
                    />
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
                  <p
                    className={styles.text}
                    dangerouslySetInnerHTML={{
                      __html: t('send_email_with_screenshot')
                    }}
                  />
                  <ul className={styles.list2}>
                    <li
                      dangerouslySetInnerHTML={{
                        __html: t('num4_screenshots')
                      }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: t('bitget_email_address')
                      }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: t('same_phone_number')
                      }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: t('same_wallet_address')
                      }}
                    />
                    <li
                      dangerouslySetInnerHTML={{
                        __html: t('same_email_event')
                      }}
                    />
                  </ul>
                  <img src='/images/sendEmail.jpg' className={styles.image} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.success}>
          <img src='/icons/fwef.png' />
          <p dangerouslySetInnerHTML={{ __html: t('see_on_bitget') }} />
        </div>
      </div>
    </Container>
  )
}

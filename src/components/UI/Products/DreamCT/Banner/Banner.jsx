import { ArrowForward, ArrowForwardIosRounded } from '@mui/icons-material'
import { Button, Container, Link, Typography } from '@mui/material'
import SubscribeModal from 'components/UI/SubscribeModal/SubscribeModal'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useFontFamily } from 'hooks/useFontFamily'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import styles from './banner.module.scss'
import { items } from './bannerUtils'

export default function Banner() {
  const { scrollYProgress } = useScroll()
  const { t } = useTranslation('common')
  const router = useRouter()
  const font = useFontFamily()
  const [isMobile, setIsMobile] = useState(false)
  const [balances, setBalances] = useState({})
  const [copiedItem, setCopiedItem] = useState(null)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 600)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const copyToClipboard = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      console.log('Text copied to clipboard')
      setCopiedItem(text)
      setTimeout(() => {
        setCopiedItem(null)
      }, 500)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }, [])

  useEffect(() => {
    async function fetchBalances() {
      const newBalances = {}
      for (const item of items) {
        const balance = await item.fetchBalance()
        newBalances[item.anotherText] = parseFloat(balance).toFixed(2)
      }
      setBalances(newBalances)
    }

    fetchBalances()
  }, [])

  return (
    <div className={styles.box}>
      <Container className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <div className={styles.containerAccumulation}>
              <div className={styles.column}>
                <h2
                  className={styles.title}
                  dangerouslySetInnerHTML={{ __html: t('cycon_accumulate') }}
                />
                <p
                  className={styles.paragraph}
                  dangerouslySetInnerHTML={{
                    __html: t('cycon_accumulate_text')
                  }}
                />
              </div>
              <div className={styles.flexRow}>
                {items.map((item) => (
                  <div key={item.text} className={styles.columnFlex}>
                    <p className={styles.text}>{t(item.text)}</p>
                    <div className={styles.coinWrapper}>
                      <p className={styles.number}>
                        {balances[item.anotherText] || 'Loading...'}
                      </p>
                      <img
                        src='/images/products/dreamct/golden-icon.svg'
                        width={20}
                        height={20}
                        alt='Coin icon'
                      />
                    </div>
                    <div className={styles.textWrapper}>
                      <p className={styles.text2}>{item.anotherText}</p>
                      <div className={styles.copyTextIcon}>
                        {copiedItem && copiedItem === item.anotherText && (
                          <div className={styles.copiedText}>Copied!</div>
                        )}
                        <img
                          src='/images/products/dreamct/blue-copy.svg'
                          width={20}
                          height={20}
                          alt='Coin icon'
                          onClick={() => copyToClipboard(item.anotherText)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.icon}>
              <Image
                src='/images/products/dreamct/dreamct-icon.png'
                alt='Main Icon'
                width={226}
                height={285}
              />
            </div>

            <div className={styles.text}>
              <h2>
                {t('metacon_main_service')} {isMobile ? '' : <br />}{' '}
                {t('dreamct')}
              </h2>
              <p>{t('dreamsct_description')} </p>
            </div>

            <div className={styles.navigationLinks}>
              <a
                href='/dreamct_user_guide_en.pdf'
                className={styles.navLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                DreamsCT Guide_en
                <img
                  src='/icons/arrow-forward-custom.svg'
                  width={22}
                  height={22}
                  alt='arrow'
                />
              </a>
              <a
                href='/dreamct_user_guide_ko.pdf'
                className={styles.navLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                DreamsCT Guide_ko
                <img
                  src='/icons/arrow-forward-custom.svg'
                  width={22}
                  height={22}
                  alt='arrow'
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

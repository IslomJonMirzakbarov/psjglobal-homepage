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
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }, [])

  useEffect(() => {
    async function fetchBalances() {
      const newBalances = {}
      for (const item of items) {
        newBalances[item.anotherText] = await item.fetchBalance(
          item.anotherText
        )
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
                <h2 className={styles.title}>
                  쌓이고 <br />
                  있습니다<span>.</span>
                </h2>
                <p className={styles.paragraph}>
                  회차가 끝날때마다 기부,운영,소각
                  <br />
                  10%씩 싸이콘이 쌓입니다.
                </p>
              </div>
              <div className={styles.flexRow}>
                {items.map((item) => (
                  <div key={item.text} className={styles.columnFlex}>
                    <p className={styles.text}>
                      {item.text}
                    </p>
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
                      <img
                        src='/images/products/dreamct/blue-copy.svg'
                        width={20}
                        height={20}
                        alt='Coin icon'
                        onClick={() => copyToClipboard(item.anotherText)}
                      />
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

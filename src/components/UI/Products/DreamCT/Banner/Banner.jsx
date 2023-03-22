import { ArrowForward, ArrowForwardIosRounded } from '@mui/icons-material'
import { Button, Container, Link, Typography } from '@mui/material'
import SubscribeModal from 'components/UI/SubscribeModal/SubscribeModal'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useFontFamily } from 'hooks/useFontFamily'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from './banner.module.scss'

export default function Banner() {
  const { scrollYProgress } = useScroll()
  const { t } = useTranslation('common')
  const router = useRouter()
  const font = useFontFamily()
  const [isMobile, setIsMobile] = useState(false)

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

  return (
    <div className={styles.box}>
      <Container className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <Image
                src="/images/products/dreamct/dreamct-icon.png"
                alt="Main Icon"
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
                href="/dreamct_guide_en.pdf"
                className={styles.navLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                DreamsCT Guide_en
                <img
                  src="/icons/arrow-forward-custom.svg"
                  width={22}
                  height={22}
                  alt="arrow"
                />
              </a>
              <a
                href="/dreamct_guide_ko.pdf"
                className={styles.navLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                DreamsCT Guide_ko
                <img
                  src="/icons/arrow-forward-custom.svg"
                  width={22}
                  height={22}
                  alt="arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

import { Button, Container, Typography } from '@mui/material'
import SubscribeModal from 'components/UI/SubscribeModal/SubscribeModal'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useFontFamily } from 'hooks/useFontFamily'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from './banner.module.scss'

export default function Banner() {
  const { scrollYProgress } = useScroll()
  const { t } = useTranslation('common')
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const font = useFontFamily()
  const scaleElement = useTransform(
    scrollYProgress,
    [0.08, 0.06, 0.04, 0.02, 0],
    [0, 0.3, 0.5, 0.8, 1]
  )
  const opacityLock = useTransform(
    scrollYProgress,
    [0.08, 0.05, 0],
    [0, 0.5, 1]
  )
  const opacityWalet = useTransform(
    scrollYProgress,
    [0.1, 0.05, 0],
    [0, 0.5, 1]
  )
  const opacityCircle = useTransform(
    scrollYProgress,
    [0.1, 0.05, 0],
    [0, 0.5, 1]
  )
  const xLock = useTransform(
    scrollYProgress,
    [0.06, 0.04, 0.02, 0],
    [200, 160, 80, 0]
  )

  const yLock = useTransform(
    scrollYProgress,
    [0.06, 0.04, 0.02, 0],
    [-200, -160, -80, 0]
  )

  const xWalet = useTransform(
    scrollYProgress,
    [0.1, 0.06, 0.02, 0],
    [-200, -160, -80, 0]
  )

  const yWalet = useTransform(
    scrollYProgress,
    [0.1, 0.06, 0.02, 0],
    [200, 160, 80, 0]
  )

  const xCircle = useTransform(
    scrollYProgress,
    [0.06, 0.04, 0.02, 0],
    [-200, -160, -80, 0]
  )

  const yCircle = useTransform(
    scrollYProgress,
    [0.06, 0.04, 0.02, 0],
    [-200, -160, -80, 0]
  )

  const xCircle2 = useTransform(
    scrollYProgress,
    [0.3, 0.2, 0.1, 0],
    [200, 160, 80, 0]
  )

  const yCircle2 = useTransform(
    scrollYProgress,
    [0.3, 0.2, 0.1, 0],
    [200, 160, 80, 0]
  )

  const xCircle3 = useTransform(
    scrollYProgress,
    [0.3, 0.2, 0.1, 0],
    [-200, -160, -80, 0]
  )

  const yCircle3 = useTransform(
    scrollYProgress,
    [0.3, 0.2, 0.1, 0],
    [200, 160, 80, 0]
  )

  return (
    <div className={styles.box}>
      <Container className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <Typography
              data-text="NFTs"
              variant="h1"
              className={styles.title}
              color="primary.dark"
              dangerouslySetInnerHTML={{
                __html: t('product_metacon_title'),
              }}
              style={font}
            />
            <Typography
              variant="body2"
              color="primary.dark"
              dangerouslySetInnerHTML={{
                __html: t('product_metacon_desc'),
              }}
              style={font}
            />
            <Button
              onClick={() => router.push('/metacon')}
              className={styles.btn}
            >
              Dowload Now
            </Button>

            <div className={styles.navigationLinks}>
              <a
                href="/pdf-viewer/metacon_user_guide_en"
                className={styles.navLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Metacon User Guide_en
                <img
                  src="/icons/arrow-forward-custom.svg"
                  width={22}
                  height={22}
                  alt="arrow"
                />
              </a>
              <a
                href="/pdf-viewer/metacon_user_guide_ko"
                className={styles.navLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Metacon User Guide_ko
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
        <div className={styles.bannerBg} />
        <div className={styles.elements}>
          <motion.div
            style={{
              x: xCircle,
              y: yCircle,
              opacity: opacityCircle,
            }}
            className={styles.element}
          >
            <img src="/images/products/metacon/element.png" alt="Element 1" />
          </motion.div>
          <motion.div
            style={{
              x: xCircle3,
              y: yCircle3,
              opacity: opacityCircle,
            }}
            className={styles.element2}
          >
            <img src="/images/products/metacon/element2.png" alt="Element 2" />
          </motion.div>
          <motion.div
            style={{
              x: xLock,
              y: yLock,
              opacity: opacityLock,
            }}
            className={styles.element3}
          >
            <img src="/images/products/metacon/element3.png" alt="Element 3" />
          </motion.div>
          <motion.div
            style={{
              scale: scaleElement,
            }}
            className={styles.element1}
          >
            <img src="/images/products/metacon/element1.png" alt="Element 4" />
          </motion.div>
          <motion.div
            style={{
              x: xWalet,
              y: yWalet,
              opacity: opacityWalet,
            }}
            className={styles.element4}
          >
            <img src="/images/products/metacon/element4.png" alt="Element 5" />
          </motion.div>
          <motion.div
            style={{
              x: xCircle2,
              y: yCircle2,
              opacity: opacityCircle,
            }}
            className={styles.element5}
          >
            <img src="/images/products/metacon/element5.png" alt="Element 6" />
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

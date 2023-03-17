import { ArrowForward, ArrowForwardIosRounded } from '@mui/icons-material'
import { Button, Container, Link, Typography } from '@mui/material'
import SubscribeModal from 'components/UI/SubscribeModal/SubscribeModal'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useFontFamily } from 'hooks/useFontFamily'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from './banner.module.scss'

export default function Banner() {
  const { scrollYProgress } = useScroll()
  const { t } = useTranslation('common')
  const router = useRouter()
  const font = useFontFamily()

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
                Metacon’s main service, <br /> DreamsCT
              </h2>
              <p>
                DreamsCT is an application-type lottery game with the same
                number and method as the Korean lottery. Only an amount worth
                5,000 KRW is allowed to participate once a week. This was
                developed to prevent forgery and falsification under any
                circumstances by eliminating speculation from the source and
                through a smart contract-based application method through
                blockchain. It is a method of matching 6 numbers out of 45
                numbers in the same way as the Korean lottery ticket. However,
                if there is no winner until the 10th round, in the 11th round,
                (named ‘Golden Round’) a special rule applies so that there will
                be a 1st place winner unconditionally. DreamsCT provides a fair
                and reliable gaming environment for all applicants.{' '}
              </p>
            </div>

            <div className={styles.navigationLinks}>
              <a
                href="/dreamct-user-guide-en.pdf"
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
                href="/dreamct-user-guide-ko.pdf"
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

import { Typography } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'
import { BurgerMenuIcon, CloseIcon, LanguageIcon } from '../Icons'
import styles from './burgerMenu.module.scss'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import saveLang from 'utils/saveLang'
import { useRouter } from 'next/router'
import getDataByLang from 'utils/getDataByLang'
import {
  AccordionDetails,
  Accordion,
  AccordionSummary,
  MuiSwipeableDrawer
} from 'components/UI/Header/mui-style'

export default function BurgerMenu({ file }) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)
  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setOpen(isOpen)
  }

  const data = [
    {
      title: 'Products',
      items: [
        {
          title: 'Swap',
          link: 'https://swap.conun.io'
        },
        {
          title: 'OceanDrive',
          link: '/products/ocean-drive'
        },
        {
          title: 'World Art DEXPO NFT',
          link: '/products/world-art-nft'
        },
        {
          title: 'Metacon',
          link: '/products/metacon'
        },
        {
          title: 'Metacon [DreamsCT]',
          link: '/products/dreamct'
        }
      ]
    },
    {
      title: 'Download',
      items: [
        {
          title: 'OceanDrive',
          link: '/ocean-drive'
        },
        {
          title: 'Metacon',
          link: '/metacon'
        }
      ]
    },
    {
      title: 'Community',
      items: [
        {
          title: 'News',
          link: '/news'
        },
        {
          title: 'FAQ',
          link: '/faq'
        },
        {
          title: 'Notice',
          link: '/notice'
        }
      ]
    },
    {
      title: 'WhitePaper',
      link: file
        ? process.env.NEXT_PUBLIC_IMAGE_BASE_URL +
          getDataByLang(router.locale, 'file', file)?.data.attributes?.url
        : '#'
    },
    {
      title: 'Docs',
      link: '/user-guide'
    },
    {
      title: 'Token',
      link: '/token'
    }
  ]

  return (
    <>
      <div className={styles.icon} onClick={() => setOpen(true)}>
        <BurgerMenuIcon />
      </div>
      <MuiSwipeableDrawer
        anchor='left'
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true
        }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <div className={styles.header}>
          <Link href='/'>
            <a className={styles.logo} onClick={() => setOpen(false)}>
              <img src='/logo.png' alt='logo' />
            </a>
          </Link>
          <div className={styles.close} onClick={() => setOpen(false)}>
            <CloseIcon />
          </div>
        </div>
        <div className={styles.body}>
          <div>
            {data.map((item) => (
              <Accordion key={item.title}>
                <AccordionSummary
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                  expandIcon={
                    item.items && (
                      <ArrowForwardIosSharpIcon sx={{ fontSize: '15px' }} />
                    )
                  }
                >
                  {item.title === 'WhitePaper' ? (
                    <Typography
                      variant='body1'
                      component='a'
                      href={item.link}
                      target='_blank'
                    >
                      {item.title}
                    </Typography>
                  ) : item.link ? (
                    <Link href={item.link}>
                      <a
                        style={{ display: 'block', width: '100%' }}
                        onClick={() => setOpen(false)}
                      >
                        <Typography
                          variant='body1'
                          fontWeight='500'
                          color='secondary.dark'
                        >
                          {item.title}
                        </Typography>
                      </a>
                    </Link>
                  ) : (
                    <Typography
                      variant='body1'
                      fontWeight='500'
                      color='secondary.dark'
                    >
                      {item.title}
                    </Typography>
                  )}
                </AccordionSummary>
                <AccordionDetails>
                  {item.items?.map((value) => (
                    <Link href={value.link} key={value.title}>
                      <a onClick={() => setOpen(false)}>
                        <Typography
                          variant='body3'
                          component='div'
                          color='secondary'
                          fontWeight='500'
                          className={styles.link}
                        >
                          {value.title}
                        </Typography>
                      </a>
                    </Link>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
          <div className={styles.bottomElement}>
            <div className={styles.langItems}>
              <LanguageIcon />
              <Link href={router.asPath} locale='en'>
                <a
                  onClick={() => {
                    setOpen(false)
                    saveLang('en')
                  }}
                >
                  <Typography
                    className={styles.lang}
                    component='p'
                    variant='body1'
                    fontWeight='600'
                  >
                    En
                  </Typography>
                </a>
              </Link>
              <Link href={router.asPath} locale='kr'>
                <a
                  onClick={() => {
                    setOpen(false)
                    saveLang('kr')
                  }}
                >
                  <Typography
                    className={styles.lang}
                    component=''
                    variant='body1'
                    fontWeight='600'
                  >
                    Kr
                  </Typography>
                </a>
              </Link>
            </div>
            {/* <div className={styles.border} />
            <div className={styles.mainnetLive}>
              <div className={styles.circle} />
              <a href='https://conscan.conun.io' target='_blank'>
                <Typography
                  className={styles.lang}
                  component='a'
                  variant='body1'
                  fontWeight='600'
                >
                  Mainnet is live
                </Typography>
              </a>
            </div> */}
          </div>
        </div>
      </MuiSwipeableDrawer>
    </>
  )
}

import { SwipeableDrawer, Typography } from '@mui/material'
import { styled } from '@mui/system'
import Link from 'next/link'
import { useState } from 'react'
import { BurgerMenuIcon, CloseIcon, LanguageIcon } from '../Icons'
import styles from './burgerMenu.module.scss'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import saveLang from 'utils/saveLang'
import { useRouter } from 'next/router'

const MuiSwipeableDrawer = styled((props) => <SwipeableDrawer {...props} />)(
  ({ theme }) => ({
    '& .MuiPaper-root': {
      width: '100vw'
    }
  })
)

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: 'none',
  background: '#F6F6FB',
  borderRadius: 0,
  '&::before': {
    display: 'none'
  }
}))

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    backgroundColor: 'transparent',
    padding: '21px 22px',
    '& .MuiAccordionSummary-content': {
      margin: 0
    },
    '&.Mui-expanded': {
      boxShadow: '0px 4px 19px rgba(0, 0, 0, 0.25)'
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)'
    }
  })
)

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  border: 'none'
}))

export default function BurgerMenu() {
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
        }
      ]
    },
    {
      title: 'Whitepaper'
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
                  <Typography
                    variant='body1'
                    fontWeight='500'
                    color='secondary.dark'
                  >
                    {item.title}
                  </Typography>
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
            <div className={styles.border} />
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
            </div>
          </div>
        </div>
      </MuiSwipeableDrawer>
    </>
  )
}

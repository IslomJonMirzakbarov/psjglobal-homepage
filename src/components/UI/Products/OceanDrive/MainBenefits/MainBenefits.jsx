import { Container, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import styles from './mainBenefits.module.scss'

export default function MainBenefits() {
  const data = [
    {
      title: 'Storage',
      desc: 'Stores data separately instead of storing all data on one centralized server - eliminates need for cloud storage',
      img: '/images/products/ocean-drive/main1.png'
    },
    {
      title: 'Marketplace',
      desc: 'Peer to peer marketplace - meaning unique products, worldwide assets, and increased availability of product.',
      img: '/images/products/ocean-drive/main2.png'
    },
    {
      title: 'Business Opportunity',
      desc: 'Business opportunity for all users - rewards by sharing your personal idle resources and published private content.',
      img: '/images/products/ocean-drive/main3.png'
    },
    {
      title: 'Software Development',
      desc: 'Conun Drive was built for developers. So, if you are building an application, an NFT marketplace, or anything in between, our APIs and SDKs will give you superpowers.',
      img: '/images/products/ocean-drive/main4.png'
    }
  ]
  return (
    <Container>
      <div className={styles.benefits}>
        <Typography variant='h2' color='primary.dark' textAlign='center'>
          Main Benefits
        </Typography>
        <div className={styles.list}>
          {data.map((item, index) => (
            <>
              {index === 2 && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className={styles.starImg}
                >
                  <img src='/images/star.png' />
                </motion.div>
              )}
              <div className={styles.item}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className={styles.img}
                >
                  <img src={item.img} alt='ocean drive' />
                </motion.div>
                <Typography
                  className={styles.title}
                  variant='h6'
                  fontWeight='700'
                  color='primary.dark'
                  textAlign='center'
                >
                  {item.title}
                </Typography>
                <Typography
                  textAlign='center'
                  variant='body3'
                  color='secondary'
                  fontWeight='500'
                  component='p'
                >
                  {item.desc}
                </Typography>
              </div>
            </>
          ))}
        </div>
      </div>
    </Container>
  )
}

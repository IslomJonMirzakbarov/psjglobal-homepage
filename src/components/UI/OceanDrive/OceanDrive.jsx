import { Container, Typography } from '@mui/material'
import Image from 'next/image'
import styles from './oceanDrive.module.scss'

export default function OceanDrive() {
  const items = [
    {
      title: 'Windows',
      desc: 'Windows7 later',
      img: '/icons/windows.png'
    },
    {
      title: 'macOS',
      desc: 'OSX 10.9 later',
      img: '/icons/apple.png'
    },
    {
      title: 'Linux',
      desc: 'OSX 10.9 later',
      img: '/icons/linux.png'
    }
  ]
  return (
    <Container>
      <div className={styles.box}>
        <div className={styles.img}>
          <Image
            src='/images/ocean-drive.jpg'
            alt='ocean-drive'
            width={110}
            height={110}
            objectFit='contain'
          />
        </div>
        <Typography variant='h2' component='h1' fontWeight='700'>
          OceanDrive
        </Typography>
        <Typography className={styles.text} variant='body2' component='p'>
          <span>User-First Drive</span> Start Right Now!
        </Typography>
        <div className={styles.items}>
          {items.map((item) => (
            <div className={styles.item}>
              <div className={styles.itemImg}>
                <Image
                  src={item.img}
                  objectFit='contain'
                  alt='apple'
                  width={40}
                  height={40}
                />
              </div>
              <Typography variant='h6' fontWeight='700' color='primary.dark'>
                {item.title}
              </Typography>
              <Typography
                className={styles.desc}
                variant='body2'
                color='secondary'
              >
                {item.desc}
              </Typography>
              <button className={styles.btn}>Download</button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

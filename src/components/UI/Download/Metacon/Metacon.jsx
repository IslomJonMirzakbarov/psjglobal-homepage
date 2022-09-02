import { Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import styles from './metacon.module.scss'

export default function Metacon({ data }) {
  return (
    <Container>
      <div className={styles.box}>
        <div className={styles.img}>
          <Image
            src={data.img}
            alt='ocean-drive'
            width={110}
            height={110}
            objectFit='contain'
          />
        </div>
        <Typography
          color='primary.dark'
          variant='h2'
          component='h1'
          fontWeight='700'
        >
          {data.title}
        </Typography>
        <Typography
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: data.desc }}
          variant='body2'
          component='p'
        />
        <div className={styles.leftElements}>
          <div className={styles.leftElement1}>
            <img src='/images/metacon/left1.png' />
          </div>
          <div className={styles.leftElement2}>
            <img src='/images/metacon/left2.png' />
          </div>
          <div className={styles.leftElement3}>
            <img src='/images/metacon/left3.png' />
          </div>
        </div>
        <div className={styles.rightElements}>
          <div className={styles.rightElement1}>
            <img src='/images/metacon/right1.png' />
          </div>
          <div className={styles.rightElement2}>
            <img src='/images/metacon/right2.png' />
          </div>
        </div>
        <div className={styles.items}>
          {data.items.map((item) => (
            <div className={styles.item}>
              <div className={styles.itemImg}>
                {Array.isArray(item.img) ? (
                  item.img.map((val) => (
                    <Image
                      src={val}
                      key={val}
                      objectFit='contain'
                      alt='apple'
                      width={40}
                      height={40}
                    />
                  ))
                ) : (
                  <Image
                    src={item.img}
                    objectFit='contain'
                    alt='apple'
                    width={40}
                    height={40}
                  />
                )}
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
              <Button disabled={!item.active}>
                {item.active ? 'Download' : 'Coming soon'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

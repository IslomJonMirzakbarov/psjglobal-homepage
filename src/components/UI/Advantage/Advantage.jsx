import { Container, Typography } from '@mui/material'
import styles from './advantage.module.scss'

export default function Advantage() {
  const items = [
    {
      title: 'Get Power By Conun',
      content:
        'Through our distributed super computing platform you can get the power to run large projects, files, and applications affordably.',
      img: '/icons/advantage1.png'
    },
    {
      title: 'Give Power to Earn',
      content:
        'By sharing your personal computing resources you become part of a P2P network where earning is easy.',
      img: '/icons/advantage2.png'
    },
    {
      title: 'Join Our Ecosystem',
      content:
        'Become part of the CONUN network and you can benefit from our current and future blockchain-based projects.',
      img: '/icons/advantage3.png'
    }
  ]
  return (
    <Container>
      <div className={styles.items}>
        {items.map((item) => (
          <div className={styles.item} key={item.title}>
            <div className={styles.img}>
              <img src={item.img} alt={item.title} />
            </div>
            <Typography
              className={styles.title}
              variant='h5'
              color='secondary.dark'
              align='center'
            >
              {item.title}
            </Typography>
            <Typography align='center' variant='body2' color='secondary'>
              {item.content}
            </Typography>
          </div>
        ))}
        <img
          className={styles.element}
          src='/icons/advantage4.png'
          alt='element'
        />
      </div>
    </Container>
  )
}

import { Typography } from '@mui/material'
import styles from './card.module.scss'

export default function Card({ item }) {
  return (
    <div className={styles.card}>
      <Typography align='center' variant='body3' color='primary' component='p'>
        {item.month}
      </Typography>
      <p className={styles.title}>{item.title}</p>
      <Typography
        align='center'
        variant='body3'
        color='secondary'
        component='p'
      >
        {item.content}
      </Typography>
    </div>
  )
}

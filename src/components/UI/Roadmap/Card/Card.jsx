import { Typography } from '@mui/material'
import styles from './card.module.scss'

export default function Card({ item }) {
  return (
    <div className={styles.card}>
      <Typography align='center' variant='body3' color='primary' component='p'>
        {item.month_en}
      </Typography>
      <p className={styles.title}>{item.title_en}</p>
      <Typography
        align='center'
        variant='body3'
        color='secondary'
        component='p'
      >
        {item.description_en}
      </Typography>
    </div>
  )
}

import { Typography } from '@mui/material'
import { useRouter } from 'next/router'
import getDataByLang from 'utils/getDataByLang'
import styles from './card.module.scss'

export default function Card({ item }) {
  const router = useRouter()
  return (
    <div className={styles.card}>
      <Typography align='center' variant='body3' color='primary' component='p'>
        {getDataByLang(router.locale, 'month', item)}
        {/* {item.month_en} */}
      </Typography>
      <p className={styles.title}>{item.title_en}</p>
      <Typography
        align='center'
        variant='body3'
        color='secondary'
        component='p'
      >
        {getDataByLang(router.locale, 'description', item)}
        {/* {item.description_en} */}
      </Typography>
    </div>
  )
}

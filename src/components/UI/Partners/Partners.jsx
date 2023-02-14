import { Container, Typography } from '@mui/material'
import styles from './partners.module.scss'

export default function Partners() {
  return (
    <Container className={styles.container}>
      <div className={styles.box}>
        <Typography align='center' variant='h2' color='primary.dark'>
          Partners
        </Typography>
        <div className={styles.items}>
          {[...Array(8).keys()].map((index) => (
            <div className={styles.item}>
              <img
                src={`/images/partners/partners${index + 1}.svg`}
                alt='partner'
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

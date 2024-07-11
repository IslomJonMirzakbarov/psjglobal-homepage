import { Container, Typography } from '@mui/material'
import styles from './partners.module.scss'
// test new url: psjglobal

export default function Partners() {
  return (
    <Container className={styles.container}>
      <div className={styles.box}>
        <Typography align='center' variant='h2' color='primary.dark'>
          Partners
        </Typography>
        <div className={styles.items}>
          {[...Array(14).keys()].map((index) => (
            <div className={styles.item} key={index}>
              <img
                src={`/images/partner/partners${index + 1}.svg`}
                alt='partner'
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

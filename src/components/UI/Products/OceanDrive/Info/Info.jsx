import { Container, Typography } from '@mui/material'
import styles from './info.module.scss'

export default function Info() {
  return (
    <Container>
      <div className={styles.info}>
        <Typography variant='h2' color='primary.dark' textAlign='center'>
          OceanDrive
        </Typography>
        <Typography
          variant='body2'
          color='black'
          textAlign='center'
          className={styles.desc}
        >
          OceanDrive is secure and public decentralized storage. It means there
          is no centralized server that stores all the content. All content will
          be stored by OceanDrive participants (which is nodes). As soon as a
          user connects to the OceanDrive network his/her computer will become a
          OceanDrive network participant, and participants will choose which
          files to publish or store/backup. Content publishers and storage
          providers will be rewarded by the network participants. All actions
          and transactions that occur on the OceanDrive network will be stored
          on the Conun Private Blockchain, meaning all actions and transactions
          are immutable and secure.
        </Typography>
        <div className={styles.img}>
          <img src='/images/products/ocean-drive/info.png' alt='ocean drive' />
        </div>
      </div>
    </Container>
  )
}

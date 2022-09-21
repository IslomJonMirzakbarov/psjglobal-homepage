import { Container, Typography } from '@mui/material'
import { rem } from 'utils/pxToRem'
import styles from './info.module.scss'

export default function Info() {
  const items = [
    {
      title: 'User Device',
      desc: 'Join the network and become a storage provider. Share your files with friends or backup your friends’ files.',
      img: '/images/products/ocean-drive/desktop.png',
      width: rem(355),
      imgHeight: rem(167)
    },

    {
      title: 'User Device',
      img: '/images/products/ocean-drive/phone.png',
      width: rem(94),
      imgHeight: rem(134)
    }
  ]

  const avarageItems = [
    {
      title: 'Storage Providers',
      desc: '3. Rent someone your personal storage and get rewarded',
      img: '/images/products/ocean-drive/storage.png',
      width: rem(186),
      imgHeight: rem(93)
    },
    {
      title: 'Storage Gateway',
      desc: '4. OceanDrive provides two different interfaces (HTTP/ P2P) for performing, sorting and querying on stream and are installed defined into application. Storage Gateway is responsible for handling requests by clients which connects to a remote OceanDrive node over HTTP.',
      img: '/images/products/ocean-drive/storage.png',
      width: rem(284),
      imgHeight: rem(93)
    }
  ]
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
          <div className={styles.oval}>
            <div className={styles.line} />
            <div className={styles.network}>
              <div className={styles.networkImg}>
                <img src='/images/products/ocean-drive/network.png' />
              </div>
              <Typography
                className={styles.title}
                variant='body1'
                color='secondary.dark'
                textAlign='center'
                fontWeight={700}
              >
                CONUN Blockchain Network
              </Typography>
              <Typography
                variant='body3'
                color='secondary.dark'
                textAlign='center'
                component='p'
              >
                5. The network constantly verifies that storage providers are
                storing files correctly. All rewarding process is powered by
                CONUN blockchain.
              </Typography>
            </div>
            <div className={styles.items}>
              {items.map((item) => (
                <div
                  className={styles.item}
                  key={item.title}
                  style={{ maxWidth: item.width }}
                >
                  <div className={styles.itemImg}>
                    <img
                      src={item.img}
                      style={{ height: item.imgHeight }}
                      alt={item.title}
                    />
                  </div>
                  <Typography
                    className={styles.itemTitle}
                    variant='body1'
                    color='secondary.dark'
                    textAlign='center'
                    fontWeight={700}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant='body3'
                    color='secondary.dark'
                    textAlign='center'
                    component='p'
                  >
                    {item.desc}
                  </Typography>
                </div>
              ))}
            </div>
            <div className={styles.avarageItems}>
              {avarageItems.map((item) => (
                <div
                  className={styles.item}
                  key={item.title}
                  style={{ maxWidth: item.width }}
                >
                  <div className={styles.itemImg}>
                    <img
                      src={item.img}
                      style={{ height: item.imgHeight }}
                      alt={item.title}
                    />
                  </div>
                  <Typography
                    className={styles.itemTitle}
                    variant='body1'
                    color='secondary.dark'
                    textAlign='center'
                    fontWeight={700}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant='body3'
                    color='secondary.dark'
                    textAlign='center'
                    component='p'
                  >
                    {item.desc}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

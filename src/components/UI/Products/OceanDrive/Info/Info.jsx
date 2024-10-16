import { Container, Typography } from '@mui/material'
import { useFontFamily } from 'hooks/useFontFamily'
import useTranslation from 'next-translate/useTranslation'
import { useMemo } from 'react'
import { rem } from 'utils/pxToRem'
import styles from './info.module.scss'

export default function Info() {
  const { t, lang } = useTranslation('common')
  const font = useFontFamily()
  const items = useMemo(
    () => [
      {
        title: t('product_ocean_drive_network_title_1'),
        desc: t('product_ocean_drive_network_desc_1'),
        img: '/images/products/ocean-drive/desktop.png',
        width: rem(355),
        imgHeight: rem(167),
        id: 1
      },
      {
        title: t('product_ocean_drive_network_title_1'),
        img: '/images/products/ocean-drive/phone.png',
        width: rem(94),
        imgHeight: rem(134),
        id: 2
      }
    ],
    [lang]
  )

  const avarageItems = useMemo(
    () => [
      {
        title: t('product_ocean_drive_network_title_2'),
        desc: t('product_ocean_drive_network_desc_2'),
        img: '/images/products/ocean-drive/storage.png',
        width: rem(186),
        imgHeight: rem(93),
        id: 3
      },
      {
        title: t('product_ocean_drive_network_title_3'),
        desc: t('product_ocean_drive_network_desc_3'),
        img: '/images/products/ocean-drive/network2.png',
        width: rem(284),
        imgHeight: rem(163),
        id: 4
      }
    ],
    [lang]
  )

  const list = [
    {
      title: t('product_ocean_drive_network_title_1'),
      desc: t('product_ocean_drive_network_desc_1'),
      img: '/images/products/ocean-drive/desktop.png',
      width: rem(355),
      imgHeight: rem(167),
      id: 1
    },
    {
      title: t('product_ocean_drive_network_title_2'),
      desc: t('product_ocean_drive_network_desc_2'),
      img: '/images/products/ocean-drive/storage.png',
      width: rem(186),
      imgHeight: rem(93),
      id: 3
    },
    {
      title: t('product_ocean_drive_network_title_3'),
      desc: t('product_ocean_drive_network_desc_3'),
      img: '/images/products/ocean-drive/network2.png',
      width: rem(284),
      imgHeight: rem(114),
      id: 4
    },
    {
      title: t('product_ocean_drive_network_title_1'),
      img: '/images/products/ocean-drive/phone.png',
      width: rem(94),
      imgHeight: rem(134),
      id: 2
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
          style={font}
          dangerouslySetInnerHTML={{
            __html: t('product_info_ocean_drive_desc')
          }}
        />
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
                style={font}
              >
                {t('product_ocean_drive_network_title_4')}
              </Typography>
              <Typography
                variant='body3'
                color='secondary.dark'
                textAlign='center'
                component='p'
                style={font}
              >
                {t('product_ocean_drive_network_desc_4')}
              </Typography>
            </div>
            <div className={styles.items}>
              {items.map((item) => (
                <div
                  className={styles.item}
                  key={item.id}
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
                    style={font}
                    dangerouslySetInnerHTML={{
                      __html: item.title
                    }}
                  />
                  <Typography
                    variant='body3'
                    color='secondary.dark'
                    textAlign='center'
                    component='p'
                    style={font}
                    dangerouslySetInnerHTML={{
                      __html: item.desc
                    }}
                  />
                </div>
              ))}
            </div>
            <div className={styles.avarageItems}>
              {avarageItems.map((item) => (
                <div
                  className={styles.item}
                  key={item.id}
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
                    style={font}
                    dangerouslySetInnerHTML={{
                      __html: item.title
                    }}
                  />
                  <Typography
                    variant='body3'
                    color='secondary.dark'
                    textAlign='center'
                    component='p'
                    style={font}
                    dangerouslySetInnerHTML={{
                      __html: item.desc
                    }}
                  />
                </div>
              ))}
            </div>
            <div className={styles.list}>
              {list.map((item) => (
                <div
                  className={styles.listItem}
                  key={item.id}
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
                    style={font}
                    dangerouslySetInnerHTML={{
                      __html: item.title
                    }}
                  />
                  <Typography
                    variant='body3'
                    color='secondary.dark'
                    textAlign='center'
                    component='p'
                    style={font}
                    dangerouslySetInnerHTML={{
                      __html: item.desc
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

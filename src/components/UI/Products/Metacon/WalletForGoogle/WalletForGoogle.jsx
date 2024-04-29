import { Button, Container, Typography } from '@mui/material'
import { useFontFamily } from 'hooks/useFontFamily'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import styles from './walletForGoogle.module.scss'

export default function WalletForGoogle() {
  const { t } = useTranslation('common')
  const itemsData = [
    {
      title: t('item_title_1'),
      description: t('item_description_1')
    },
    {
      title: t('item_title_2'),
      description: t('item_description_2')
    },
    {
      title: t('item_title_3'),
      description: t('item_description_3')
    },
    {
      title: t('item_title_4'),
      description: t('item_description_4')
    }
  ]
  const font = useFontFamily()

  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.box}>
          <Typography
            className={styles.title}
            variant='h2'
            color='primary.dark'
            textAlign='center'
            dangerouslySetInnerHTML={{
              __html: t('product_metacon_wallet_title')
            }}
          />

          <div className={styles.imageColumn}>
            <img
              src='/images/products/metacon/dream-city.png'
              alt='Image 1 description'
            />
            <img
              src='/images/products/metacon/metacon-showcase.png'
              alt='Image 2 description'
            />
          </div>

          <div className={styles.rowContainer}>
            {itemsData.map((item, index) => (
              <div className={styles.item} key={index}>
                <img
                  src={`/images/products/metacon/icon-${index + 1}.svg`}
                  alt={`Icon ${index + 1}`}
                />
                <Typography className={styles.itemTitle}>
                  {item.title}
                </Typography>
                <Typography
                  className={styles.itemParagraph}
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            ))}
          </div>

          <Link href='/products/dreamct' passHref>
            <Button className={styles.btn}>DreamsCT</Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}

import { Container } from '@mui/material'
import styles from './style.module.scss'
import { NextArrow } from 'components/UI/Icons'
import useTranslation from 'next-translate/useTranslation'

const items = [
  {
    title: 'OceanDrive',
    values: [
      {
        label: 'OceanDrive User Guide_en',
        path: '/user-guide/OceanDrive/OceanDrive_en.pdf'
      },
      {
        label: 'OceanDrive User Guide_kr',
        path: '/user-guide/OceanDrive/OceanDrive_ko.pdf'
      },
      {
        label: 'OceanDrive User Guide_cn',
        path: '/user-guide/OceanDrive/OceanDrive_cn.pdf'
      }
    ]
  },
  {
    title: 'OceanDrive Business Instruction',
    values: [
      {
        label: 'OceanDrive Business Instruction_en',
        path: '/user-guide/OceanDriveBusinessInstruciton/od_en.pdf'
      },
      {
        label: 'OceanDrive Business Instruction_kr',
        path: '/user-guide/OceanDriveBusinessInstruciton/od_ko.pdf'
      },
      {
        label: 'OceanDrive Business Instruction_cn',
        path: '/user-guide/OceanDriveBusinessInstruciton/od_cn.pdf'
      }
    ]
  },
  {
    title: 'World Art DEXPO',
    values: [
      {
        label: 'WAD User Guide_en',
        path: '/user-guide/WAD/WAD_en.pdf'
      },
      {
        label: 'WAD User Guide_kr',
        path: '/user-guide/WAD/WAD_ko.pdf'
      },
      {
        label: 'WAD User Guide_cn',
        path: '/user-guide/WAD/WAD_cn.pdf'
      }
    ]
  }
]

const items2 = [
  {
    title: 'Metacon',
    values: [
      {
        label: 'Metacon User Guide_en',
        path: '/user-guide/Metacon/metacon_en.pdf'
      },
      {
        label: 'Metacon User Guide_kr',
        path: '/user-guide/Metacon/metacon_ko.pdf'
      },
      {
        label: 'Metacon User Guide_cn',
        path: '/user-guide/Metacon/metacon_cn.pdf'
      }
    ]
  },
  {
    title: 'DreamsCT',
    values: [
      {
        label: 'DreamsCT User Guide_en',
        path: '/user-guide/DreamsCT/DCT_en.pdf'
      },
      {
        label: 'DreamsCT User Guide_kr',
        path: '/user-guide/DreamsCT/DCT_ko.pdf'
      },
      {
        label: 'DreamsCT User Guide_cn',
        path: '/user-guide/DreamsCT/DCT_cn.pdf'
      }
    ]
  }
]

export default function UserGuide() {
  const { t } = useTranslation('common')
  return (
    <Container>
      <div className={styles.guide}>
        <h1>{t('user_guide')}</h1>
        <div className={styles.list}>
          <div className={styles.items}>
            {items.map((item) => (
              <div className={styles.item} key={item.title}>
                <h2>{item.title}</h2>
                {item.values.map((data) => (
                  <a
                    href={data.path}
                    target='_blank'
                    key={data.label}
                    rel='noreferrer'
                  >
                    {data.label} <NextArrow />
                  </a>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.items}>
            {items2.map((item) => (
              <div className={styles.item} key={item.title}>
                <h2>{item.title}</h2>
                {item.values.map((data) => (
                  <a
                    href={data.path}
                    target='_blank'
                    key={data.label}
                    rel='noreferrer'
                  >
                    {data.label} <NextArrow />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

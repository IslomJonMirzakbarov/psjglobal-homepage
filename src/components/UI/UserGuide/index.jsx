import { Container } from '@mui/material'
import styles from './style.module.scss'
import { NextArrow } from 'components/UI/Icons'
import useTranslation from 'next-translate/useTranslation'
import classNames from 'classnames'

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
        path: '/user-guide/OceanDrive/OceanDrive_ko1.pdf'
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
  },
  {
    title: 'Swap',
    values: [
      {
        label: 'Swap User Guide_en',
        path: '/user-guide/Swap/Swap_en.pdf'
      },
      {
        label: 'Swap User Guide_kr',
        path: '/user-guide/Swap/Swap_ko.pdf'
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
  // {
  //   title: 'Invitation Code',
  //   values: [
  //     {
  //       label: 'Invitation Code User Guide_en',
  //       path: '/user-guide/Invitation/ITC_en.pdf'
  //     },
  //     {
  //       label: 'Invitation Code User Guide_kr',
  //       path: '/user-guide/Invitation/ITC_kr.pdf'
  //     },
  //     {
  //       label: 'Invitation Code User Guide_cn',
  //       path: '/user-guide/Invitation/ITC_cn.pdf'
  //     }
  //   ]
  // }
]

const items3 = [
  {
    title: 'Cycon Trading',
    values: [
      {
        label: 'Bitget CYCON Trading_en',
        path: '/bitget/Bitget CYCON Trading_en.pdf'
      },
      {
        label: 'Bitget CYCON Trading_kr',
        path: '/bitget/Bitget CYCON Trading_kr.pdf'
      }
    ]
  },
  {
    title: 'Cycon withdrawal',
    values: [
      {
        label: 'Bitget CYCON Withdrawal_en',
        path: '/bitget/Bitget CYCON Withdrawal_en.pdf'
      },
      {
        label: 'Bitget CYCON Withdrawal_kr',
        path: '/bitget/Bitget CYCON Withdrawal_kr.pdf'
      }
    ]
  },
  {
    title: 'Cycon&KYC withdrawal',
    values: [
      {
        label: 'Bitget CYCON&KYC Withdrawal_en',
        path: '/bitget/Bitget CYCON&KYC Withdrawal_en.pdf'
      },
      {
        label: 'Bitget CYCON&KYC Withdrawal_kr',
        path: '/bitget/Bitget CYCON&KYC Withdrawal_kr.pdf'
      }
    ]
  }
]

export default function UserGuide() {
  const { t } = useTranslation('common')
  return (
    <Container>
      <div className={styles.guide}>
        <div>
          <h1 dangerouslySetInnerHTML={{ __html: t('user_guide') }}></h1>
          <div className={styles.list} style={{ marginTop: 20 }}>
            <div className={styles.items}>
              {items3.map((item) => (
                <div
                  className={classNames(styles.item, styles.bitgetItem)}
                  key={item.title}
                >
                  {item.values.map((data) => (
                    <a
                      href={data.path}
                      target='_blank'
                      key={data.label}
                      rel='noreferrer'
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {data.label} <NextArrow />
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

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

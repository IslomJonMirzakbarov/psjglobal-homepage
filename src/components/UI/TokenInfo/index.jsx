import { Container } from '@mui/material'
import styles from './style.module.scss'
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'
import { bottomSectionItems } from './tokenData'

export default function TokenInfo() {
  const { t } = useTranslation('common')
  const [copyStatus, setCopyStatus] = useState('')
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopyStatus('Copied')
  }

  return (
    <Container>
      <div className={styles.guide}>
        <h1 className={styles.tokenInfoTitle}>{t('token_info')}</h1>
        <div className={styles.iconsContainer}>
          <div className={styles.iconContainer}>
            <img src='/token/cycon.png' alt='second' />
            <p className={styles.textConun}>CYCON</p>
          </div>
        </div>

        <table className={styles.tokenTable}>
          <tbody>
            <tr className={styles.tRow}>
              <td>Token Name</td>
              <td>CONUN</td>
            </tr>
            <tr>
              <td>Token Symbol</td>
              <td>CYCON</td>
            </tr>
            <tr>
              <td>Contract Address</td>
              <td className={styles.contractAdr}>
                <div className={styles.desktop}>
                  0xe4a1bd45cddbbd5d9f605b08ed13a94b6b6ab5aa
                </div>
                <div className={styles.mobile}>0xe4a1bd45c.....b6b6ab5aa</div>
                <div
                  className={styles.copyBtn}
                  onMouseEnter={() => {
                    if (copyStatus !== 'Copied') setCopyStatus('Copy')
                  }}
                  onMouseLeave={() => {
                    if (copyStatus === 'Copy') setCopyStatus('')
                  }}
                  onClick={() =>
                    copyToClipboard(
                      '0xe4a1bd45cddbbd5d9f605b08ed13a94b6b6ab5aa'
                    )
                  }
                >
                  <img
                    src={
                      copyStatus ? '/token/copy_colored.png' : '/token/copy.png'
                    }
                    alt='copy'
                  />
                  <div className={styles.tooltip}>{copyStatus}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Token Issue</td>
              <td>5,000,000,000</td>
            </tr>
          </tbody>
        </table>

        <div className={styles.bottomSection}>
          <h3 dangerouslySetInnerHTML={{ __html: t('enjoy_cycon') }} />
          <div className={styles.iconsContainer}>
            {bottomSectionItems.map((item) => (
              <div className={styles.iconContainer} key={item.text}>
                <img src={item.src} alt='first' />
                <p className={styles.textCycon}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

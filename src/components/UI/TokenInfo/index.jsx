import { Container } from '@mui/material'
import styles from './style.module.scss'
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'

export default function TokenInfo() {
  const { t } = useTranslation('common')
  const [copyStatus, setCopyStatus] = useState('Copy')
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Container>
      <div className={styles.guide}>
        <h1 className={styles.tokenInfoTitle}>Token Info</h1>
        <div className={styles.iconsContainer}>
          <div className={styles.iconContainer}>
            <img src='/token/logo.png' alt='first' />
            <p className={styles.textCycon}>CYCON</p>
          </div>
          <div className={styles.iconContainer}>
            <img src='/token/cycon.png' alt='second' />
            <p className={styles.textConun}>CONUN</p>
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
                  0xe4a1bd45cddbbd5d9f605b08ed13a94b6b6ab5aa{' '}
                </div>
                <div className={styles.mobile}>0xe4a1bd45c.....b6b6ab5aa</div>
                <img
                  src='/token/copy.png'
                  alt='copy'
                  className={styles.copyBtn}
                  onClick={() =>
                    copyToClipboard(
                      '0xe4a1bd45cddbbd5d9f605b08ed13a94b6b6ab5aa'
                    )
                  }
                  onMouseEnter={() => setCopyStatus('Copy')}
                  title={copyStatus}
                />
              </td>
            </tr>
            <tr>
              <td>Token Issue</td>
              <td>5,000,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  )
}

import { Button, Dialog } from '@mui/material'
import { BpCheckbox } from 'components/UI/SubscribeModal/mui-style'
import { useFontFamily } from 'hooks/useFontFamily'
import useTranslation from 'next-translate/useTranslation'
import { CloseModalIcon } from '../Icons'
import styles from './SubscribeModal.module.scss'

export default function SubscribeModal({ open, handleClose }) {
  const { t } = useTranslation('common')
  const font = useFontFamily()
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <div className={styles.modal}>
        <div className={styles.close} onClick={handleClose}>
          <CloseModalIcon />
        </div>
        <p className={styles.title} style={font}>
          {t('dialog_title')}
        </p>
        <img
          className={styles.img}
          src='/images/subscribe.png'
          alt='subscribe'
        />
        <p className={styles.desc} style={font}>
          {t('dialog_desc')}
        </p>
        <input
          name='email'
          type='email'
          placeholder='your@email.com'
          className={styles.input}
        />
        <div className={styles.checkbox} style={font}>
          <BpCheckbox /> {t('dialog_privacy')}
        </div>
        <Button fullWidth className={styles.button}>
          Confirm
        </Button>
      </div>
    </Dialog>
  )
}

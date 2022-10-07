import { Button, CircularProgress, Dialog } from '@mui/material'
import axios from 'axios'
import { BpCheckbox } from 'components/UI/SubscribeModal/mui-style'
import { useFontFamily } from 'hooks/useFontFamily'
import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'
import { request } from 'services/http-client'
import { CloseModalIcon } from '../Icons'
import styles from './SubscribeModal.module.scss'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
export default function SubscribeModal({ open, handleClose }) {
  const { t } = useTranslation('common')
  const font = useFontFamily()
  const [email, setEmail] = useState('')
  const [loader, setLoader] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setLoader(true)
    axios
      .post('/api/email', {
        email,
        text: t('download_text')
      })
      .then((res) => {
        if (res.status === 200) {
          request
            .post('subscribers', {
              data: {
                email
              }
            })
            .then((response) => {
              handleClose()
              if (response.status === 200) toast.success('Successfully!')
            })
            .catch((err) => {
              toast.error('Internal Server Error!')
            })
        }
      })
      .catch((e) => {
        toast.error('Email is incorrect')
      })
      .finally(() => {
        setLoader(false)
      })
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <form onSubmit={onSubmit} className={styles.modal}>
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
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className={styles.checkbox} style={font}>
          <BpCheckbox /> {t('dialog_privacy')}
        </div>
        <Button type='submit' fullWidth className={styles.button}>
          {loader ? <CircularProgress color='inherit' size={21} /> : 'Confirm'}
        </Button>
      </form>
    </Dialog>
  )
}

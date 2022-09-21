import { Button, Checkbox, Dialog, styled } from '@mui/material'
import { useFontFamily } from 'hooks/useFontFamily'
import useTranslation from 'next-translate/useTranslation'
import { CloseModalIcon } from '../Icons'
import styles from './SubscribeModal.module.scss'

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  minWidth: 18,
  minHeight: 18,

  boxShadow: 'none',
  border: '1px solid #E8E8E8',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#F3F3F3',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5'
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark'
        ? 'rgba(57,75,89,.5)'
        : 'rgba(206,217,224,.5)'
  }
}))

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#0012B0',
  borderRadius: 3,
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""'
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3'
  }
})

function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        '&:hover': { bgcolor: 'transparent' }
      }}
      disableRipple
      color='default'
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ 'aria-label': 'Checkbox demo' }}
      {...props}
    />
  )
}

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
          Subscribe
        </Button>
      </div>
    </Dialog>
  )
}

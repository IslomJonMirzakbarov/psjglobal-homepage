/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import Close from '@mui/icons-material/Close'
import { Dialog } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import cls from './style.module.scss'

const GateioFirst = ({ open, handleClose }) => {
  const { t, lang } = useTranslation('common')
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      style={{
        overflow: 'hidden'
      }}
      PaperProps={{
        className: cls.modal,
        style: {
          borderRadius: '10px',
          maxHeight: 'none',
          margin: '20px'
        }
      }}
    >
      <div className={cls.container}>
        <div className={cls.header}>
          <div className={cls.top}>
            <span style={{ display: 'flex' }} onClick={handleClose}>
              <Close />
            </span>
          </div>
          <div className={cls.betContainer}>
            <a
              href='https://psjglobalcycon.medium.com/cycon-token-listing-on-gate-io-64804b5aaf3c'
              target='_blank'
              rel='noopener noreferrer'
              className={cls.betService}
            >
              CYCON Listing <br /> on Gate.io!
            </a>
          </div>
          <img
            className={cls.laptop}
            src='/icons/gateio.svg'
            alt='ocean drive'
          />
        </div>
      </div>
    </Dialog>
  )
}

export default GateioFirst

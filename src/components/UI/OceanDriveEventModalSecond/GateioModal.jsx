import Close from '@mui/icons-material/Close'
import { Dialog } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import cls from './style.module.scss'

const GateioModal = ({ open, handleClose }) => {
  const { t, lang } = useTranslation('common')
  const imageSrc =
    lang === 'kr'
      ? '/icons/gateio_second_kr.svg'
      : '/icons/gateio_second_en.svg'

  const overlayStyles =
    lang === 'kr'
      ? { top: '96.8%', left: '53%', width: '36.5%' } // Korean image link positioning
      : { top: '97%', left: '9.4%', width: '37.8%' } // English image link positioning

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      style={{ overflow: 'auto' }}
      PaperProps={{
        className: cls.modal,
        style: {
          borderRadius: '10px',
          maxHeight: 'none',
          margin: '20px'
        }
      }}
    >
      <div className={cls.container} style={{ position: 'relative' }}>
        <span className={cls.closeButton} onClick={handleClose}>
          <Close />
        </span>
        <img className={cls.modalImage} src={imageSrc} alt='Gate.io Event' />

        {/* Overlay link */}
        <a
          href='https://forms.gle/vFU6bj5qKBobhuPy5'
          target='_blank'
          rel='noopener noreferrer'
          style={{
            position: 'absolute',
            top: overlayStyles.top,
            left: overlayStyles.left,
            width: overlayStyles.width,
            height: '20px',
            background: 'rgba(255, 255, 255, 0)',
            cursor: 'pointer',
            display: 'block'
          }}
        ></a>
      </div>
    </Dialog>
  )
}

export default GateioModal

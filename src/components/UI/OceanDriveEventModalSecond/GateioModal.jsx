import Close from '@mui/icons-material/Close'
import { Dialog } from '@mui/material'
import cls from './style.module.scss'

const GateioModal = ({ open, handleClose }) => {
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
      <div className={cls.container}>
        <span className={cls.closeButton} onClick={handleClose}>
          <Close />
        </span>
        <img
          className={cls.modalImage}
          src='/icons/gateio_second.svg'
          alt='Gate.io Event'
        />
      </div>
    </Dialog>
  )
}

export default GateioModal

import { Dialog } from '@mui/material'
import React from 'react'
import cls from './style.module.scss'
import Close from '@mui/icons-material/Close'

const EventModalSecond = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      fullScreen
      PaperProps={{
        className: cls.modal
      }}
    >
      <div className={cls.top}>
        <span onClick={handleClose}>
          <Close />
        </span>
      </div>
      <div className={cls.container}>
        <div className={cls.video}>
          <iframe
            title='video'
            src='https://www.youtube.com/embed/G7S4WKXob-Y'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
      </div>
    </Dialog>
  )
}

export default EventModalSecond

import { Box, Dialog } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import cls from './style.module.scss'
import Close from '@mui/icons-material/Close'

const EventModal = ({ open, handleClose }) => {
  const { t, lang } = useTranslation('common')
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      style={{
        overflow: 'auto'
      }}
      PaperProps={{
        className: cls.modal,
        // sx: {
        //   top: {
        //     sm: '200px',
        //     md: '400px',

        //   }
        // },
        style: {
          borderRadius: '10px',
          maxHeight: 'none',
          margin: '20px'
        }
      }}
    >
      <div className={cls.container}>
        <div className={cls.header}>
          <img
            className={cls.element1}
            src='/images/ocean-drive/rightElement1.png'
            alt='test'
          />
          <img
            className={cls.element2}
            src='/images/banner-shutterstock-bg.png'
            alt='test'
          />
          <img className={cls.element3} src='/images/money1.png' alt='test' />
          <img className={cls.element4} src='/images/money2.png' alt='test' />
          <div className={cls.top}>
            <img src='/icons/ocean-drive-white.svg' alt='ocean drive' />
            <span style={{ display: 'flex' }} onClick={handleClose}>
              <Close />
            </span>
          </div>
          <div className={cls.comment1}>{t('comment1')}</div>
          <div className={cls.comment2}>{t('comment2')}</div>
          <div className={cls.comment3}>{t('comment3')}</div>
          <p className={cls.betService}>Open Beta Service</p>
          <img
            className={cls.reviewEventImage}
            src='/images/reviewEvent.svg'
            alt='test'
          />
          <p
            className={cls.text}
            dangerouslySetInnerHTML={{ __html: t('event_review') }}
          ></p>
          <div className={cls.laptop}>
            <a href='https://conun.io/ocean-drive' target='_blank'>
              https://conun.io/ocean-drive
            </a>
            <img
              className={cls.logo}
              src='/icons/ocean-drive-white.svg'
              alt='ocean drive'
            />
          </div>
        </div>
        <div className={cls.body}>
          <p className={cls.title}>{t('how_to_join')}</p>
          <div className={cls.items}>
            <div className={cls.item}>
              <p>Step 1</p>
              <p>{t('step_1')}</p>
            </div>
            <div className={cls.item}>
              <p>Step 2</p>
              <p dangerouslySetInnerHTML={{ __html: t('step2') }}></p>
            </div>
            <div className={cls.item}>
              <p>Step 3</p>
              <p dangerouslySetInnerHTML={{ __html: t('step3') }}></p>
            </div>
          </div>
          <p className={cls.title}>{t('prize')}</p>
          <div className={cls.prizes}>
            <div className={cls.prize}>
              <span>
                <b>50</b>
                {t('people')}
              </span>
              <img src='/images/prize1.png' />
              <p dangerouslySetInnerHTML={{ __html: t('prize_1') }}></p>
            </div>
            <p className={cls.or}>or</p>
            <div className={cls.prize}>
              <span>
                <b>50</b>
                {t('people')}
              </span>
              <img src='/images/prize2.svg' />
              <p dangerouslySetInnerHTML={{ __html: t('prize_2') }}></p>
            </div>
          </div>
          <div className={cls.notice}>
            <h4>{t('notice')}</h4>
            <div
              className={cls.text}
              dangerouslySetInnerHTML={{ __html: t('notice_text') }}
            ></div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default EventModal

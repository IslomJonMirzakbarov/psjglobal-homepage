/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import { Dialog } from '@mui/material'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import cls from './style.module.scss'
import Close from '@mui/icons-material/Close'

const EventModalFirst = ({ open, handleClose }) => {
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
            <img src='/icons/ocean-drive-white.svg' alt='ocean drive' />
            <span style={{ display: 'flex' }} onClick={handleClose}>
              <Close />
            </span>
          </div>
          <img
            className={cls.reviewEventImage}
            src='/images/reviewEvent1.svg'
            alt='test'
          />
          <div className={cls.betContainer}>
            <p className={cls.betService}>OceanDrive GRAND OPEN EVENT</p>
          </div>
          <p
            className={cls.text}
            dangerouslySetInnerHTML={{
              __html: t('ocean_drive_notice')
            }}
          />
          <img
            className={cls.laptop}
            src='/icons/ocean-drive-white1.svg'
            alt='ocean drive'
          />
        </div>

        <div className={cls.body}>
          <div className={cls.titleDiv}>
            <div className={cls.line}></div>
            <div className={cls.titleContainer}>
              <p className={cls.title}>{t('how_to_join')}</p>
            </div>
          </div>
          <div className={cls.items}>
            <div className={cls.item}>
              <p>Step 1</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('ocean_drive_installation')
                }}
              />
            </div>
            <div className={cls.item}>
              <p>Step 2</p>
              <p
                dangerouslySetInnerHTML={{ __html: t('follow_conun_twitter') }}
              />
            </div>
            <div className={cls.item}>
              <p>Step 3</p>
              <p
                dangerouslySetInnerHTML={{ __html: t('retweet_event_like') }}
              />
            </div>
            <div className={cls.item}>
              <p>Step 4</p>
              <p
                dangerouslySetInnerHTML={{ __html: t('submit_google_form') }}
              />
            </div>
          </div>
          <div className={cls.titleDiv}>
            <div className={cls.line}></div>
            <div className={cls.titleContainer}>
              <p className={cls.title}>{t('prize')}</p>
            </div>
          </div>
          <div className={cls.prizes}>
            <div className={cls.prize}>
              <img src='/images/prize11.svg' />
            </div>
            <div className={cls.prize}>
              <p
                dangerouslySetInnerHTML={{ __html: t('earn_by_participating') }}
              />
            </div>
          </div>
          <div className={cls.notice}>
            <h4>
              <img src='/images/notice_bell.svg' alt='' /> {t('notice_title')}
            </h4>
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

export default EventModalFirst

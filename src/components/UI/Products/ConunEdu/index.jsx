import { Box, Container, Typography } from '@mui/material'
import styles from './style.module.scss'
import Link from 'next/link'

const edus = [
  {
    eduImg: '/images/products/conun-edu/visang_edu.png',
    linkTitle: '태안비상에듀기숙학원',
    link: 'https://visang365.com/'
  },
  {
    eduImg: '/images/products/conun-edu/hiq_system.png',
    linkTitle: '정상어학원',
    link: 'https://www.hiqsystem.co.kr/'
  }
]

export default function ConunEdu() {
  return (
    <Container>
      <Box
        paddingTop='70px'
        display='flex'
        gap='16.58px'
        alignItems='center'
        className={styles.eduContainer}
      >
        {edus.map((edu, index) => (
          <Link href={edu.link} passHref key={edu.link}>
            <a target='_blank' rel='noopener noreferrer'>
              <Box
                width='244px'
                height='200px'
                borderRadius='10px'
                border='1px solid #ddd'
                position='relative'
                className={styles.edu}
              >
                <Box
                  margin='auto'
                  marginTop='53px'
                  width='max-content'
                  className={styles.eduIcon}
                >
                  <img src={edu.eduImg} alt={`Edu image ${index + 1}`} />
                </Box>
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                  width='100%'
                  padding='0 16px 16px'
                  position='absolute'
                  bottom='0'
                >
                  <Typography>{edu.linkTitle}</Typography>
                  <img
                    src={`/images/products/conun-edu/right_arrow.svg`}
                    alt={`Icon ${index + 1}`}
                  />
                </Box>
              </Box>
            </a>
          </Link>
        ))}
      </Box>
    </Container>
  )
}

import { Container, Typography } from '@mui/material'
import styles from './youtube.module.scss'

const videos = [
  {
    title: 'OceanDrive main promotional video (Eng)',
    link: 'https://www.youtube.com/watch?v=OUHTW7NMOT0'
  },
  {
    title: '오션드라이브 메인 홍보 영상',
    link: 'https://www.youtube.com/watch?v=LJW-s7j8ric'
  },
  {
    title: 'OceanDrive User Guide(Eng)',
    link: 'https://www.youtube.com/watch?v=JCR8PDRVb2I'
  },
  {
    title: 'OceanDrive 사용자 가이드',
    link: 'https://www.youtube.com/watch?v=-Pl95GwYCXA'
  },
  {
    title: 'OceanDrive Infura 사용자 가이드',
    link: 'https://www.youtube.com/watch?v=dI4sbHwOiZU&t=166s'
  },
  {
    title: '월드아트덱스포(WORLD ART DEXPO) "현호경 NFT"',
    link: 'https://www.youtube.com/watch?v=XFbxxlfPUX0'
  }
]

const getYouTubeID = (url) => {
  const regExp =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  const match = url.match(regExp)
  return match ? match[1] : null
}

export default function YouTube() {
  return (
    <Container className={styles.container}>
      <div className={styles.youtube}>
        <Typography align='center' variant='h2' color='primary.dark'>
          PSJGLOBAL YOUTUBE
        </Typography>
        <div className={styles.grid}>
          {videos.map((video, index) => {
            const videoID = getYouTubeID(video.link)
            const thumbnailURL = `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`
            return (
              <a
                href={video.link}
                target='_blank'
                rel='noopener noreferrer'
                key={index}
              >
                <div className={styles.card}>
                  <img
                    src={thumbnailURL}
                    alt={video.title}
                    className={styles.image}
                  />
                  <div className={styles.content}>
                    <Typography variant='h6' className={styles.title}>
                      {video.title}
                    </Typography>
                    <div className={styles.iconHolder}>
                      <img
                        src='/images/youtube/youtube_rightarrow.svg'
                        alt='youtube_rightarrow'
                      />
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </Container>
  )
}

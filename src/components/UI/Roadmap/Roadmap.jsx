import { Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import styles from './roadmap.module.scss'
import Card from './Card/Card'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const animationVariant = {
  hidden: { x: 100 },
  visible: { x: 0, transition: { duration: 1, delay: 0.2 } }
}

export default function Roadmap({ roadmaps }) {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  const years = ['2017', '2018', '2019', '2020', '2021', '2022', '2023']
  const data = [
    {
      month: 'Mar',
      title: 'Development distributed network architecture (C/S platform)',
      content: 'Implement for Client / Server platform network architecture'
    },
    {
      month: 'Jun',
      title:
        'Development distributed network architecture (multi-node processing)',
      content: 'Proceed job scheduler, task allocation process',
      children: [
        {
          month: 'May',
          title: 'Development distributed storage(IPFS)',
          content:
            'Make transportation & distributed data storage management in application'
        }
      ]
    },
    {
      month: 'Jul',
      title: 'Development for client interface (manager)',
      content: 'Implement for client application program'
    },
    {
      month: 'Dec',
      title:
        'Apply for blockchain(Ethereum test-net: ropsten) and distributed processing platform based on docker task',
      content: 'Apply for blockchain and task processing based on docker task'
    }
  ]

  const sortedRoadmaps = roadmaps.sort(
    (a, b) => a.attributes.year - b.attributes.year
  )
  const [tab, setTab] = useState(
    roadmaps.length > 0 ? sortedRoadmaps[6]?.id : null
  )

  return (
    <div className={styles.box}>
      <Container className={styles.container}>
        <div className={styles.roadmap}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ ease: 'linear', duration: 4, repeat: Infinity }}
            className={styles.element1}
          >
            <img src='/images/roadmap2.png' alt='roadmap' />
          </motion.div>
          <motion.div
            ref={ref}
            variants={animationVariant}
            initial='hidden'
            animate={control}
            className={styles.element2}
          >
            <img src='/images/roadmap1.png' alt='roadmap' />
          </motion.div>
          <Typography variant='h2' color='primary.dark'>
            Roadmap
          </Typography>
          <div className={styles.years}>
            {sortedRoadmaps?.map((item) => (
              <div
                onClick={() => setTab(item.id)}
                className={`${styles.item} ${
                  tab === item.id ? styles.active : ''
                }`}
                key={item.id}
              >
                {item.attributes.year}
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className={styles.diagram}>
        <div className={styles.line} />
        <Container className={styles.diagramContainer}>
          <div className={styles.items}>
            {roadmaps
              ?.find((data) => data.id === tab)
              ?.attributes?.quaters?.map((item, index) => (
                <div key={item.id} className={styles.list}>
                  <div className={styles.element}>
                    <p>Q{index + 1}</p>
                    <div className={styles.circle} />
                  </div>
                  <Card item={item} />
                  {item?.items?.map((val) => (
                    <Card item={val} key={val.id} />
                  ))}
                </div>
              ))}
          </div>
        </Container>
      </div>
    </div>
  )
}

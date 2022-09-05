import { Container, Typography } from '@mui/material'
import { useState } from 'react'
import styles from './roadmap.module.scss'
import Card from './Card/Card'

export default function Roadmap() {
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
  const [tab, setTab] = useState('2019')
  return (
    <div className={styles.box}>
      <Container className={styles.container}>
        <div className={styles.roadmap}>
          <div className={styles.element1}>
            <img src='/images/roadmap2.png' alt='roadmap' />
          </div>
          <div className={styles.element2}>
            <img src='/images/roadmap1.png' alt='roadmap' />
          </div>
          <Typography variant='h2' color='primary.dark'>
            Roadmap
          </Typography>
          <div className={styles.years}>
            {years.map((item) => (
              <div
                onClick={() => setTab(item)}
                className={`${styles.item} ${
                  tab === item ? styles.active : ''
                }`}
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className={styles.diagram}>
        <div className={styles.line} />
        <Container className={styles.diagramContainer}>
          <div className={styles.items}>
            {data.map((item, index) => (
              <div className={styles.list} key={item.title}>
                <div className={styles.element}>
                  <p>Q{index + 1}</p>
                  <div className={styles.circle} />
                </div>
                <Card item={item} />
                {item?.children?.map((val) => (
                  <Card item={val} />
                ))}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}

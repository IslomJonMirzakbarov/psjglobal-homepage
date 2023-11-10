import { Container, Typography } from '@mui/material'
import { SearchIcon } from '../Icons'
import styles from './notice.module.scss'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import getDataByLang from 'utils/getDataByLang'
import { format } from 'date-fns'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0
  },
  background: 'transparent'
}))

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    backgroundColor: 'transparent',
    padding: '15px 0',
    '& .MuiAccordionSummary-content': {
      margin: 0
    }
  })
)

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '15px 17px',
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}))

export default function Notice({ notifications }) {
  const [search, setSearch] = useState('')
  const [items, setItems] = useState([])
  const router = useRouter()
  useEffect(() => {
    if (search) {
      setItems(
        notifications.filter(
          (item) =>
            (getDataByLang(router.locale, 'title', item.attributes)
              .toLowerCase()
              .includes(search.toLowerCase()) ||
              getDataByLang(router.locale, 'description', item.attributes)
                .toLowerCase()
                .includes(search.toLowerCase())) &&
            item.attributes.is_active
        )
      )
    } else {
      setItems(notifications.filter((item) => item.attributes.is_active))
    }
  }, [search, notifications])

  return (
    <Container className={styles.container}>
      <div className={styles.faq}>
        <Typography align='center' variant='h2' color='primary.dark'>
          Notice
        </Typography>
        <div className={styles.search}>
          <input
            name='search'
            placeholder='Search'
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className={styles.icon}>
            <SearchIcon />
          </div>
        </div>
        <div className={styles.accordion}>
          {items?.length > 0 ? (
            items?.map((item) => (
              <Accordion key={item.id}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <div className={styles.accordionHead}>
                    <Typography
                      variant='body1'
                      fontWeight='500'
                      color='secondary.dark'
                    >
                      {getDataByLang(router.locale, 'title', item.attributes)}
                    </Typography>
                    <p className={styles.date}>
                      {format(
                        new Date(item.attributes.createdAt),
                        'yyyy.MM.dd'
                      )}
                    </p>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='body3' color='secondary'>
                    {getDataByLang(
                      router.locale,
                      'description',
                      item.attributes
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))
          ) : (
            <div className={styles.empty}>
              <img src='/images/faq.png' alt='faq' />
              <p>No Results</p>
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}

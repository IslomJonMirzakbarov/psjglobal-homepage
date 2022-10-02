import { Container, Typography } from '@mui/material'
import { SearchIcon } from '../Icons'
import styles from './faq.module.scss'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import getDataByLang from 'utils/getDataByLang'

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

export default function Faq({ faqs }) {
  const [search, setSearch] = useState('')
  const [items, setItems] = useState([])
  const router = useRouter()
  useEffect(() => {
    if (search) {
      setItems(
        faqs.filter(
          (item) =>
            getDataByLang(router.locale, 'question', item.attributes)
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            getDataByLang(router.locale, 'answer', item.attributes)
              .toLowerCase()
              .includes(search.toLowerCase())
        )
      )
    } else {
      setItems(faqs)
    }
  }, [search, faqs])

  return (
    <Container className={styles.container}>
      <div className={styles.faq}>
        <Typography align='center' variant='h2' color='primary.dark'>
          FAQ
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
                  <Typography
                    variant='body1'
                    fontWeight='500'
                    color='secondary.dark'
                  >
                    {getDataByLang(router.locale, 'question', item.attributes)}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='body3' color='secondary'>
                    {getDataByLang(router.locale, 'answer', item.attributes)}
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

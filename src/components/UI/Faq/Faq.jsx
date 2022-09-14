import { Container, Typography } from '@mui/material'
import { SearchIcon } from '../Icons'
import styles from './faq.module.scss'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material/styles'

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

export default function Faq() {
  const data = [
    {
      title: 'Why has CONUN developed its own private blockchain network?',
      desc: 'CONUN’s main project, the DSC, allows users to submit supercomputing tasks, that will be shared with connected nodes, users who are sharing their computers’ resources with the network. When tasks are completed, users are rewarded for their computers’ work with tokens. For the rewarding process to work, transferring tokens must be both free, as well as fast. With a private blockchain network, CONUN is able to meet both of these requirements. You can read more about this on the DSC and CPBN product description pages!'
    },
    {
      title: 'How much are fees when using CON and CONX tokens?',
      desc: 'CONUN’s main project, the DSC, allows users to submit supercomputing tasks, that will be shared with connected nodes, users who are sharing their computers’ resources with the network. When tasks are completed, users are rewarded for their computers’ work with tokens. For the rewarding process to work, transferring tokens must be both free, as well as fast. With a private blockchain network, CONUN is able to meet both of these requirements. You can read more about this on the DSC and CPBN product description pages!'
    },
    {
      title: 'How can I withdraw my CON tokens?',
      desc: 'CONUN’s main project, the DSC, allows users to submit supercomputing tasks, that will be shared with connected nodes, users who are sharing their computers’ resources with the network. When tasks are completed, users are rewarded for their computers’ work with tokens. For the rewarding process to work, transferring tokens must be both free, as well as fast. With a private blockchain network, CONUN is able to meet both of these requirements. You can read more about this on the DSC and CPBN product description pages!'
    },
    {
      title: 'Can I add other token wallets into my Metacon wallet?',
      desc: 'CONUN’s main project, the DSC, allows users to submit supercomputing tasks, that will be shared with connected nodes, users who are sharing their computers’ resources with the network. When tasks are completed, users are rewarded for their computers’ work with tokens. For the rewarding process to work, transferring tokens must be both free, as well as fast. With a private blockchain network, CONUN is able to meet both of these requirements. You can read more about this on the DSC and CPBN product description pages!'
    }
  ]
  return (
    <Container className={styles.container}>
      <div className={styles.faq}>
        <Typography align='center' variant='h2' color='primary.dark'>
          FAQ
        </Typography>
        <div className={styles.search}>
          <input name='search' placeholder='Search' />
          <div className={styles.icon}>
            <SearchIcon />
          </div>
        </div>
        <div className={styles.accordion}>
          {data.map((item) => (
            <Accordion>
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
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant='body3' color='secondary'>
                  {item.desc}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </Container>
  )
}

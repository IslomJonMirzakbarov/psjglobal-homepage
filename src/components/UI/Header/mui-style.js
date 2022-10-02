import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { styled } from '@mui/system'
import { SwipeableDrawer } from '@mui/material'

export const MuiSwipeableDrawer = styled((props) => (
  <SwipeableDrawer {...props} />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    width: '100vw'
  }
}))

export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: 'none',
  background: '#F6F6FB',
  borderRadius: 0,
  '&::before': {
    display: 'none'
  }
}))

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: '21px 22px',
  '& .MuiAccordionSummary-content': {
    margin: 0
  },
  '&.Mui-expanded': {
    boxShadow: '0px 4px 19px rgba(0, 0, 0, 0.25)'
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  }
}))

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  border: 'none'
}))

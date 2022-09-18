// https://mui.com/material-ui/customization/theming/

import { createTheme } from '@mui/material'
import { rem } from 'utils/pxToRem'

export default createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#0012B0',
      dark: '#232323'
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#484848',
      dark: '#252525'
    }
  },
  typography: {
    fontFamily: 'Poppins',
    body1: {
      fontSize: rem(15),
      lineHeight: rem(22)
    },
    body2: {
      fontSize: rem(15),
      lineHeight: rem(25)
    },
    body3: {
      fontSize: rem(12),
      lineHeight: rem(20)
    },
    h1: {
      fontWeight: 700,
      fontSize: rem(65),
      lineHeight: rem(78),
      ['@media screen and (max-width: 600px)']: {
        fontSize: rem(28),
        lineHeight: rem(35)
      }
    },
    h2: {
      fontWeight: 700,
      fontSize: rem(55),
      lineHeight: rem(80),
      ['@media screen and (max-width: 600px)']: {
        fontSize: rem(28),
        lineHeight: rem(22)
      }
    },
    h6: {
      fontWeight: 700,
      fontSize: rem(18),
      lineHeight: rem(22)
    },
    h5: {
      fontWeight: 700,
      fontSize: rem(25),
      lineHeight: rem(37),
      ['@media screen and (max-width: 600px)']: {
        fontSize: rem(18),
        lineHeight: rem(22)
      }
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: rem(16),
          width: rem(180),
          borderRadius: rem(10),
          backgroundColor: 'var(--primary-color)',
          color: ' #fff',
          fontWeight: 600,
          fontSize: rem(15),
          lineHeight: rem(22),
          border: 'none',
          textTransform: 'none',
          transition: 'all 0.25s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
            backgroundColor: 'var(--primary-color)'
          },
          '&.Mui-disabled': {
            color: '#fff',
            backgroundColor: '#1AD7B5'
          }
        },
        textSecondary: {
          backgroundColor: '#1AD7B5',
          '&:hover': {
            backgroundColor: '#1AD7B5'
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: rem(10)
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          ['@media screen and (max-width: 600px)']: {
            padding: `0 ${rem(22)}`
          }
        }
      }
    }
  }
})

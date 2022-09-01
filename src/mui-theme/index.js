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
      dark: '#232323'
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
      lineHeight: rem(78)
    },
    h2: {
      fontWeight: 700,
      fontSize: rem(55),
      lineHeight: rem(80)
    },
    h6: {
      fontWeight: 700,
      fontSize: rem(18),
      lineHeight: rem(22)
    },
    h5: {
      fontWeight: 700,
      fontSize: rem(25),
      lineHeight: rem(37)
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
          '&:hover': {
            color: 'black'
          }
        }
      }
    }
  }
})

import { createTheme, responsiveFontSizes } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { cyan } from '@mui/material/colors'

const theme = responsiveFontSizes(createTheme({
  palette: {
    mode: 'dark',
    primary: cyan,
    secondary: cyan
  }
}));

const useStyle = makeStyles(()=> ({
  root: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + parseInt(theme.spacing(2)) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + parseInt(theme.spacing(3)) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + parseInt(theme.spacing(3)) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  appBar: {
    position: 'relative',
    color: 'default'
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  footer: {
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100% !important',
    height: '100px !important'
  }
}));

export { theme, useStyle };
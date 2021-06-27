import { createMuiTheme } from '@material-ui/core'

const Theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#5F2EEA'
    }
  }
})

Theme.props = {
  MuiInput: {
    disableUnderline: true
  }
}

Theme.overrides = {
  MuiTypography: {
    h3: {
      fontWeight: 600
    }
  },
  MuiContainer: {
    root: {
      margin: 8,
      padding: 8,
      minHeight: 400,
      borderRadius: 15,
    }
  }
}

export default Theme
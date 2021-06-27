import { ThemeProvider, Container } from '@material-ui/core'
import Theme from '../Styles/Theme'
import useStyles from '../Styles/Styles'
import TitleBar from '../TitleBar/TitleBar'
import Menu from '../Menu/Menu'
import Order from '../Order/Order'

function App() {

  const classes = useStyles()

  return (
    <ThemeProvider theme={Theme}>
      <Container className={classes.app}>
        <TitleBar />
        <Container className={classes.body}>
          <Menu />
          <Order />
        </Container>
      </Container>
    </ThemeProvider>
  )
}

export default App
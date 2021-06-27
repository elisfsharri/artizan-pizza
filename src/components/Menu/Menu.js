import { Container, Button } from '@material-ui/core'
import useStyles from '../Styles/Styles'
import NavBar from '../NavBar/NavBar'
import Product from '../Product/Product'

function Menu() {

  const classes = useStyles()

  return (
    <Container className={classes.menu} maxWidth='sm' >
      <NavBar />
      <Container>
        <Product name='Produkt 1' />
        <Product name='Produkt 2' />
        <Product name='Produkt 3' />
        <Product name='Produkt 4' />
        <Product name='Produkt 5' />
      </Container>
      <Button variant='contained' >
        Shto produkt
      </Button>
    </Container>
  )
}

export default Menu
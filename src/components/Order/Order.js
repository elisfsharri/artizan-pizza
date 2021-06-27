import { Container, Button } from '@material-ui/core'
import useStyles from '../Styles/Styles'
import OrderElement from '../OrderElement/OrderElement'

function Order() {

  const classes = useStyles()

  return (
    <Container maxWidth='xs' className={classes.order}>
      <Container>
        <OrderElement name='Produkt 1'/>
        <OrderElement name='Produkt 4'/>
        <OrderElement name='Produkt 5'/>
      </Container>
      <Button variant='contained' >
        Konfirmo
      </Button>
    </Container>
  )
}

export default Order
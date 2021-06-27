import { Paper, Typography, IconButton } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import useStyles from '../Styles/Styles'

function Product({ name }) {
  
  const classes = useStyles()
  
  return (
    <Paper className={classes.product}>
      <Typography variant='body1'>
        {name}
      </Typography>
      <IconButton size='small'>
        <AddShoppingCartIcon />
      </IconButton>
    </Paper>
  )
}

export default Product
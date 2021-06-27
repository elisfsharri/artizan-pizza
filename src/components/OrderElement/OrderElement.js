import { Paper, Typography, IconButton } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear';
import useStyles from '../Styles/Styles'

function OrderElement({ name }) {
  
  const classes = useStyles()
  
  return (
    <Paper className={classes.product}>
      <Typography variant='body2'>
        {name}
      </Typography>
      <IconButton size='small'>
        <ClearIcon />
      </IconButton>
    </Paper>
  )
}

export default OrderElement
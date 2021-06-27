import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => createStyles({
  app: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  product: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between'
  },
  menu: {
    flexGrow: 2,
    border: '1px solid grey',
    display: 'flex',
    flexDirection: 'column'
  },
  order: {
    border: '1px solid grey',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
}))

export default useStyles
import { ButtonGroup, Button } from '@material-ui/core'

function NavBar() {

  return (
    <ButtonGroup variant='contained' size="small">
        <Button>Menu 1</Button>
        <Button>Menu 2</Button>
        <Button>Menu 3</Button>
        <Button>+</Button>
    </ButtonGroup>
  )
}

export default NavBar
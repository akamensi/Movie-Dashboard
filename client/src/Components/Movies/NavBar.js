import {Container, Navbar, Nav} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../Redux/Actions/UserActions'

const NavBar=()=>{

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const token = localStorage.getItem('token')
  const user = useSelector(state=> state.UserReducer.user)
    return(
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            {token && user ?
            <>
            <Nav.Link as={Link} to="/profil">Profil</Nav.Link>
            <Nav.Link as={Link} to="/movieList">Movies List</Nav.Link>
            <Nav.Link as={Link} to="/addMovie">Add Movie</Nav.Link>
            <Nav.Link onClick={()=>{dispatch(logout(), navigate('/'))}} >Logout</Nav.Link>
            </>
            :
            <>
            <Nav.Link as={Link} to="/singup">Singup</Nav.Link>
            <Nav.Link as={Link} to="/singin">Singin</Nav.Link>
            </>
            }
            
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar
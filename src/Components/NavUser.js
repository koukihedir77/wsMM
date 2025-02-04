import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router';
const NavUse=({auth,setAuth})=>{
    return(
<div>

        <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Nav.Link as={Link}to='/ListUsers'>My APP</Nav.Link>
                <Nav className="me-auto">
                    <Nav.Link as={Link}to="/">Home</Nav.Link>

                    {
                        auth ?
                        <>
        <Nav.Link as={Link} to ='/ListUser'>Users</Nav.Link>
        <Nav.Link onClick={()=>setAuth(false)}>Logout</Nav.Link>
        </>
        :
        <Nav.Link onClick={()=>setAuth(true)}>Login</Nav.Link>
                    }
                
                </Nav>
                </Container>
            </Navbar>

</div>
    )
}

export default NavUse
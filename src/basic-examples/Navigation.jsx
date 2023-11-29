import { Nav, Navbar, Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
function Navigation(){
    return (
      <>
         <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand>My App</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Form</Nav.Link>
                <Nav.Link href="/table">Table</Nav.Link>
              </Nav>
            </Container>
        </Navbar>
        <Outlet />
      </>
    )
}
export default Navigation
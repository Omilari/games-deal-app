import { Nav, Navbar, NavbarBrand, Container } from "react-bootstrap";
const Navigation = () => {
    return (
            <Navbar bg="dark" variant="dark">
                    <Container>
                        <NavbarBrand href="/">Game Search</NavbarBrand>
                        <Nav className="me-auto">
                            <Nav.Link href="/search">Deals Page</Nav.Link>
                        </Nav>
                    </Container>
            </Navbar>
    )
}

export default Navigation;

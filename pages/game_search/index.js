import { Button, Card, Container, FloatingLabel, Form, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { useState } from "react";
import gamePreview from "../game_preview";


    
const Search_Home = () => {
    
    const [gameTitle, setGameTitle] = useState('');
  

    return ( 
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavbarBrand href="/">Game Search</NavbarBrand>
                    <Nav className="me-auto">
                        <Nav.Link href="/search">Deals Page</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <h1>This is the Game Search Home</h1>
            <p>It is in developement. I am testing routing</p>
            <Form model="searching" onSubmit={(e) => {handleSubmit(e)}}>
                <Form.Group className="mb-3" controlId="formGameSearch">
                    <Form.Label>Game Search</Form.Label>
                    <Form.Control name="game_title" type="text" placeholder="Search A Game" value={gameTitle} onChange={(e) => setGameTitle(e.target.value)}></Form.Control>
                    <Form.Text className="text-muted"> There is an extensive Catalog </Form.Text>
                </Form.Group>
                <Button variant="dark" type="submit" >
                    Search
                </Button>
            </Form>
            <gamePreview />
           
        </div>
     );

}

 
export default Search_Home;
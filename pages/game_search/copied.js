import { Button, Card, Container, FloatingLabel, Form, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { useState, useEffect } from "react";
import TestComponent from "../../components/test_component";
import GamePreview from "../game_preview";


const defaultEndpoint = `https://www.cheapshark.com/api/1.0/games?title=2k&limit=3&exact=0`;


export async function getServerSideProps(){
    const res = await fetch(defaultEndpoint)
    const data = await res.json()

    return { props: { data }}
}

 
    
const Search_Home = ({data}) => {
    
    let tData = []
    let  defaultResults = (data ? data: []);
    let [newQuery, setQuery] = useState('');

    const gameList = defaultResults.map(game => {
        return(
            <Card style={{ width: '18rem'}} key={game.gameId} >
                <Card.Title>{game.external}</Card.Title>
                <Card.Img variant="top" src={game.thumb} />
                <Card.Body>"Steam App Id:  {game.steamAppID}"</Card.Body>
            </Card>
        )
    })

    setQuery = (e) => {
        e.preventDefault;
        newQuery = e.target.value
        console.log(newQuery)
    }
    
    useEffect(() => {
        if(newQuery === '') return;
        const endpoint = `https://www.cheapshark.com/api/1.0/games?title=${newQuery}&limit=60&exact=0`;
        async function newRequest() {
            const res = await fetch(endpoint)
            const newData = await res.json()
            
            return <GameList res={newData} />

        }

        newRequest();
    }, [newQuery]);

    

    return ( 
        <>
            <div>
                <Navigation />
                <h1>This is the Game Search Home</h1>
                <p>It is in developement. I am testing routing</p>
                <Form model="" value={newQuery} onSubmit={setQuery} >
                    <Form.Group className="mb-3" controlId="formGameSearch">
                        <Form.Label>Game Search</Form.Label>
                        <Form.Control name="game_title" type="search" placeholder="Search A Game"></Form.Control>
                        <Form.Text className="text-muted"> There is an extensive Catalog </Form.Text>
                    </Form.Group>
                    <Button variant="dark" type="submit" >
                        Search
                    </Button>
                </Form>
                <p>{}</p>
                <GameList res={tData} />
                
            </div>
        </>
     );

}


const GameList = ({res}) => res.map(game => {
    return(
        <Card style={{ width: '18rem'}} key={game.gameId} >
            <Card.Title>{game.external}</Card.Title>
            <Card.Img variant="top" src={game.thumb} />
            <Card.Body>"Steam App Id:  {game.steamAppID}"</Card.Body>
        </Card>
    )
})


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

export default Search_Home;
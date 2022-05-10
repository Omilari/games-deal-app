import { Button, Card, Form, } from "react-bootstrap";
import { useState, useEffect } from "react";
import  GameList  from "../../components/game_thumb";
import  Navigation  from "../../components/navigate";
import '../../styles/GameSearch.module.css'



const defaultEndpoint = `https://www.cheapshark.com/api/1.0/games?title=2k&limit=3&exact=0`;


export async function getServerSideProps(){
    const res = await fetch(defaultEndpoint)
    const data = await res.json()

    return { props: { data }}
}

 
    
const Search_Home = ({data}) => {
    
    let  [defaultResults, setResult] = useState(data)
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

    useEffect(() => {
        const endpoint = `https://www.cheapshark.com/api/1.0/games?title=${newQuery}&limit=60&exact=0`;
        async function newRequest() {
            const res = await fetch(endpoint)
            const newData = await res.json()
            
            setResult(newData)

        }

        newRequest();
    }, [newQuery]);

    

    return ( 
        <>
            <div>
                <Navigation />
                <h1>This is the Game Search Home</h1>
                <p>It is in developement. I am testing routing</p>
                <div className="col-8">
                    <Form >
                        <Form.Group className="mb-3" controlId="formGameSearch">
                            <Form.Label>Game Search</Form.Label>
                            <Form.Control name="game_title" type="search" placeholder="Search A Game" onChange={e => setQuery(e.target.value)}></Form.Control>
                            <Form.Text className="text-muted"> There is an extensive Catalog </Form.Text>
                        </Form.Group>
                        <Button variant="dark" type="submit" >
                            Search
                        </Button>
                    </Form>
                </div>
                <div className="container" style={{display:"flex"}}>
                    <GameList res={defaultResults} />
                </div>

                
            </div>
        </>
     );

}


export default Search_Home;

import { Card } from "react-bootstrap";
import Link from 'next/link'

//thumb on main component 
const GameList = ({res}) => res.map(game => {
    return(
        <Link href='/game_search/[gameId]' as={`/game_search/${game.gameID}`}>
            <a>
                <Card key={game.gameID} style={{width: '18rem'}}>
                    <Card.Img variant="top" src={game.thumb} />
                    <Card.Body >
                        <Card.Title>{game.external}</Card.Title>
                        <Card.Subtitle>Game Details</Card.Subtitle>
                        <Card.Text style={{ 'font-size': '13px' }}>Steam App Id:  {game.steamAppID}</Card.Text>
                        <Card.Text style={{ 'font-size': '13px' }}>Cheapest Deal Id: {game.cheapestDealID}</Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </Link>
    )
})

export default GameList;

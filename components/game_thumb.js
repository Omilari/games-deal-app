import { Card } from "react-bootstrap";
import Link from 'next/link';
import '../styles/GameSearch.module.css'

//thumb on main component 
const GameList = ({res}) => res.map(game => {
    return(
        <ul>
            <li className="d-flex align-items-center text-light rounded bg-success flex-auto col-4">
                <Link href='/game_search/[gameId]' as={`/game_search/${game.gameID}`} key={game.gameID} >
                <a>
                <Card style={{width: '18rem'}} >
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
            </li>
        </ul>
        
    )
})

export default GameList;

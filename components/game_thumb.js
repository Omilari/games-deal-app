import { Card } from "react-bootstrap";

const GameList = ({res}) => res.map(game => {
    return(
        <Card style={{ width: '18rem'}} key={game.gameId} >
            <Card.Title>{game.external}</Card.Title>
            <Card.Img variant="top" src={game.thumb} />
            <Card.Body>"Steam App Id:  {game.steamAppID}"</Card.Body>
        </Card>
    )
})

export default GameList;


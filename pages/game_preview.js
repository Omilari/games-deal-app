import { Card } from "react-bootstrap";

const gamePreview = ({data}) => {

    const gameList = data.map(game => {
        return(
            <Card key={game.gameId}>
                <Card.Title>{game.external}</Card.Title>
                <Card.Img variant="top" src={game.thumb} />
                <Card.Body>"Steam App Id:  ${game.steamAppID}"</Card.Body>
            </Card>
        )
    })
    return (
        <div>
            {gameList}
        </div>
      );
}
 
export async function getServerSideProps(){
    const res = await fetch('https://www.cheapshark.com/api/1.0/games?title=ben10&limit=60&exact=0')
    const data = await res.json()

    return { props: { data }}
}

export default gamePreview;
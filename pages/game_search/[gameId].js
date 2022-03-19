import {Accordion, Card, Image} from 'react-bootstrap'

export async function getServerSideProps({query}){
    const { gameId } = query;
    const res = await fetch(`https://www.cheapshark.com/api/1.0/games?id=${gameId}`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}

export default function gameSpecifics({data}) {
    const { info, deals } = data;

    return (
        <>
            <Card style={{ width: '25rem'}} inverse>
                <Card.Img alt={info.title} src={info.thumb} width="100%" />
                <Card.ImgOverlay>
                    <Card.Title>{info.title}</Card.Title>
                    <Card.Subtitle>Steam App Id: {info.steamAppID}</Card.Subtitle>
                </Card.ImgOverlay>
            </Card>

        
        </>
    )
}


/*  <DealList deals={deals}/>  */
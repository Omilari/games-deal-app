import {Accordion, Card, Image} from 'react-bootstrap'

export async function getServerSideProps({query}){
    const { gameId } = query;
    const [res, res2] = await Promise.all([
        fetch(`https://www.cheapshark.com/api/1.0/games?id=${gameId}`),
        fetch(`https://www.cheapshark.com/api/1.0/stores`)

    ]);
    const [data, data2] = await Promise.all([
        res.json(),
        res2.json()
    ]);
    return {
        props: {
            data,
            data2
        }
    }
}

export default function gameSpecifics({data}, {data2}) {
    const { info, deals } = data;
    const list = data2

    //maps the deals and returns list game deals and associated stores
    const dealComp = deals.map(deal => {
        
        return(
            <div>
                <Card key={deal.storeID}>
                    <Card.Title>Store ID: {list[deal.storeID].storeName}</Card.Title>
                    <Card.Subtitle>Retail Price: {deal.retailPrice}</Card.Subtitle>
                    <Card.Text>Price: {deal.price}</Card.Text>
                    <Card.Text>DealID: {deal.dealID}</Card.Text>
                    <Card.Text>Savings: {deal.savings}</Card.Text>
                </Card>
            </div>
        )
    })


    //returns the specific game info
    return (
        <>
            <Card style={{ width: '25rem'}} inverse>
                <Card.Img alt={info.title} src={info.thumb} width="100%" />
                <Card.ImgOverlay>
                    <Card.Title>{info.title}</Card.Title>
                    <Card.Subtitle>Steam App Id: {info.steamAppID}</Card.Subtitle>
                </Card.ImgOverlay>
            </Card>
            {dealComp}

        
        </>
    )
}


/*  <DealList deals={deals}/>  */
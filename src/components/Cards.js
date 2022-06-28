import '../styles/Results.css'
import React from 'react';
import {Card} from 'react-bootstrap';


const Cards = ({cardInfo}) => {

    const renderCards = () => {
        const cardMapping = cardInfo.map((element, index) => <div key={index}>{renderCardInfo(element)}</div>)
        return(
            <div>
                {cardMapping}
            </div>
        );
    };

    const renderCardInfo = (element) => {
        let image = "";
        let defaultImage = "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg";
        let title = element["sourceResource.title"];
        let author = element["sourceResource.creator"];
        let description = element["sourceResource.description"];
        let object = element.object;
        image = object ? object : defaultImage;
        return(
            <div>
            <Card style={{ width: "18rem" }} className="box">  
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{author}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
            </div>
        );
    };

        return(
            <div className="grid">
                {renderCards()}
            </div>
        )
};

export default Cards;
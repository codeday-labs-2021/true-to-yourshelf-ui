import '../styles/Results.css'
import React from 'react';
import {Card} from 'react-bootstrap';
// import { render } from 'react-dom';

const Cards = () => {
    const cardInfo = [
        {
            image: "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg",
            title: "Book Title Here!",
            text: "Book Description Here, if any?"
        },
        {
            image: "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg",
            title: "Said Book Title",
            text: "Said Book Description here"
        },
        {
            image: "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg",
            title: "Another Book Title Here!",
            text: "Another Book description here"
        },
        {
            image: "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg",
            title: "Book Title Here!",
            text: "Book Description Here, if any?"
        },
        {
            image: "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg",
            title: "Said Book Title",
            text: "Said Book Description here"
        },
        {
            image: "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg",
            title: "Another Book Title Here!",
            text: "Another Book description here"
        }
    ];

    const renderCard = (card, index) => {

        return(
            <Card style={{ width: "18rem" }} key={index} className="box">  
            <Card.Img varant="top" src={card.image}/>
            <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
            </Card.Body>
            </Card>
        );
    };

    return <div className="grid"> {cardInfo.map(renderCard)} </div>;
};

export default Cards;
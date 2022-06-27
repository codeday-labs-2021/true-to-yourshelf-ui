import '../styles/Results.css'
import React, {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import TrueToYourShelfApi from '../api/TrueToYourShelfApi';
// import { render } from 'react-dom';

export const Cards = (cardInfo) => {

    

    render(){
        let {books} = cardInfo;
        let image = "";
        let defaultImage = "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
        for (let i = 0; i < cardInfo.length; i++) {
            if(!cardInfo[i].has("object")){
                image = defaultImage;
            }
            else{
                image = cardInfo.get("object")
            }
            return(
                <Card style={{ width: "18rem" }} className="box">  
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{cardInfo.get("title")}</Card.Title>
                    <Card.Text>{cardInfo.get("author")}</Card.Text>
                    <Card.Text>{cardInfo.get("description")}</Card.Text>
                </Card.Body>
                </Card>
            );
        };
        return "hi";
    };

    return(
        <div>
            {renderCards()}
        </div>
    );
};

export default Cards;
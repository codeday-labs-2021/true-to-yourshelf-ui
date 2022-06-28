import '../styles/Results.css'
import React, {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import TrueToYourShelfApi from '../api/TrueToYourShelfApi';
import { createSearchParams } from 'react-router-dom';
import { findByTitle } from '@testing-library/react';
// import { render } from 'react-dom';

class Cards extends React.Component {

    // response.map(book => {
    //     return {
    //         title: book["sourceResource.title"],
    //         author: book["sourceResource.creator"],
    //         description: book["sourceResource.description"],
    //         object: book.object,
    //     }
    // }

    constructor(props){
        super(props);
    }

    // mapBooksToCard(book){
        
    //     return(
    //             title.setBookTitle(book["sourceResource.title"]),
    //             // author: book["sourceResource.creator"],
    //             // description: book["sourceResource.description"],
    //             // object: book.object,
    //     )

    //     const newState = Object.assign({}, this.state, {
    //         books: newBooks
    //     });

    //     this.setState(newState);
    //     <Card style={{ width: "18rem" }} className="box">  
    //             <Card.Img variant="top" src={image}/>
    //             <Card.Body>
    //                 <Card.Title>{this.state.books.get("title")}</Card.Title>
    //                 <Card.Text>{this.state.books.get("author")}</Card.Text>
    //                 <Card.Text>{this.state.books.get("description")}</Card.Text>
    //             </Card.Body>
    //             </Card>
    // }

    renderCards(){
        const {cardInfo} = this.props;
        console.log("book " + cardInfo);
        let image = "";
        let defaultImage = "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg";
        cardInfo.map(element => {
            console.log(element);
            let title = element["sourceResource.title"];
            let author = element["sourceResource.creator"];
            let description = element["sourceResource.description"];
            let object = element.object;
            console.log(description);
            // if(!element.has("object")){
            //     image = defaultImage;
            // }
            // else{
            //     image = cardInfo.get("object")
            // }
            return(
                <Card style={{ width: "18rem" }} className="box">  
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{author}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                </Card>
            );
        });
    };

    render(){
        return(
            <div>
                {this.renderCards()}
            </div>
        )
    };
};

export default Cards;
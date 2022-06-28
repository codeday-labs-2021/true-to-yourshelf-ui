import '../styles/Results.css'
import React, {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import TrueToYourShelfApi from '../api/TrueToYourShelfApi';
import { createSearchParams } from 'react-router-dom';
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
        this.state = {
            books: [],
        }
    }

    organizeBooks(){
        let {cardInfo} = this.props;
        const newBooks = cardInfo.map(book => {
            return {
                title: book["sourceResource.title"],
                author: book["sourceResource.creator"],
                description: book["sourceResource.description"],
                object: book.object,
            }
        })

        const newState = Object.assign({}, this.state, {
            books: newBooks
        });

        this.setState(newState);
    }

    renderCards(){
        console.log("book 0 " + this.state.books[0]);
        let image = "";
        let defaultImage = "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg";
        this.state.books.forEach(element => {
            if(!element.has("object")){
                image = defaultImage;
            }
            else{
                image = this.state.books.get("object")
            }
            return(
                <Card style={{ width: "18rem" }} className="box">  
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{this.state.books.get("title")}</Card.Title>
                    <Card.Text>{this.state.books.get("author")}</Card.Text>
                    <Card.Text>{this.state.books.get("description")}</Card.Text>
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
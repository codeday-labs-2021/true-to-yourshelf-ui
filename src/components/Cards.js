import '../styles/Results.css'
import React from 'react';
import {Card} from 'react-bootstrap';
import TrueToYourShelfApi from '../api/TrueToYourShelfApi';
// import { render } from 'react-dom';

class Cards extends React.Component {

    state = {
        cardInfo: [],
    };

    componentDidMount() {
        TrueToYourShelfApi
            .getBooks("happy", "50", "apikey")
            .then(response => {
                
                const books = response.data.map(item => {
                    return {
                        title: item.title,
                        author: item.creator,
                        description: item.description,
                        object: item.object,
                    }
                })

                const newState = Object.assign({}, this.state, {
                        cardInfo: books
                  });
    
            this.setState(newState);
        })
        .catch(error => console.log(error));
    }

    renderCards = (card, index) => {
        let image = "";
        let defaultImage = "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg"
        for (let i = 0; i < this.state.cardInfo.length(); i++) {
            if(!this.state.cardInfo[i].has("object")){
                image = defaultImage;
            }
            else{
                image = this.state.cardInfo.get("object")
            }
            return(
                <Card style={{ width: "18rem" }} key={index} className="box">  
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{this.state.cardInfo.get("title")}</Card.Title>
                    <Card.Text>{this.state.cardInfo.get("author")}</Card.Text>
                    <Card.Text>{this.state.this.state.cardInfo.get("description")}</Card.Text>
                </Card.Body>
                </Card>
            );
        }
    };

    render(){
        return <div className="grid"> {this.renderCards} </div>;
    }
};

export default Cards;
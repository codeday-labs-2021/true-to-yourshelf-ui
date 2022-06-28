import '../styles/Results.css'
import React, {useState, useEffect} from 'react';

class Cards extends React.Component {

    constructor(props){
        super(props);
        this.renderCards = this.renderCards.bind(this);
        this.renderCardInfo = this.renderCardInfo.bind(this);
    }

    renderCards(){
        const {cardInfo} = this.props;

        return(
            <React.Fragment>
                {/*<Container>*/}
                cardInfo.map(element => {
                const {renderCardInfo(element);
                    return (
                        <Card style={{ width: "18rem" }} className="box">
                            <Card.Img variant="top" src={image}/>
                            <Card.Body>
                                <Card.Title>hello</Card.Title>
                                <Card.Text>hello</Card.Text>
                                <Card.Text>hello</Card.Text>
                            </Card.Body>
                            <Card.Body> Hello World </Card.Body>
                        </Card>

                )
            }


                {/*</Container>*/}
            </React.Fragment>


            // <div>
            //     {cardInfo.map(element => {console.log(element); this.renderCardInfo(element)})}
            // </div>
        );
    };


    //
    // renderCardInfo(element) {
    //     let image = "";
    //     let defaultImage = "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg";
    //     let title = element["sourceResource.title"];
    //     let author = element["sourceResource.creator"];
    //     let description = element["sourceResource.description"];
    //     let object = element.object;
    //     image = object ? object : defaultImage;
    //     return(
    //         <div>
    //             <p>{element}</p>
    //         {/* <Card style={{ width: "18rem" }} className="box">
    //             <Card.Img variant="top" src={image}/>
    //             <Card.Body>
    //                 <Card.Title>{title}</Card.Title>
    //                 <Card.Text>{author}</Card.Text>
    //                 <Card.Text>{description}</Card.Text>
    //             </Card.Body>
    //             <Card.Body> Hello World </Card.Body>
    //         </Card> */}
    //         </div>
    //     );
    // }

    render(){
        const {cardInfo} = this.props;
        return(
            <div>
                <p>AAAfjbbzlkdjngbn.kfghokdajslhfldkjbhflkadbklfhaldksfnlkabhidfgblkadsjblkjdahf;ojf;jkadhf</p>
                <div>
                    {/*{cardInfo.map()*/}
                    {/*(element => {console.log(element); this.renderCardInfo(element)})}*/}
                </div>
                 {/*{this.renderCards()} */}
            </div>
        )
    };
};

export default Cards;

                        // response.map(book => {
//     return {
//         title: book["sourceResource.title"],
//         author: book["sourceResource.creator"],
//         description: book["sourceResource.description"],
//         object: book.object,
//     }
// }

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

// import {Card} from 'react-bootstrap';
// import TrueToYourShelfApi from '../api/TrueToYourShelfApi';
// import { createSearchParams } from 'react-router-dom';
// import { findByTitle } from '@testing-library/react';
// // import { render } from 'react-dom';

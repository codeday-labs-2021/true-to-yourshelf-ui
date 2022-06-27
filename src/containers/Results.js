import '../styles/Results.css';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import Cards from '../components/Cards';
import React, {useState, useEffect} from 'react';
import { Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import { render } from '@testing-library/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
var emotion = "EMOTION"


class Results extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cardInfo: []
        };
    }

    // const [cardInfo, setCardInfo] = useState([]);
    

    // useEffect(()=> {
    //     TrueToYourShelfApi
    //         .getBooks("IMAGINATIVE", "50", "c44b31886102636bcb386abc55a62211")
    //         .then(response => {
                
    //             const books = response.map(book => {
    //                 return {
    //                     title: book["sourceResource.title"],
    //                     author: book["sourceResource.creator"],
    //                     description: book["sourceResource.description"],
    //                     object: book.object,
    //                 }
    //             })

    //             setCardInfo(books);
    //     })
    //     .catch(error => console.log(error));
    // });

    render(){
        return (
            <div className='Container'>
                <Header/>
                <div className="static-modal">
                <Modal.Dialog className='testing'>
                    <Modal.Header>   <Modal.Title>How are you feeling?</Modal.Title>   </Modal.Header> 
                    <Modal.Body>EMOTION HERE</Modal.Body> 
                    <Modal.Header >   <Modal.Title>How do you want to feel?</Modal.Title>   </Modal.Header>
                    <Modal.Body>OTHER EMOTION HERE</Modal.Body>
                </Modal.Dialog>
                </div>          
                <h1 className='title'>Here are some book recommendations for {emotion}</h1>
                <Cards(this.state.cards)/>
            </div>
        );
    }
}
root.render(<Results/>);

const mapStateToProps = (state) => {
    return {
        cards: state.cardInfo,
        query: getQuery,
    };
};

export default connect(mapStateToProps)(Results);
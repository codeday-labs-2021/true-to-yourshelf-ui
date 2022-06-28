import '../styles/Results.css';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import Cards from '../components/Cards';
import React, {useState, useEffect} from 'react';
import { Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import TrueToYourShelfApi from '../api/TrueToYourShelfApi';
import '../styles/Home.css';


// const root = ReactDOM.createRoot(document.getElementById('root'));
var emotion = "EMOTION"


class Results extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            submit: false,
            feeling: '',
            desiredFeeling: '',
            emotions: []
        };
        this.handleGetBooks = this.handleGetBooks.bind(this);
    }

    componentDidMount() {
        TrueToYourShelfApi.getEmotions()
            .then(response => {
                this.setState({emotions: response})
            })
            .catch(error => console.log(error));
    }


    onFSubmit = event => {
        if (document.getElementById("current").value === ''){
            document.getElementById("current").placeholder = 'Enter Emotion';
        }
        else{
            let currentEmotion =  document.getElementById("current").value;
            this.setState({feeling: currentEmotion});
            document.getElementById("current").value = '';
            document.getElementById("current").placeholder = '';
            this.setState({submit: !this.state.submit});//sets it to opposite of previous value
        }
    }

    onLSubmit = event => {
        let desiredEmotion =  document.getElementById("emotionDropdown").value;
        this.setState({desiredFeeling: desiredEmotion});

        console.log(desiredEmotion);
        this.handleGetBooks(desiredEmotion);
    }

    renderQuestions() {
        return(
            this.state.submit ?
                <>
                    <h3 className='question'>HOW DO YOU WANT TO FEEL?</h3>
                    <select id="emotionDropdown">
                        {this.state.emotions.map(emotion =>(
                            <option key={emotion} value={emotion}>
                                {emotion}
                            </option>
                        ))}
                    </select><br/>
                    <button onClick={this.onLSubmit.bind(this)}>SUBMIT</button>
                </>
                :
                <>
                    <h3 className='question'>HOW ARE YOU FEELING?</h3>
                    <input type="text" id="current"/><br/>
                    <button onClick={this.onFSubmit.bind(this)}>SUBMIT</button>
                </>
        )
    }

    handleGetBooks(desiredFeeling){
        const apiRequest = {"query": `${desiredFeeling}`, "pageSize": "50", "apiKey": "c44b31886102636bcb386abc55a62211"};
        return(
            // console.log("desiredFeeling" + this.state.desiredFeeling)

            TrueToYourShelfApi
                .getBooks(apiRequest)
                .then(response => {
                    this.setState({books: response})
                })
                .catch(error => console.log(error))
        )
    };

    renderCards(){
        console.log(this.state.books);
        return (
            <div className='Container'>
                <Header/>
                <div className="static-modal">
                    <Modal.Dialog className='testing'>
                        <Modal.Header>   <Modal.Title>How are you feeling?</Modal.Title>   </Modal.Header>
                        <Modal.Body>{this.state.feeling}</Modal.Body>
                        <Modal.Header>
                            <Modal.Title>How do you want to feel?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{this.state.desiredFeeling}</Modal.Body>
                    </Modal.Dialog>
                </div>
                <h1 className='title'>Here are some book recommendations for {this.state.desiredFeeling}</h1>
                <Cards cardInfo = {this.state.books}/>
            </div>
        );
    }

    render(){
        return(
            this.state.desiredFeeling ?
                <div>
                    {this.renderCards()}
                </div>
                :
                <div>
                    {this.renderQuestions()}
                </div>
        )
    }
}
// root.render(<Results/>);
export default Results;
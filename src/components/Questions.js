import '../styles/Home.css'
import React from 'react';

let currentEmotion = '';
let desiredEmotion = '';

class Questions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            submit: false,
            // feeling: '',
            // desiredFeeling: '',
        };
    }

    onFSubmit = event => {
        this.setState({submit: !this.state.submit})//sets it to opposite of previous value
        // this.setState({feeling: currentEmotion})
    }

    onLSubmit = event => {
        // this.setState({desiredFeeling: desiredEmotion})
    }

    render() {
        return(
            this.state.submit ?
                <>
                    <h3 className='question'>HOW DO YOU WANT TO FEEL?</h3>
                    <p>This is where the user input will go!</p>
                    <button onClick={this.onLSubmit.bind(this)}>SUBMIT</button>
                </>
            :
                <>
                    <h3 className='question'>HOW ARE YOU FEELING?</h3>
                    <p>This is where the user input will go!</p>
                    <button onClick={this.onFSubmit.bind(this)}>SUBMIT</button>
                </>
        )
    }
}

export default Questions;
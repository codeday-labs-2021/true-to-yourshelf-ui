import '../styles/Home.css'
import React from 'react';

class Questions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            submit: false,
            finalSumbit: false,
        };
    }

    onClick = event => {
        this.setState({submit: !this.state.submit})//sets it to opposite of previous value
     }

    render() {
        return(
            this.state.submit ?
                <>
                    <h3 className='question'>HOW DO YOU WANT TO FEEL?</h3>
                    <p>This is where the user input will go!</p>
                    <p>SUBMIT</p>
                </>
            :
                <>
                    <h3 className='question'>HOW ARE YOU FEELING?</h3>
                    <p>This is where the user input will go!</p>
                    <button onClick={this.onClick.bind(this)}>SUBMIT</button>
                </>
        )
    }
}

export default Questions;

{/* <h3 className='question'>HOW ARE YOU FEELING? </h3>
<p>This is where the user input will go!</p>
<p>SUBMIT</p> */}
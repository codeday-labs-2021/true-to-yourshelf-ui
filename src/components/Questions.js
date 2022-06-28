// import '../styles/Home.css'
// import React from 'react';

// let currentEmotion = '';
// let desiredEmotion = '';

// class Questions extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             submit: false,
//             feeling: '',
//             desiredFeeling: '',
//         };
//     }


//     onFSubmit = event => {
//         if (document.getElementById("current").value === ''){
//             document.getElementById("current").placeholder = 'Enter Emotion';
//         }
//         else{
//             currentEmotion =  document.getElementById("current").value
//             this.setState({feeling: currentEmotion})
//             document.getElementById("current").value = '';
//             document.getElementById("current").placeholder = '';
//             this.setState({submit: !this.state.submit})//sets it to opposite of previous value
//         }
//     }

//     onLSubmit = event => {
//         if (document.getElementById("desired").value === ''){
//             document.getElementById("desired").placeholder = 'Enter Emotion';
//         }
//         else{
//             desiredEmotion =  document.getElementById("desired").value
//             this.setState({desiredFeeling: desiredEmotion})
//             console.log(this.state.desiredFeeling)
//         }
//     }

//     render() {
//         return(
//             this.state.submit ?
//                 <>
//                     <h3 className='question'>HOW DO YOU WANT TO FEEL?</h3>
//                     <input type="text" id="desired"/><br/>
//                     <button onClick={this.onLSubmit.bind(this)}>SUBMIT</button>
//                 </>
//             :
//                 <>
//                     <h3 className='question'>HOW ARE YOU FEELING?</h3>
//                     <input type="text" id="current"/><br/>
//                     <button onClick={this.onFSubmit.bind(this)}>SUBMIT</button>
//                 </>
//         )
//     }
// }


// export default Questions;
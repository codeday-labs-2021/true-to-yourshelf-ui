import '../styles/Home.css';
import Header from '../components/Header';
import React from 'react';
import Results from './Results';

class Home extends React.Component {
    render(){
        return (
            <div className='Container'>
                <Header/>
                <Results/>
            </div>
        );
    }
}

export default Home;
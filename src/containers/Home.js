import '../styles/Home.css';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import React from 'react';
import { render } from '@testing-library/react';
import Contents from '../components/Contents';


const root = ReactDOM.createRoot(document.getElementById('root'));

class Home extends React.Component {
    render(){
        return (
            <div className='Container'>
                <Header/>
                <Contents/>
            </div>
        );
    }
}
root.render(<Home/>);
export default Home;
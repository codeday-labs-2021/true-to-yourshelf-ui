import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}
export default App;
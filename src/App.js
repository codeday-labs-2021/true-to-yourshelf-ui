import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Results from './containers/Results';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Results' element={<Results></Results>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}
export default App;
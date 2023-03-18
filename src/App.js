import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Neg from './components/Neg';

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <Home/>
  
    <Routes>
      <Route path='/' element={<Neg/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>

    </BrowserRouter>

     
     
    </div>
  );
}

export default App;

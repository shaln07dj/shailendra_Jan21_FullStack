
import './App.css';
import Home from './components/home';
import Nav from './components/Nav';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Movies from '../../../Crowdera/frontend/theatre-app/src/components/Movies';
import SeatBooking from '../../../Crowdera/frontend/theatre-app/src/components/SeatBooking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route  path="/home"element={<Home/>}/>
      <Route path='/movies'element={<Movies/>}/>
      <Route path='/seats'element={<SeatBooking/>}/>

      </Routes>
      </BrowserRouter>
    
      <Home/>
    </div>
  );
}

export default App;

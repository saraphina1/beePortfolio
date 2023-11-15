import  './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Navbar from './components/Navbar';


import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';



const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={< Home/>} />
          <Route path='/about' element={< About/>} />
          <Route path='/portfolio' element={< Portfolio/>} />
          <Route path='/contact' element={< Contact/>} />
        </Routes>
      </Router>
      
      
      
      
      
      
      <Footer/>
      </div>
  )
}

export default App
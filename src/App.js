import './App.css';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import { Link } from "react-router-dom";
import Nav from './components/nav';
import Home from './components/home';
import Contact from './components/contact';
import Projects from './components/projects/projects';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <Router >
        <Nav />
        <div className='bg-white h-screen'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/Skills' element={<Skills />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
          
        </div>
      </Router>
      
      
    </div>
  );
}

export default App;

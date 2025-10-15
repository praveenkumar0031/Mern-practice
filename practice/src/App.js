
import './App.css';
import Home from './Componets/Pages/Home';
import About from './Componets/Pages/About';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
function App() {
  
  return (
    <BrowserRouter>
    
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

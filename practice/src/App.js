
import './App.css';
import Home from './Componets/Pages/Home';
import About from './Componets/Pages/About';
import State from './Hooks/State'
import Like from './Hooks/Like';
import Forms from './Componets/Forms/Form';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
function App() {
  
  return (
    <BrowserRouter>
    
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/state">State</Link>|{" "}
        <Link to="/like">like</Link>|{" "}
        <Link to="/forms">form</Link>|{" "}
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/state" element={<State/>}/>
        <Route path="/like" Component={Like}/>
        <Route path="/forms" Component={Forms}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

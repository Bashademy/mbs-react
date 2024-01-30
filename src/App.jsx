import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Videos from './components/Videos.jsx';
import About from './components/About.jsx';
import Live from './pages/Live.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {

  return (
    <>
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/videos" element={ <Videos /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/live" element={ <Live /> } />
      </Routes> 
    </BrowserRouter>
   
    </>
  )
}

export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Sobre from './components/sobre';
import Preços from './components/precos';
import Fotos from './components/fotos';
import Contato from './components/contato';

function App() {
  return (
    <Router>
      <div>
        <header>
          <div className="logotipo">
            <h1><em style={{ fontSize: '60px' }}>KI</em> BELEZA BARBEARIA</h1>
            
            <h2>Barba & Cabelo</h2>
          </div>
        </header>
        
        <nav>
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/precos">Preços</Link>
          <Link to="/fotos">Fotos</Link>
          <Link to="/contato">Contato</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/precos" element={<Preços />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

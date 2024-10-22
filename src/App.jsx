import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cadastro from "./Components/Cadastro/Cadastro";
import Contato from "./Components/Pages/Contato";
import Sobre from "./Components/Pages/Sobre";
import './Components/Navbar/Navbar.css';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Pages/Home";

import Container from "./Components/layout/Container";



const App = () => {
    return (
      <>
        <Router>
          <div>
            <Link to="/">Home</Link>
            <Link to="/Sobre">Sobre</Link>
            <Link to="/Contato">Contato</Link>
            <Link to="/Cadastro">Cadastro</Link>
          </div>
          <Container customClass="min-height">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Sobre" element={<Sobre />} />
              <Route path="/Contato" element={<Contato />} />
              <Route path="/Cadastro" element={<Cadastro />} />
            </Routes>
          </Container>
          <Navbar />
          <Footer></Footer>
        </Router>
      </>
    );
}

export default App;

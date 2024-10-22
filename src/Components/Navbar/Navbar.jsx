import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">Logo</Link>

            <nav className="navbar">
                <ul className="list"> {/* Adicionando o className correto aqui */}
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/Contato">Contato</Link>
                    </li>
                    <li>
                        <Link to="/Cadastro">Cadastro</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;

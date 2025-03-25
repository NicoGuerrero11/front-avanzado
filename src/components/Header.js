import React from "react";
import '../styles/main.scss'
import logo from '../assets/img/logo_fa.png'

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="logo" className="header__logo" />
            <nav className="header__nav">
                <a href="/" className="header__nav-item">Inicio</a>
                <a href="/" className="header__nav-item">Nosotros</a>
            </nav>
        </header>
    );
};

export default Header;
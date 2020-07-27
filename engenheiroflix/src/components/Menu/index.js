import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css';

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo}  alt="Engenheiroflix logo"/>

            </a>
        </nav>     
        

    );
}

export default Menu;
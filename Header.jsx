import React, { useState } from 'react';
import '../App.css';
import '../css/website.css';
import Logo from '../img/LOGO.png';
import backgroundImage from '../img/background.jpg';

function Header() {
    const [sidenavWidth, setSidenavWidth] = useState('0px');

    const openNav = () => {
        setSidenavWidth('250px');
    };

    const closeNav = () => {
        setSidenavWidth('0px');
    };

    const toggleMenu = () => {
        if (sidenavWidth === '250px') {
            closeNav();
        } else {
            openNav();
        }
    };

    return (
        <div>
            <div className="background" style={{
                backgroundImage: `url(${backgroundImage})`
            }}>
                <div className="color-overlay"></div>
            </div>

            <div id="mySidenav" className="sidenav" style={{ width: sidenavWidth }}>
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}></a>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#" className="dropdown">
                    Recipes
                    <ul className="dropdown-menu">
                        <li><a href="#">Adobo</a></li>
                        <li><a href="#">Sinigang</a></li>
                        <li><a href="#">Pancit</a></li>
                        <li><a href="#">Lechon</a></li>
                    </ul>
                </a>
                <a href="#">Contact</a>
            </div>

            <div className="notify-menu">
                <logo>
                    <img src={Logo} className="logo" width="95" height="95" alt="Logo" />
                </logo>
                <nav>
                    <ul className="main-menu">
                        <li onClick={toggleMenu}>☰</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;

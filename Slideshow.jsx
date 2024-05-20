import React, { useState } from 'react';
import '../App.css';
import '../css/website.css';
import AdoboIMG from '../img/adobochicken.png';
import SinigangIMG from '../img/Sinigang.jpg';
import PancitIMG from '../img/pancit.jpg';

function Header() {
    const [slideIndex, setSlideIndex] = useState(0);
    const slides = [
        { img: AdoboIMG, title: 'Adobo Chicken' },
        { img: SinigangIMG, title: 'Sinigang' },
        { img: PancitIMG, title: 'Pancit' }
    ];

    const plusDivs = (n) => {
        let newIndex = slideIndex + n;
        if (newIndex >= slides.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = slides.length - 1;
        }
        setSlideIndex(newIndex);
    };

    return (
        <div>
            <h2 className="menu">MENU</h2>

            <div className="w3-content w3-display-container slideshow">
                {slides.map((slide, index) => (
                    <div className={`mySlides ${index === slideIndex ? 'active' : ''}`} key={index}>
                        <img src={slide.img} style={{ width: '100%' }} alt={slide.title} />
                        <div className="container">
                            <p>{slide.title}</p>
                        </div>
                    </div>
                ))}

                <button className="w3-button w3-black w3-display-left" onClick={() => plusDivs(-1)}>❮</button>
                <button className="w3-button w3-black w3-display-right" onClick={() => plusDivs(1)}>❯</button>
            </div>
        </div>
    );
}

export default Header;

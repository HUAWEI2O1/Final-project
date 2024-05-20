
import '../App.css';
import '../css/website.css';
import Light from '../img/light.webp';

function Greetings() {
    return (
        <div className="sections">
            <section id="section1" className="section-bg1 overlay">
                <img src={Light} className="image" alt="Background Image" />
                <div className="text">
                    <h2>Happy tummy, <br />happy life</h2>
                </div>
            </section>
        </div>

    );
}

export default Greetings;

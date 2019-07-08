import React, {useState} from "react";
import logo from "../images/logo.png";
import '../css/Home.css';
import Container from "react-bootstrap/Container";
import ReactCardFlip from 'react-card-flip';


const Home = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <Container>
            <div onClick={() => setIsFlipped(!isFlipped)}>
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <img src={logo} className="home-shield" alt="logo" key="front" />
                    <img src={logo} className="home-shield" alt="logo" key="back" />
                </ReactCardFlip>
            </div>
        </Container>
    )
};

export default Home
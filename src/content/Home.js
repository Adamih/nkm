import React, {Component} from "react";
import logo from "../images/logo.png";
import '../css/Home.css';
import Container from "react-bootstrap/Container";
import ReactCardFlip from 'react-card-flip';


class Home extends Component {
    constructor (props) {
        super (props);
        this.state = { isFlipped: false };
    }

    render(){
        return (
            <Container>
                <div onClick={() => this.setState ({ isFlipped: !this.state.isFlipped })}>
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection   ="horizontal">
                        <img src={logo} className="home-shield" alt="logo" key="front" />
                        <img src={logo} className="home-shield" alt="logo" key="back" />
                    </ReactCardFlip>
                </div>
            </Container>
        )
    }
}

export default Home
import React from "react";
import logo from "../images/logo.png";
import '../css/Home.css';
import Container from "react-bootstrap/Container";


const Home = React.memo(() => {
    return (
        <Container>
            <img src={logo} className="home-shield" alt="logo"/>
        </Container>
    )
});

export default Home
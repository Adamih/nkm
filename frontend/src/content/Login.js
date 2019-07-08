import React from "react";
import logo from "../images/logo.png";
import '../css/Login.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Login = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className={"login-shield-wrapper"}>
                        <img src={logo} className="login-shield" alt="logo"/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>User: </Form.Label>
                            <Form.Control type="text" placeholder="Enter username" style={{float: "top"}}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password: </Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>

                        <Button id={"login-btn"} variant="outline-light" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
};

export default Login
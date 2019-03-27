import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../images/logo.png';
import '../css/KM.css'
import Image from "react-bootstrap/Image";

const KM = React.memo(() => {
    return(
        <Container className="wide">
            <Row>
                <Col sm>
                    <div className={"person-card-wrapper"}>
                        <Image className={"portrait"} src={logo} />
                        <div>
                            <h1>Oliver Jensen</h1>
                        </div>
                    </div>
                </Col>
                <Col sm>
                    <div className={"person-card-wrapper"}>
                        <Image className={"portrait"} src={logo} />
                    </div>
                </Col>
                <Col sm>
                    <div className={"person-card-wrapper"}>
                        <Image className={"portrait"} src={logo} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm>
                    <div className={"person-card-wrapper"}>
                        <Image className={"portrait"} src={logo} />
                    </div>
                </Col>
                <Col sm>
                    <div className={"person-card-wrapper"}>
                        <Image className={"portrait"} src={logo} />
                    </div>
                </Col>
                <Col sm>

                </Col>
            </Row>
        </Container>
    )
});

export default KM;
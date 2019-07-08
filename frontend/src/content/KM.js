import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../images/logo.png';
import '../css/KM.css'
import Image from "react-bootstrap/Image";
import ReactCardFlip from "react-card-flip";

const KM = ({loadingUsers, users}) => {

    if (loadingUsers) {
        return "Loading ..."
    }

    return (
        <Container className="wide">
            <Row>
                {users.map((user, i) => {
                    return (
                        <Col sm key={"card"+i}>
                            <PresentationCard name={user.full_name} title={user.title} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
};

export default KM;

const PresentationCard = ({name, title}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className={"person-card-wrapper"} onClick={() => setIsFlipped(!isFlipped)}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <Image className={"portrait"} src={logo} key={"front"} />
                <Image className={"portrait"} src={logo} key={"back"}/>
            </ReactCardFlip>
            <h1>{name}</h1>
            <h3>{title}</h3>
        </div>
    )

}
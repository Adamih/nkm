import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../images/logo.png';
import '../css/KM.css'
import Image from "react-bootstrap/Image";
import ReactCardFlip from "react-card-flip";

const KM = React.memo(() => {
    const cols = 3;
    let content = [];
    for (let i = 0; i < cols; i++){
        content.push(<PresentationCard/>)
    }

    content = content.map((card, i) => {
        return (
            <Col sm key={"card"+i}>
                { card }
            </Col>
        )
    })

    return(
        <Container className="wide">
            <Row>
                { content }
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

class PresentationCard extends Component {
    constructor (props) {
        super (props);
        this.state = { isFlipped: false };
    }

    render(){
        return (
            <div className={"person-card-wrapper"} onClick={() => this.setState ({ isFlipped: !this.state.isFlipped })}>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <Image className={"portrait"} src={logo} key={"front"} />
                    <Image className={"portrait"} src={logo} key={"back"}/>
                </ReactCardFlip>
                <h1>Firstname Lastname</h1>
                <h3>Title</h3>
            </div>
        )
    }
}
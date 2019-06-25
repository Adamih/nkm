import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/KM.css'
import Image from "react-bootstrap/Image";
import ReactCardFlip from "react-card-flip";
import axios from "axios";

class KM extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            isLoading: true,
        };
    }

    async componentDidMount() {
        this.setState({isLoading: true});
        try {
            const res = await axios.get("http://localhost:8000/api/account/users/");
            console.log("data:",res.data);
            this.setState({data: res.data, isLoading: false});
        } catch (e) {
            console.log("error:", e)
        }

    }

    render() {
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }

        let content = [];
        const users = this.state.data;
        users.map((user) => {
            if (user.profile != null) {
                content.push(
                    <PresentationCard _name={user.profile.name} 
                                      _title={user.profile.title}
                                      _pooper={user.profile.proper}
                                      _party={user.profile.party} />);
            }
        });

        content = content.map((card, i) => {
            return (
                <Col sm key={"card"+i}>
                    {card}
                </Col>
            )
        });

        return (
            <Container className="wide">
                <Row>
                    {content}
                </Row>
            </Container>
        )
    }
}

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
                    <Image className={"portrait"} src={this.props._pooper} key={"front"} />
                    <Image className={"portrait"} src={this.props._party} key={"back"}/>
                </ReactCardFlip>
                <h1>{this.props._name}</h1>
                <h3>{this.props._title}</h3>
            </div>
        )
    }
}
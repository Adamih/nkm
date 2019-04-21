import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../images/logo.png';
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
            const res = await axios.get("http://172.17.0.1:5000/api/user");
            const json = res.data;
            const data = json.data;
            console.log("data:",data);
            this.setState({data: data, isLoading: false});
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
            content.push(<PresentationCard _name={user.full_name} _title={user.title} />);
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
        const { _name, _title } = this.props;
        return (
            <div className={"person-card-wrapper"} onClick={() => this.setState ({ isFlipped: !this.state.isFlipped })}>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <Image className={"portrait"} src={logo} key={"front"} />
                    <Image className={"portrait"} src={logo} key={"back"}/>
                </ReactCardFlip>
                <h1>{_name}</h1>
                <h3>{_title}</h3>
            </div>
        )
    }
}
import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/KM.css'
import Image from "react-bootstrap/Image";
import ReactCardFlip from "react-card-flip";

const KM = ({ loadingUsers, users }) => {

    if (loadingUsers) {
        return <p>Loading ...</p>;
    }

    return (
        <Container className="wide">
            <Row>
                {users.filter(user => user.profile != null).map((user, i) => {
                        return (<Col sm key={"card"+i}>
                                    <PresentationCard name={user.profile.name}
                                                      title={user.profile.title}
                                                      proper={user.profile.proper}
                                                      party={user.profile.party} />
                                </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
};

export default KM;

const PresentationCard = ({ name, title, proper, party }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className={"person-card-wrapper"} onClick={() => setIsFlipped(!isFlipped)}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <Image className={"portrait"} src={proper} key={"front"} />
                <Image className={"portrait"} src={party} key={"back"}/>
            </ReactCardFlip>
            <h1>{name}</h1>
            <h3>{title}</h3>
        </div>
    )
};

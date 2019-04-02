import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import '../css/Navbar.css';
import React, {Component} from 'react';
import logo from "../images/logo.png";
import pages, {defaultPage} from "../Pages-enum"

const _left_list = [
    {
        id: pages.HOME, title: {
            se: "Hem",
            en: "Home"
        }
    },
    {
        id: pages.SCHEDULE, title: {
            se: "Schema",
            en: "Schedule"
        }
    },
    {
        id: pages.KM, title: {
            se: "Klubbmästeriet",
            en: "About us"
        }
    },
    {
        id: pages.CONTACT, title: {
            se: "Kontakt",
            en: "Contact"
        }
    },
];

const _right_list = [
    {
        id: pages.LOGIN, title: {
            se: "Logga in",
            en: "Log in"
        }
    },
];

class NKM_Navbar extends Component {

    constructor(props) {
        super(props);
        this.onSelect = (props.onSelect === undefined) ? (id) => console.log("Navigation selected", id) : props.onSelect;
    }

    render() {
        const left_items = _left_list.map((item) => {
            return (<Nav.Link key={"nav_" + item.id} onSelect={() => this.onSelect(item.id)}
                              href={"#" + item.id}> {item.title.se} </Nav.Link>)
        });

        const right_items = _right_list.map((item) => {
            return (<Nav.Link key={"nav_" + item.id} onSelect={() => this.onSelect(item.id)}
                              href={"#" + item.id}> {item.title.se} </Nav.Link>)
        });

        const active = window.location.hash.substr(1);

        return (
            <Navbar sticky="top" variant="dark" expand="lg" collapseOnSelect>
                <Navbar.Brand onClick={() => this.onSelect(defaultPage)} href="#home">
                    <img src={logo} height="50px" className="nav-shield" alt="logo"/>
                    Nymbles Klubbmästeri
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" activeKey={active}>
                        {left_items}
                    </Nav>
                    <Nav variant="pills" className="justify-content-end" activeKey={active}>
                        {right_items}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NKM_Navbar;
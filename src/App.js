import React, {Component} from 'react';
import './css/App.css';

import bg from "./images/bg.jpg";
import Home from "./content/Home";
import Navbar from "./components/Navbar";
import Schedule from "./content/Schedule";
import Login from "./content/Login";
import {Route, Switch} from "react-router";

class App extends Component {
    render() {
        return (
            <div className="App">
                <img src={bg} id={"bg"} alt={"Background"}/>
                <Navbar onSelect={(id) => this.setState({page: id})}/>

                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/schedule" component={Schedule}/>
                    <Route exact path="/login" component={Login}/>
                    <Route component={Home}/>
                </Switch>
            </div>
        )
    }
}

export default App;

import React, {Component} from 'react';
import './css/App.css';

import bg from './images/bg.jpg';
import Home from './content/Home';
import Navbar from './components/Navbar';
import Schedule from './content/Schedule';
import Login from './content/Login';
import {Route, Switch} from 'react-router';
import pages from './Pages-enum'
import KM from "./content/KM";
import Contact from "./content/Contact";

class App extends Component {
    render() {
        return (
            <div className="App">
                <img src={bg} id={"bg"} alt={"Background"}/>
                <Navbar onSelect={(id) => this.setState({page: id})}/>

                <Switch>
                    <Route exact path={"/"+pages.HOME} component={Home}/>
                    <Route exact path={"/"+pages.SCHEDULE} component={Schedule}/>
                    <Route exact path={"/"+pages.KM} component={KM}/>
                    <Route exact path={"/"+pages.LOGIN} component={Login}/>
                    <Route exact path={"/"+pages.CONTACT} component={Contact}/>}
                    <Route component={Home}/>
                </Switch>
            </div>
        )
    }
}

export default App;

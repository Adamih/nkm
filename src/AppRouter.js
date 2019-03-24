import React, {Component} from "react";
import {HashRouter as Router} from "react-router-dom";
import App from "./App";

class AppRouter extends Component{
    render(){
        return (
            <Router basename="/" hashType="noslash">
                <App/>
            </Router>
        )
    }

}

export default AppRouter;
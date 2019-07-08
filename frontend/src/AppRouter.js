import React from "react";
import {HashRouter as Router} from "react-router-dom";
import App from "./App";

const AppRouter = () => {
    return (
        <Router basename="/" hashType="noslash">
            <App/>
        </Router>
    )
};

export default AppRouter;
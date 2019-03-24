import React, {Component} from 'react';
import './css/App.css';

import bg from "./images/bg.jpg";
import Home from "./content/Home";
import Navbar from "./components/Navbar";
import Schedule from "./content/Schedule";
import Login from "./content/Login";
import pages, {defaultPage} from "./Pages-enum";

const page_content = {
    [pages.HOME]: <Home/>,
    [pages.SCHEDULE]: <Schedule/>,
    [pages.KM]: <Home/>,
    [pages.CONTACT]: <Home/>,
    [pages.LOGIN]: <Login/>
};

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {page: props.page};
    }

    componentDidMount() {
        if (this.state.page === undefined)
            this.setState({page: defaultPage});
    }

    render() {
        const content = (this.state.page in page_content)
            ? page_content[this.state.page]
            : page_content[defaultPage];

        return (
            <div className="App">
                <img src={bg} id={"bg"} alt={"Background"}/>
                <Navbar onSelect={(id) => this.setState({page: id})}/>
                {content}
            </div>
        )
    }
}

export default App;

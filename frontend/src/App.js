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

function App() {
    const [loadingUsers, setLoadingUsers] = useState(false);
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoadingUsers(true)
                const res = await axios.get("http://localhost:8000/api/account/users/");
                setUsers(res.data);
                setLoadingUsers(false)
            } catch (e) {
                console.log("error:", e)
            }
        }

        fetchUsers();
    }, []);

    return (
        <div className="App">
            <img src={bg} id={"bg"} alt={"Background"}/>
            <Navbar onSelect={(id) => this.setState({page: id})}/>

            <Switch>
                <Route exact path={"/"+pages.HOME} component={Home}/>
                <Route exact path={"/"+pages.SCHEDULE} component={Schedule}/>
                <Route exact path={"/"+pages.KM} component={KM} loadingUsers={loadingUsers}/>
                <Route exact path={"/"+pages.LOGIN} component={Login}/>
                <Route exact path={"/"+pages.CONTACT} component={Contact}/>}
                <Route component={Home}/>
            </Switch>
        </div>
    )

}

export default App;

import React, {useEffect, useState} from 'react';
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
import axios from 'axios';

const App = () => {
    const [loadingUsers, setLoadingUsers] = useState(false);
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(null);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoadingUsers(true);
                const res = await axios.get("http://localhost:8000/api/account/users/");
                setUsers(res.data);
                setLoadingUsers(false)
            } catch (e) {
                console.log("error:", e)
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="App">
            <img src={bg} id={"bg"} alt={"Background"}/>
            <Navbar onSelect={(id) => setPage(id)} />

            <Switch>
                <Route exact path={"/"+pages.HOME} render={() => <Home/>}/>
                <Route exact path={"/"+pages.SCHEDULE} render={() => <Schedule/>}/>
                <Route exact path={"/"+pages.KM} render={() => <KM loadingUsers={loadingUsers} users={users} />} />
                <Route exact path={"/"+pages.LOGIN} render={() => <Login/>}/>
                <Route exact path={"/"+pages.CONTACT} render={() => <Contact/>}/>}
                <Route component={Home}/>
            </Switch>
        </div>
    )

}

export default App;

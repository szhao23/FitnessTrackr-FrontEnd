import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Routines from './components/Routines';
import Activities from './components/Activities';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

function App() {
    return (
        <>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} /> 
                <Route path='/routines' exact component={Routines} />
                <Route path='/activities' exact component={Activities} />
                <Route path='/sign-up' exact component={Register} />
                <Route path='/login' exact component={Login} />
            </Switch>
            </Router>
        </>
    )
}

export default App;

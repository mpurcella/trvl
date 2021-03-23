import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';

let App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' component={Home} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
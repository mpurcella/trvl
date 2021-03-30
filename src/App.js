import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import './App.css';
import './reset.css';
import Footer from './components/Footer';

let App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/products' component={Products} />
                    <Route path='/services' component={Services} />
                    <Route path='/sign-up' component={SignUp} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
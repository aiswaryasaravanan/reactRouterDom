import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import About from './About';
import Layouts from './Layouts';
import * as serviceWorker from './serviceWorker';

const navi=(
    <Router>
        <div>
            <ul>
                <li><link to="/">Home</link></li>
                <li><link to="/About">About</link></li>
                <li><link to="/Layouts">Layouts</link></li>
            </ul>
        </div>
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/About' component={About} />
            <Route path='/Layouts' component={Layouts} />
        </div>
    </Router>
)

ReactDOM.render(navi, document.getElementById('root'));


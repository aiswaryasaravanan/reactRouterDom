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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Layouts">Layouts</Link></li>
            </ul>
        
            <Route exact path='/' component={Home} />
            <Route path='/About' component={About} />
            <Route path='/Layouts' component={Layouts} />
        
        </div>
        
    </Router>
)

ReactDOM.render(navi, document.getElementById('root'));


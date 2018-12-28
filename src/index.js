import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Layouts from './Layouts';
import * as serviceWorker from './serviceWorker';

const navi=(
    <Router>
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/About' component={About} />
            <Route path='/Layouts' component={Layouts} />
        </div>
    </Router>
)

ReactDOM.render(navi, document.getElementById('root'));

// const routing = (
//     <Router>
//       <div>
//         <Route exact path="/" component={App} />
//         <Route path="/users" component={Users} />
//         <Route path="/contact" component={Contact} />
//       </div>
//     </Router>
//   )
//   ReactDOM.render(routing, document.getElementById('root'))


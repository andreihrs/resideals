import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import RentLayout from './components/rentLayout/RentLayout';
import NotFound from './components/notfound/notfound';
import NeighborhoodPage from './components/neighborhoodPage/NeighborhoodPage';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route 
          path="/rent" 
          render={(props) => <RentLayout {...props} title={"Rent"}/>} />
        <Route 
          path='/buy' 
          render={(props) => <RentLayout {...props} title={"Sale"}/>} />
        <Route 
          path='/neighborhood'
          component={NeighborhoodPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

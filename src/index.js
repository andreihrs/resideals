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
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import rootReducer from './store/reducers';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore(rootReducer)

const app = (
  <Provider store={store}>
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
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

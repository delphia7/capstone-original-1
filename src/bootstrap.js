import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import "./style/main.scss";

import history from './history';

import Layout from "./components/layout";

import Home from "./components/pages/home";
import Hairstyles from "./components/pages/hairstyles";
import Appointment from "./components/pages/appointment";
import Location from "./components/pages/location";

import SignIn from './components/auth/signin';
import Signup from './components/auth/signup';




function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
      
        <Layout>
        
        
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path='/' exact component={Home} />  
             <Route path='/hairstyles' component={Hairstyles} /> 
             <Route path="/appointment" component={Appointment} />
             <Route path='location' component={Location} />
            <Route path="/signin" component={SignIn} /> 
            {/* <SignIn />
            <signUp />  */}
          </Switch>
        </Layout>
      </Router>
      
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);

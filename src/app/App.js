import React from 'react';
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import './App.css';
import login from '../login/login.js';
import home from '../home.js';
import Signup from '../signup/signup.js';
import onepoundbag from '../onepoundbag.js';
import Orders from '../orders/orders';


function App() {


  return (

    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={login} />
          <Route exact path="/" component={ home } />
          <Route exact path="/signup" component={ Signup } />
          <Route exact path="/onepoundbag" component={ onepoundbag } />
          <Route exact path="/orders" component={ Orders } />
        </Switch>
      </BrowserRouter>   
    </div>
  );
}

export default App;

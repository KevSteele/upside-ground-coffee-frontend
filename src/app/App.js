import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './App.css';
import login from '../login/login.js';
import home from '../home.js';
import Signup from '../signup/signup.js';
import onepoundbag from '../onepoundbag.js';
import Orders from '../orders/orders';
import { AppContext } from '../libraries/appContext';
import AuthenticatedRoute from "../libraries/authRoute";
import Message from "../components/Message";
import ShoppingCart from '../shopping cart/shopping cart/shopping';


function App() {

  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    isLoggedIn()
  }, []);

  const isLoggedIn = async () => {
    let data = await fetch("http://localhost:3000/user/token", {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    let user = await data.json();
    console.log(user);

    if (user.token) {
      userHasAuthenticated(user.token)
    }
  }

  return (

    <div className="App">

      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated, message, setMessage }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={login} />
            <Route exact path="/" component={home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/onepoundbag" component={onepoundbag} />
            <Route exact path="/shopping-cart" component={ShoppingCart} />
            <AuthenticatedRoute path="/orders" component={Orders} />
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;

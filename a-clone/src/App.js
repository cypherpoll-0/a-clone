import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Payment from './Payment'
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51I4P3QK5sOQmW7eviDhgQoOzNVdOO8xDD9u0deFYPUa9M6l6vEoJZ26GJTWtGyqd6S1Kg7jcI9atNpFRbFDV5xBW00ORjKB7q8');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>{" "}
          <Route
            path="/checkout"
          >
            {" "}
            <Header />
            <Checkout />
          </Route>{" "}
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>{" "}
        </Switch>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;

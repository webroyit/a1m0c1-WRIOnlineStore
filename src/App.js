import React, { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import { auth } from './firebase';

const promise = loadStripe('pk_test_51I89PsJ3plYORpRYsT1s6qmY5NW8ANbzDOAcOj7xMEmdwO5NFclViTExzZQxl7exrBWMEE7lfXvyik9FbFhHUD2V003z8z96L5');

function App() {
  const [{}, dispatch] = useStateValue();
  
  useEffect(() => {
    // Will only run once when the app component loads

    // An listener to check if the user if login or not
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);

      if (authUser) {
        // The user just in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    })
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          {/* This is the default page */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

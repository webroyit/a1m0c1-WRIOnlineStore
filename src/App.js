import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout Page</h1>
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

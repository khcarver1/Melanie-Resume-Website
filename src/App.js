import './App.css';
import Experience from './Experience';
import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <Navbar />
          

        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Experience">
            <Experience />
          </Route>

        </Switch>
      </div>
    </Router>
  );

}


export default App;




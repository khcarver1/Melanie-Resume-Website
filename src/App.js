<<<<<<< HEAD
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



=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> 4712456238051e6371c4db9c0bd0bb6492621cde

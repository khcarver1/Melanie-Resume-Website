import './App.css';
import './Experience';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <header className="App-header">

            <p>
              Meet, Melanie Carver. Resident Badass.
            </p>
            <h3 className='Experience-btn'>Experience JS</h3>

          </header>

        </div>
    
      </div>
    </Router>
  );

}


export default App;




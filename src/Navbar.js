import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav ClassName='navbar'>
            <header className="App-header">

            <p>
              Meet, Melanie Carver. Resident Badass.
            </p>
            <div>
                <Link to='/Melanie-Resume-Website'>Home</Link>
                <Link to='/Melanie-Resume-Website/Experience'>Experience</Link>
            </div>

          </header>
        </nav>
    );
}

export default Navbar;
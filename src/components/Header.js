//import './App.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import App from "../App";

class Header extends React.Component{
    render() {
        return (<header className="App-header">
            <p>
                YBProduction
            </p>
            <Link to='/'>Home</Link>
            <hr />
        </header>);
    }
}

export default Header;

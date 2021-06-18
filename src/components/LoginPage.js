import React from 'react';
import Header from "./Header";
import {Link} from "react-router-dom";
import Footer from "./Footer";

class LoginPage extends React.Component{
    render() {
        return (
            <div>
                <Header/>
                <p>
                    Login
                </p>
                <Footer/>
            </div>
        );
    }
}

export default LoginPage;

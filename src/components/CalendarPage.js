import React from 'react';
import Header from "./Header";
import {Link} from "react-router-dom";
import Footer from "./Footer";

class CalendarPage extends React.Component{
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default CalendarPage;

import React from 'react';
import {Link} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import {getYearbooks} from "../services/API";


class YearbooksPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yearbooks:null
        }
    }

    async componentDidMount() {
        const yearbooks = getYearbooks().then(resp => {
            console.log(resp);
            this.setState({
                yearbooks: resp
            })
        });
    }

    render() {
        const ybooks = (this.state.yearbooks && this.state.yearbooks.map((ybook) =>
            <li key={ybook.id}>{JSON.stringify(ybook)}</li>
        ));
        return (
            <div>
                <Header/>
                <ul>
                    {ybooks}
                </ul>
                <div>
                    <Link to='/yearbooks/add'>Add a yearbook</Link>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default YearbooksPage;

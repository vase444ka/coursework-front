import React from 'react';
import Header from "./Header";
import {Link, useParams} from "react-router-dom";
import Footer from "./Footer";

function DistinctYearbookPage() {
    let {id} = useParams();
    return (
        <div>
            <Header/>
            <h2>Distinct: {id} </h2>
            <Footer/>
        </div>
    );
}

export default DistinctYearbookPage;

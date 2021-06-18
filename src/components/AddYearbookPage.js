import React from 'react';
import {Link} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import {addYearbook} from "../services/API";

const defaultInputValues = {
    number: 0,
    text: '',
};

class Input extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            value: defaultInputValues[this.props.type]
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.updateData(event.target.value);
        this.setState({value: event.target.value});
    }

    render() {
        return(
            <input
                type={this.props.type}
                placeholder={this.props.pholder}
                value={this.state.value}
                onChange={this.handleChange}
            />
        );
    }
}

class AddYearbookPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{
                id: undefined,
                grade: undefined,
                schoolName: '',
                type: '',
                isPhotographed: false,
                isEdited: false,
                price: undefined
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        addYearbook(this.state.data);
        {/*value update in the inputs*/}
    }

    render() {
        return (
            <div>
                <Header/>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter new Yearbook's data:
                        <Input
                            type={"number"}
                            pholder={"Grade..."}
                            updateData={val => this.setState({data: {...this.state.data, grade: val}})}
                        />
                        <Input
                            type={"text"}
                            pholder={"School..."}
                            updateData={val => this.setState({data: {...this.state.data, schoolName: val}})}
                        />
                        <Input
                            type={"text"}
                            pholder={"Type..."}
                            updateData={val => this.setState({data: {...this.state.data, type: val}})}
                        />
                        <Input
                            type={"number"}
                            pholder={"Price..."}
                            updateData={val => this.setState({data: {...this.state.data, price: val}})}
                        />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <Footer/>
            </div>
        );
    }
}
export default AddYearbookPage;
